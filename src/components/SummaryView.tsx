import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  RotateCcw, 
  Home, 
  BookOpen, 
  CheckSquare,
  HelpCircle
} from 'lucide-react';
import { Question, Subject, UserAnswer } from '../types';

interface SummaryViewProps {
  subject: Subject;
  questions: Question[];
  answers: UserAnswer[];
  totalTimeSec: number;
  onRetake: () => void;
  onGoHome: () => void;
  onOpenMaterials: () => void;
}

export const SummaryView: React.FC<SummaryViewProps> = ({
  subject,
  questions,
  answers,
  totalTimeSec,
  onRetake,
  onGoHome,
  onOpenMaterials
}) => {
  const correctCount = answers.filter((a) => a.isCorrect).length;
  const totalCount = questions.length;
  const scorePercent = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;

  const formatTimer = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins}m ${secs}s`;
  };

  const answerMap = new Map<string, UserAnswer>(answers.map((a) => [a.questionId, a]));

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-24">
      {/* Result Hero */}
      <div className="rounded-3xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 sm:p-12 shadow-lg text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto text-3xl font-extrabold shadow-inner">
          {scorePercent}%
        </div>

        <div className="space-y-2">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            {subject.title} - Selesai
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100">
            {scorePercent >= 80 ? 'Luar Biasa, Hasil Sangat Baik!' : scorePercent >= 60 ? 'Bagus, Pertahankan!' : 'Terus Tingkatkan Latihan!'}
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            Anda berhasil menjawab <strong className="text-zinc-900 dark:text-zinc-100">{correctCount}</strong> dari <strong className="text-zinc-900 dark:text-zinc-100">{totalCount}</strong> soal dengan benar.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800 space-y-1">
            <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">{correctCount}</div>
            <div className="text-xs text-zinc-500 font-medium">Jawaban Benar</div>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800 space-y-1">
            <div className="text-xl font-bold text-rose-600 dark:text-rose-400">{totalCount - correctCount}</div>
            <div className="text-xs text-zinc-500 font-medium">Jawaban Salah</div>
          </div>
          <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800 space-y-1">
            <div className="text-xl font-bold text-sky-600 dark:text-sky-400">{formatTimer(totalTimeSec)}</div>
            <div className="text-xs text-zinc-500 font-medium">Total Waktu</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={onRetake}
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 hover:opacity-90 transition-opacity shadow-xs"
          >
            <RotateCcw className="w-4 h-4" /> Ulangi Ujian (Soal Acak)
          </button>
          <button
            onClick={onOpenMaterials}
            className="flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
          >
            <BookOpen className="w-4 h-4" /> Pelajari Materi
          </button>
          <button
            onClick={onGoHome}
            className="flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
          >
            <Home className="w-4 h-4" /> Beranda
          </button>
        </div>
      </div>

      {/* Review Questions & Explanations */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
          Evaluasi & Pembahasan Soal
        </h2>

        <div className="space-y-4">
          {questions.map((q, idx) => {
            const userAns = answerMap.get(q.id);
            const isCorrect = userAns?.isCorrect;
            const chosen = userAns?.selectedOption || '-';

            return (
              <div 
                key={q.id}
                className={`rounded-2xl border p-6 bg-white dark:bg-zinc-900 shadow-xs space-y-4 ${
                  isCorrect 
                    ? 'border-emerald-200 dark:border-emerald-900/60' 
                    : 'border-rose-200 dark:border-rose-900/60'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs ${
                      isCorrect ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300' : 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300'
                    }`}>
                      {idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-zinc-400">Topik: {q.topicTag}</span>
                  </div>

                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                    isCorrect ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300' : 'bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300'
                  }`}>
                    {isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                    {isCorrect ? 'Benar' : 'Salah'}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100">
                  {q.question}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className={`p-3 rounded-xl border ${chosen === q.correctAnswer ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 text-emerald-900 dark:text-emerald-200' : 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 text-rose-900 dark:text-rose-200'}`}>
                    <strong>Pilihan Anda:</strong> {chosen}
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200">
                    <strong>Kunci Jawaban:</strong> {q.correctAnswer}
                  </div>
                </div>

                {q.explanation && (
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-300 space-y-1">
                    <strong className="text-zinc-900 dark:text-zinc-100 block">Pembahasan:</strong>
                    <p className="leading-relaxed">{q.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
