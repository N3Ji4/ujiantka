import React, { useState, useEffect, useCallback } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Bookmark, 
  CheckCircle2, 
  Clock, 
  HelpCircle, 
  Pause, 
  Play, 
  RotateCcw, 
  Sparkles, 
  Lightbulb, 
  Flag,
  AlertCircle,
  Eye,
  EyeOff,
  Layers,
  ShieldAlert
} from 'lucide-react';
import { Subject, Question, UserAnswer, Difficulty } from '../types';
import { questionsBySubject } from '../data';
import { sound } from '../utils/audio';

interface QuizViewProps {
  subject: Subject;
  mode: 'all' | 'missed_only';
  customQuestionIds?: string[];
  onFinishQuiz: (answers: Record<string, UserAnswer>, timeSpentSec: number) => void;
  onExitToHome: () => void;
  onOpenCheatSheet: (subject: Subject) => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  subject,
  mode,
  customQuestionIds,
  onFinishQuiz,
  onExitToHome,
  onOpenCheatSheet
}) => {
  const [activeQuestions] = useState<Question[]>(() => {
    const all = questionsBySubject[subject.id] || [];
    const filtered = customQuestionIds && customQuestionIds.length > 0
      ? all.filter((q) => customQuestionIds.includes(q.id))
      : all;
    return [...filtered].sort(() => Math.random() - 0.5);
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, UserAnswer>>({});
  const [flaggedIds, setFlaggedIds] = useState<Set<string>>(new Set());
  const [timerSec, setTimerSec] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  // Anti-cheat state
  const [cheatViolations, setCheatViolations] = useState(0);
  const [showCheatWarning, setShowCheatWarning] = useState(false);
  const [cheatWarningMessage, setCheatWarningMessage] = useState('');

  const handleExitClick = () => {
    sound.playChillChime();
    setShowExitConfirm(true);
  };

  const currentQ: Question | undefined = activeQuestions[currentIndex];

  // Timer interval
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setTimerSec((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Anti-cheat detection & event listeners
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setCheatViolations((v) => {
          const next = v + 1;
          setCheatWarningMessage(`Peringatan Pelanggaran #${next}: Anda terdeteksi meninggalkan halaman ujian atau membuka tab lain! Ujian ini menggunakan sistem anti-contek ketat.`);
          setShowCheatWarning(true);
          return next;
        });
      }
    };

    const handleWindowBlur = () => {
      setCheatViolations((v) => {
        const next = v + 1;
        setCheatWarningMessage(`Peringatan Pelanggaran #${next}: Jendela ujian kehilangan fokus (berpindah aplikasi/tab/minimize).`);
        setShowCheatWarning(true);
        return next;
      });
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      setCheatWarningMessage('Klik kanan (Context Menu) dinonaktifkan selama ujian berlangsung untuk mencegah kecurangan.');
      setShowCheatWarning(true);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent PrintScreen, F12, DevTools shortcuts, Copy, Save, Print
      if (
        e.key === 'PrintScreen' ||
        e.keyCode === 44 ||
        e.key === 'F12' ||
        ((e.ctrlKey || e.metaKey) && (e.shiftKey && (e.key === 'I' || e.key === 'C' || e.key === 'J' || e.key === 'i' || e.key === 'c' || e.key === 'j'))) ||
        ((e.ctrlKey || e.metaKey) && (e.key === 'U' || e.key === 'u' || e.key === 'S' || e.key === 's' || e.key === 'P' || e.key === 'p' || e.key === 'C' || e.key === 'c'))
      ) {
        e.preventDefault();
        setCheatViolations((v) => {
          const next = v + 1;
          setCheatWarningMessage(`Peringatan #${next}: Percobaan mengambil screenshot, menyalin soal, atau membuka Developer Tools terdeteksi!`);
          setShowCheatWarning(true);
          return next;
        });
      }

      // Quiz navigation shortcuts
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === '1' || e.key === 'a' || e.key === 'A') handleSelectOption('A');
      else if (e.key === '2' || e.key === 'b' || e.key === 'B') handleSelectOption('B');
      else if (e.key === '3' || e.key === 'c' || e.key === 'C') handleSelectOption('C');
      else if (e.key === '4' || e.key === 'd' || e.key === 'D') handleSelectOption('D');
      else if (e.key === 'ArrowRight') {
        if (currentIndex < activeQuestions.length - 1) setCurrentIndex((i) => i + 1);
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) setCurrentIndex((i) => i - 1);
      } else if (e.key === 'f' || e.key === 'F') {
        if (currentQ) toggleFlag(currentQ.id);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);
    document.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleWindowBlur);
      document.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, activeQuestions.length, currentQ]);

  const handleSelectOption = useCallback((optionId: 'A' | 'B' | 'C' | 'D') => {
    if (!currentQ) return;

    const isCorrect = optionId === currentQ.correctAnswer;
    
    // In exam mode, we do NOT show instant correct/incorrect feedback or play sound during the test.
    // Feedback and results are revealed only after submission.
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: {
        questionId: currentQ.id,
        selectedOption: optionId,
        isCorrect,
        timeSpentSec: 0,
        timestamp: Date.now()
      }
    }));
  }, [currentQ]);

  const toggleFlag = (qId: string) => {
    setFlaggedIds((prev) => {
      const next = new Set(prev);
      if (next.has(qId)) next.delete(qId);
      else next.add(qId);
      return next;
    });
  };

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const answeredCount = Object.keys(answers).length;
  const currentAnswer = currentQ ? answers[currentQ.id] : undefined;

  const handleFinish = () => {
    sound.playChillChime();
    onFinishQuiz(answers, timerSec);
  };

  if (!currentQ) return null;

  return (
    <div className="space-y-6 pb-24 select-none">
      {/* Top Controls & Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200/80 dark:border-zinc-800 pb-4">
        <div className="flex items-center gap-3">
          <button
            id="btn-quiz-exit"
            onClick={handleExitClick}
            className="p-2 rounded-xl text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            title="Keluar ke Beranda"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${subject.badgeBg}`}>
                {subject.shortTitle}
              </span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900 flex items-center gap-1">
                <ShieldAlert className="w-3 h-3" /> Mode Ujian Ketat (Anti-Contek)
              </span>
            </div>
            <h1 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mt-0.5">
              {mode === 'missed_only' ? 'Pengulangan Soal Belum Tepat' : 'Simulasi Ujian TKA Resmi'}
            </h1>
          </div>
        </div>

        {/* Timer & Submit Bar */}
        <div className="flex items-center gap-2">
          {/* Timer */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 text-xs font-mono font-bold text-zinc-800 dark:text-zinc-200">
            <Clock className="w-3.5 h-3.5 text-zinc-500" />
            <span>{formatTime(timerSec)}</span>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-0.5 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
              title={isPaused ? 'Lanjutkan Waktu' : 'Jeda Waktu'}
            >
              {isPaused ? <Play className="w-3 h-3 text-emerald-500" /> : <Pause className="w-3 h-3" />}
            </button>
          </div>

          {/* Selesaikan Button */}
          <button
            id="btn-finish-quiz"
            onClick={() => setShowSubmitConfirm(true)}
            className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-white transition-opacity hover:opacity-90 shadow-xs"
            style={{ backgroundColor: subject.accentColor }}
          >
            Selesaikan Ujian
          </button>
        </div>
      </div>

      {/* Question Numbers Strip Navigator */}
      <div className="p-3 rounded-2xl bg-zinc-50/80 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800">
        <div className="flex items-center justify-between gap-2 mb-2 px-1 text-[11px] font-medium text-zinc-500">
          <span>Peta Navigasi Soal (Jawaban Dirahasiakan Hingga Selesai)</span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" /> Terjawab
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-500" /> Ragu-ragu
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pr-1">
          {activeQuestions.map((q, idx) => {
            const isAnswered = !!answers[q.id];
            const isFlagged = flaggedIds.has(q.id);
            const isCurrent = idx === currentIndex;

            let btnClass = 'bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300';
            if (isCurrent) {
              btnClass = 'ring-2 ring-zinc-900 dark:ring-zinc-100 font-bold bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900';
            } else if (isAnswered) {
              btnClass = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 font-semibold';
            }

            return (
              <button
                key={q.id}
                id={`btn-nav-question-${idx + 1}`}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-8 h-8 rounded-lg text-xs flex items-center justify-center border transition-all ${btnClass}`}
              >
                {idx + 1}
                {isFlagged && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-500 border border-white dark:border-zinc-900" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Question Card */}
      <div className="rounded-3xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-xs p-6 sm:p-8 space-y-6">
        {/* Question Header & Meta */}
        <div className="flex items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800/80 pb-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
              Soal {currentIndex + 1} dari {activeQuestions.length}
            </span>
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
              {currentQ.topicTag}
            </span>
            <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
              currentQ.difficulty === 'Mudah'
                ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300'
                : currentQ.difficulty === 'Sedang'
                ? 'bg-sky-50 text-sky-700 dark:bg-sky-950/50 dark:text-sky-300'
                : 'bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300'
            }`}>
              Tingkat: {currentQ.difficulty}
            </span>
          </div>

          <button
            id="btn-flag-question"
            onClick={() => toggleFlag(currentQ.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
              flaggedIds.has(currentQ.id)
                ? 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300'
                : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${flaggedIds.has(currentQ.id) ? 'fill-amber-500 text-amber-500' : ''}`} />
            <span className="hidden sm:inline">
              {flaggedIds.has(currentQ.id) ? 'Ditandai Ragu' : 'Tandai Ragu'}
            </span>
          </button>
        </div>

        {/* Question Statement */}
        <div className="space-y-4">
          <p className="text-base sm:text-lg font-medium text-zinc-900 dark:text-zinc-100 leading-relaxed whitespace-pre-line">
            {currentQ.question}
          </p>

          {currentQ.contextSnippet && (
            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200/70 dark:border-zinc-800 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-serif leading-relaxed italic">
              {currentQ.contextSnippet}
            </div>
          )}

          {currentQ.mathFormula && (
            <div className="p-3.5 rounded-xl bg-zinc-100/70 dark:bg-zinc-800/50 font-mono text-sm text-emerald-800 dark:text-emerald-300">
              {currentQ.mathFormula}
            </div>
          )}
        </div>

        {/* 4 Options Grid (Exam mode: no instant green/red feedback until submission) */}
        <div className="grid grid-cols-1 gap-3 pt-2">
          {currentQ.options.map((opt) => {
            const isSelected = currentAnswer?.selectedOption === opt.id;

            let optionStyle = 'bg-zinc-50/50 dark:bg-zinc-950/40 border-zinc-200/80 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-100/60 dark:hover:bg-zinc-800/40';

            if (isSelected) {
              optionStyle = 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 font-semibold shadow-xs';
            }

            return (
              <button
                key={opt.id}
                id={`btn-option-${opt.id}`}
                onClick={() => handleSelectOption(opt.id)}
                className={`p-4 rounded-2xl border text-sm text-left transition-all flex items-start gap-3.5 group cursor-pointer ${optionStyle}`}
              >
                <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                  isSelected
                    ? 'bg-white/20 text-white dark:bg-zinc-900/20 dark:text-zinc-900'
                    : 'bg-zinc-200/70 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 group-hover:bg-zinc-300 dark:group-hover:bg-zinc-700'
                }`}>
                  {opt.id}
                </span>
                <span className="flex-1 pt-0.5 leading-relaxed">
                  {opt.text}
                </span>
              </button>
            );
          })}
        </div>

        {/* Bottom Next / Prev Question Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
          <button
            id="btn-prev-question"
            onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 disabled:opacity-40 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Soal Sebelumnya</span>
          </button>

          {currentIndex < activeQuestions.length - 1 ? (
            <button
              id="btn-next-question"
              onClick={() => setCurrentIndex((i) => i + 1)}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white rounded-xl shadow-xs transition-opacity hover:opacity-90"
              style={{ backgroundColor: subject.accentColor }}
            >
              <span>Soal Selanjutnya</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              id="btn-finish-quiz-bottom"
              onClick={() => setShowSubmitConfirm(true)}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white rounded-xl shadow-xs transition-opacity hover:opacity-90 bg-emerald-600"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Selesaikan Ujian ({answeredCount}/{activeQuestions.length})</span>
            </button>
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      {showSubmitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 w-full max-w-md rounded-2xl p-6 shadow-2xl space-y-4">
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              Selesaikan Ujian TKA?
            </h3>
            
            <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-zinc-500">Mata Pelajaran:</span>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">{subject.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Soal Terjawab:</span>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">{answeredCount} dari {activeQuestions.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Ditandai Ragu-ragu:</span>
                <span className="font-semibold text-amber-600">{flaggedIds.size}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Waktu Pengerjaan:</span>
                <span className="font-mono font-semibold text-zinc-800 dark:text-zinc-200">{formatTime(timerSec)}</span>
              </div>
            </div>

            {answeredCount < activeQuestions.length && (
              <p className="text-xs text-amber-700 dark:text-amber-300">
                ⚠️ Kamu masih memiliki {activeQuestions.length - answeredCount} soal yang belum dijawab.
              </p>
            )}

            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                id="btn-cancel-submit"
                onClick={() => setShowSubmitConfirm(false)}
                className="w-full py-2.5 text-xs font-semibold rounded-xl text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200"
              >
                Lanjut Mengerjakan
              </button>
              <button
                id="btn-confirm-submit"
                onClick={handleFinish}
                className="w-full py-2.5 text-xs font-semibold rounded-xl text-white shadow-xs"
                style={{ backgroundColor: subject.accentColor }}
              >
                Ya, Serahkan & Lihat Hasil
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Exit Confirmation Modal Popup */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 w-full max-w-sm rounded-2xl p-6 shadow-2xl space-y-4 text-center">
            <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-950/50 text-amber-600 flex items-center justify-center mx-auto text-xl">
              🍃
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                Keluar dari Ujian?
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Progres sesi ujian saat ini akan ditutup. Kamu bisa memulai ulang kapan saja.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                id="btn-cancel-exit"
                onClick={() => setShowExitConfirm(false)}
                className="w-full py-2.5 text-xs font-semibold rounded-xl text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200"
              >
                Tetap di Sini
              </button>
              <button
                id="btn-confirm-exit"
                onClick={onExitToHome}
                className="w-full py-2.5 text-xs font-semibold rounded-xl text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800"
              >
                Ya, Keluar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Anti-Cheat Strict Warning Modal */}
      {showCheatWarning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white dark:bg-zinc-900 border-2 border-rose-500 w-full max-w-md rounded-2xl p-6 shadow-2xl space-y-4 text-center">
            <div className="w-14 h-14 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-600 flex items-center justify-center mx-auto text-2xl animate-bounce">
              🛡️
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-extrabold text-rose-600 dark:text-rose-400">
                Peringatan Sistem Anti-Kecurangan
              </h3>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
                {cheatWarningMessage}
              </p>
              <div className="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/50 text-rose-800 dark:text-rose-200 text-xs font-mono font-bold">
                Total Pelanggaran Tercatat: {cheatViolations}
              </div>
            </div>

            <button
              onClick={() => setShowCheatWarning(false)}
              className="w-full py-3 text-xs font-bold rounded-xl text-white bg-rose-600 hover:bg-rose-700 transition-colors shadow-md"
            >
              Saya Mengerti & Kembali ke Ujian
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
