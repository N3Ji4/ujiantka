import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  BookOpen, 
  AlertTriangle, 
  X,
  Bookmark,
  LayoutGrid,
  Send
} from 'lucide-react';
import { Question, Subject, UserAnswer } from '../types';
import { sound } from '../utils/audio';

interface QuizViewProps {
  subject: Subject;
  questions: Question[];
  onFinishQuiz: (answers: UserAnswer[], timeSpentSec: number) => void;
  onBack: () => void;
  onOpenMaterials: () => void;
}

// Helper to shuffle array randomly using Fisher-Yates algorithm
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const QuizView: React.FC<QuizViewProps> = ({
  subject,
  questions,
  onFinishQuiz,
  onBack,
  onOpenMaterials
}) => {
  // Shuffle questions randomly when quiz starts so each session gives a fresh random order
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>(() => shuffleArray(questions));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [questionTimes, setQuestionTimes] = useState<Record<string, number>>({});
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showGridModal, setShowGridModal] = useState(false);

  useEffect(() => {
    // Re-randomize whenever questions or subject change
    const randomized = shuffleArray(questions);
    setShuffledQuestions(randomized);
    setCurrentIndex(0);
    setAnswers({});
    setFlagged({});
    setQuestionTimes({});
    setTimerSeconds(0);
  }, [questions, subject.id]);

  // Overall timer & per-question timer counter
  useEffect(() => {
    const interval = setInterval(() => {
      setTimerSeconds((prev) => prev + 1);
      const currentQ = shuffledQuestions[currentIndex];
      if (currentQ) {
        setQuestionTimes((prev) => ({
          ...prev,
          [currentQ.id]: (prev[currentQ.id] || 0) + 1
        }));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [currentIndex, shuffledQuestions]);

  if (shuffledQuestions.length === 0) {
    return (
      <div className="text-center py-20 space-y-4">
        <p className="text-zinc-500">Memuat soal latihan...</p>
      </div>
    );
  }

  const currentQuestion = shuffledQuestions[currentIndex];
  const selectedOption = answers[currentQuestion.id];
  const isCurrentFlagged = !!flagged[currentQuestion.id];

  const handleSelectOption = (optionId: 'A' | 'B' | 'C' | 'D') => {
    sound.playClick();
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId
    }));
  };

  const handleToggleFlag = () => {
    sound.playClick();
    setFlagged((prev) => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id]
    }));
  };

  const handleJumpToQuestion = (index: number) => {
    sound.playClick();
    setCurrentIndex(index);
    setShowGridModal(false);
  };

  const handleNext = () => {
    sound.playClick();
    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShowSubmitModal(true);
    }
  };

  const handlePrev = () => {
    sound.playClick();
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleFinalSubmit = () => {
    sound.playChillChime();
    setShowSubmitModal(false);
    const userAnswersList: UserAnswer[] = shuffledQuestions.map((q) => {
      const sel = answers[q.id] || 'A';
      return {
        questionId: q.id,
        selectedOption: sel,
        isCorrect: sel === q.correctAnswer,
        timeSpentSec: questionTimes[q.id] || 0,
        timestamp: Date.now(),
        isFlagged: !!flagged[q.id]
      };
    });
    onFinishQuiz(userAnswersList, timerSeconds);
  };

  const formatTimer = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const answeredCount = Object.keys(answers).length;
  const flaggedCount = Object.values(flagged).filter(Boolean).length;
  const unansweredCount = shuffledQuestions.length - answeredCount;
  const progressPercent = ((currentIndex + 1) / shuffledQuestions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-24">
      {/* Top Bar */}
      <div className="flex items-center justify-between bg-white dark:bg-zinc-900 px-5 sm:px-6 py-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 shadow-xs">
        <button
          onClick={() => {
            sound.playClick();
            setShowExitConfirm(true);
          }}
          className="flex items-center gap-2 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Keluar
        </button>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setShowGridModal(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
          >
            <LayoutGrid className="w-3.5 h-3.5 text-zinc-500" />
            <span>Nomor ({currentIndex + 1}/{shuffledQuestions.length})</span>
          </button>

          <button
            onClick={onOpenMaterials}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
          >
            <BookOpen className="w-3.5 h-3.5" /> Materi
          </button>

          <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 rounded-xl">
            <Clock className="w-3.5 h-3.5 text-emerald-600" /> {formatTimer(timerSeconds)}
          </div>
        </div>
      </div>

      {/* Progress & Quick Stats Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold text-zinc-500">
          <div className="flex items-center gap-3">
            <span>Soal {currentIndex + 1} dari {shuffledQuestions.length}</span>
            <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              {answeredCount} Terjawab
            </span>
            {flaggedCount > 0 && (
              <span className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400">
                <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
                {flaggedCount} Ragu
              </span>
            )}
          </div>
          <button 
            onClick={() => setShowSubmitModal(true)}
            className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            Selesai Sekarang
          </button>
        </div>
        <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-emerald-600 h-full transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="rounded-3xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-10 shadow-md space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
              Topik: {currentQuestion.topicTag}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              currentQuestion.difficulty === 'Mudah' ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300' :
              currentQuestion.difficulty === 'Sedang' ? 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300' :
              'bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300'
            }`}>
              {currentQuestion.difficulty}
            </span>
          </div>

          {/* Ragu-Ragu Toggle Button */}
          <button
            onClick={handleToggleFlag}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              isCurrentFlagged
                ? 'bg-amber-500 text-white shadow-xs'
                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-amber-100 hover:text-amber-800 dark:hover:bg-amber-950/50 dark:hover:text-amber-300'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isCurrentFlagged ? 'fill-current' : ''}`} />
            <span>{isCurrentFlagged ? 'Ragu-Ragu' : 'Tandai Ragu'}</span>
          </button>
        </div>

        <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-relaxed">
          {currentQuestion.question}
        </h2>

        {currentQuestion.mathFormula && (
          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800 font-mono text-xs text-emerald-600 dark:text-emerald-400">
            Rumus / Catatan: {currentQuestion.mathFormula}
          </div>
        )}

        {currentQuestion.contextSnippet && (
          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-300 italic">
            "{currentQuestion.contextSnippet}"
          </div>
        )}

        {/* Options */}
        <div className="space-y-3 pt-2">
          {currentQuestion.options.map((opt) => {
            const isSelected = selectedOption === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => handleSelectOption(opt.id)}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl text-left border transition-all ${
                  isSelected
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-950 dark:text-emerald-200 shadow-xs ring-1 ring-emerald-500/20'
                    : 'bg-zinc-50/70 dark:bg-zinc-950/40 border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:border-zinc-300 dark:hover:border-zinc-700'
                }`}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                  isSelected ? 'bg-emerald-600 text-white' : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                }`}>
                  {opt.id}
                </div>
                <span className="text-xs sm:text-sm font-medium">{opt.text}</span>
              </button>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-6 border-t border-zinc-100 dark:border-zinc-800 gap-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
              currentIndex === 0
                ? 'opacity-40 cursor-not-allowed bg-zinc-100 dark:bg-zinc-800 text-zinc-400'
                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200'
            }`}
          >
            Sebelumnya
          </button>

          <button
            onClick={handleToggleFlag}
            className={`sm:hidden px-3 py-2.5 rounded-xl text-xs font-semibold border ${
              isCurrentFlagged 
                ? 'bg-amber-100 border-amber-300 text-amber-800 dark:bg-amber-950 dark:border-amber-700 dark:text-amber-300' 
                : 'bg-zinc-100 border-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300'
            }`}
          >
            {isCurrentFlagged ? 'Ragu ✓' : 'Ragu?'}
          </button>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 hover:opacity-90 transition-opacity shadow-xs"
          >
            <span>{currentIndex === shuffledQuestions.length - 1 ? 'Selesaikan Ujian' : 'Selanjutnya'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Grid Nomor Soal Modal */}
      {showGridModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <LayoutGrid className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  Daftar Nomor Soal ({shuffledQuestions.length})
                </h3>
              </div>
              <button 
                onClick={() => setShowGridModal(false)}
                className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-between text-xs py-2 px-3 bg-zinc-50 dark:bg-zinc-950/60 rounded-xl border border-zinc-200/60 dark:border-zinc-800/80">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-md bg-emerald-500 inline-block" />
                <span className="text-zinc-600 dark:text-zinc-400">Terjawab ({answeredCount})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-md bg-amber-500 inline-block" />
                <span className="text-zinc-600 dark:text-zinc-400">Ragu ({flaggedCount})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-md bg-zinc-200 dark:bg-zinc-700 inline-block" />
                <span className="text-zinc-600 dark:text-zinc-400">Kosong ({unansweredCount})</span>
              </div>
            </div>

            {/* Numbers Grid */}
            <div className="grid grid-cols-6 sm:grid-cols-6 gap-2 max-h-60 overflow-y-auto p-1">
              {shuffledQuestions.map((q, idx) => {
                const isAnswered = !!answers[q.id];
                const isQFlagged = !!flagged[q.id];
                const isCurrent = idx === currentIndex;

                let btnStyle = 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200';
                if (isQFlagged) {
                  btnStyle = 'bg-amber-500 text-white font-bold shadow-xs';
                } else if (isAnswered) {
                  btnStyle = 'bg-emerald-600 text-white font-bold shadow-xs';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => handleJumpToQuestion(idx)}
                    className={`h-11 rounded-xl flex items-center justify-center text-xs font-semibold transition-all relative ${btnStyle} ${
                      isCurrent ? 'ring-2 ring-zinc-900 dark:ring-white scale-105 z-10' : ''
                    }`}
                  >
                    {idx + 1}
                    {isQFlagged && (
                      <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setShowGridModal(false)}
                className="w-full px-4 py-2.5 rounded-xl text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Submit Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Send className="w-6 h-6" />
              </div>
              <button 
                onClick={() => setShowSubmitModal(false)}
                className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                Kumpulkan Jawaban Ujian?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Pastikan kamu sudah memeriksa semua jawaban sebelum menyelesaikan ujian.
              </p>
            </div>

            {/* Status Breakdown */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800">
                <div className="text-base font-bold text-emerald-700 dark:text-emerald-300">{answeredCount}</div>
                <div className="text-[11px] text-emerald-600 dark:text-emerald-400">Terjawab</div>
              </div>
              <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800">
                <div className="text-base font-bold text-amber-700 dark:text-amber-300">{flaggedCount}</div>
                <div className="text-[11px] text-amber-600 dark:text-amber-400">Ragu-Ragu</div>
              </div>
              <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                <div className="text-base font-bold text-zinc-700 dark:text-zinc-300">{unansweredCount}</div>
                <div className="text-[11px] text-zinc-500">Belum Isi</div>
              </div>
            </div>

            {unansweredCount > 0 && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-xs text-rose-700 dark:text-rose-300">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Masih ada <strong>{unansweredCount} soal</strong> yang belum kamu jawab!</span>
              </div>
            )}

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="flex-1 px-4 py-2.5 rounded-xl text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 transition-colors"
              >
                Periksa Lagi
              </button>
              <button
                onClick={handleFinalSubmit}
                className="flex-1 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs"
              >
                Ya, Kumpulkan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Exit Confirmation Modal */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <button 
                onClick={() => setShowExitConfirm(false)}
                className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                Keluar dari Sesi Latihan?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Progres latihan yang sedang kamu kerjakan saat ini tidak akan disimpan jika kamu keluar sekarang. Yakin ingin mengakhiri sesi?
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setShowExitConfirm(false)}
                className="flex-1 px-4 py-2.5 rounded-xl text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 transition-colors"
              >
                Lanjutkan Latihan
              </button>
              <button
                onClick={() => {
                  sound.playClick();
                  setShowExitConfirm(false);
                  onBack();
                }}
                className="flex-1 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 transition-colors shadow-xs"
              >
                Ya, Keluar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
