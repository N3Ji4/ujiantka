import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  RotateCcw, 
  BookOpen, 
  ArrowLeft, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Sparkles, 
  TrendingUp, 
  Filter, 
  Layers, 
  FileText,
  ChevronDown,
  ChevronUp,
  AlertTriangle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Subject, Question, UserAnswer } from '../types';
import { questionsBySubject } from '../data';

interface SummaryViewProps {
  subject: Subject;
  answers: Record<string, UserAnswer>;
  timeSpentSec: number;
  onRetakeQuiz: () => void;
  onRetakeMissedOnly: (missedQuestionIds: string[]) => void;
  onOpenMaterials: (subject: Subject) => void;
  onNavigateHome: () => void;
}

export const SummaryView: React.FC<SummaryViewProps> = ({
  subject,
  answers,
  timeSpentSec,
  onRetakeQuiz,
  onRetakeMissedOnly,
  onOpenMaterials,
  onNavigateHome
}) => {
  const allQuestions = questionsBySubject[subject.id] || [];
  const [filterMode, setFilterMode] = useState<'all' | 'incorrect' | 'correct'>('all');
  const [expandedQId, setExpandedQId] = useState<string | null>(null);

  const answerList = Object.values(answers) as UserAnswer[];
  const totalAnswered = answerList.length;
  const correctCount = answerList.filter((a) => a.isCorrect).length;
  const incorrectCount = totalAnswered - correctCount;
  const unansweredCount = allQuestions.length - totalAnswered;
  const accuracy = allQuestions.length > 0 ? Math.round((correctCount / allQuestions.length) * 100) : 0;

  const missedQuestionIds = allQuestions
    .filter((q) => !answers[q.id] || !answers[q.id].isCorrect)
    .map((q) => q.id);

  // Trigger celebration on mount if score >= 80%
  useEffect(() => {
    if (accuracy >= 80) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Safe discard
      }
    }
  }, [accuracy]);

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins} menit ${secs} detik`;
  };

  const avgSecPerQuestion = totalAnswered > 0 ? Math.round(timeSpentSec / totalAnswered) : 0;

  // Group by topic tag for analytics
  const topicStats: Record<string, { total: number; correct: number }> = {};
  allQuestions.forEach((q) => {
    if (!topicStats[q.topicTag]) {
      topicStats[q.topicTag] = { total: 0, correct: 0 };
    }
    topicStats[q.topicTag].total += 1;
    if (answers[q.id]?.isCorrect) {
      topicStats[q.topicTag].correct += 1;
    }
  });

  const filteredQuestions = allQuestions.filter((q) => {
    const ans = answers[q.id];
    if (filterMode === 'correct') return ans?.isCorrect;
    if (filterMode === 'incorrect') return !ans || !ans.isCorrect;
    return true;
  });

  return (
    <div className="space-y-8 pb-24">
      {/* Top Banner with Score */}
      <div className="rounded-3xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-xs p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 dark:border-zinc-800 pb-6">
          <div className="flex items-center gap-3">
            <div 
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-xs"
              style={{ backgroundColor: subject.accentColor }}
            >
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${subject.badgeBg}`}>
                {subject.shortTitle}
              </span>
              <h1 className="text-xl sm:text-2xl font-extrabold text-zinc-900 dark:text-zinc-100">
                Laporan Hasil Latihan TKA
              </h1>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Analisis akurasi, kecepatan waktu, dan pemetaan topik yang perlu diperdalam.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="btn-summary-home"
              onClick={onNavigateHome}
              className="px-3.5 py-2 text-xs font-semibold rounded-xl text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200"
            >
              Beranda
            </button>
            <button
              id="btn-summary-materials"
              onClick={() => onOpenMaterials(subject)}
              className="px-3.5 py-2 text-xs font-semibold text-white rounded-xl shadow-xs"
              style={{ backgroundColor: subject.accentColor }}
            >
              Buka Materi Terkait
            </button>
          </div>
        </div>

        {/* 4 Score Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200/60 dark:border-zinc-800 space-y-1">
            <span className="text-[11px] font-medium text-zinc-500">Skor Akhir</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100">
              {correctCount} <span className="text-sm font-normal text-zinc-400">/ {allQuestions.length}</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-800/60 space-y-1">
            <span className="text-[11px] font-medium text-emerald-700 dark:text-emerald-300">Tingkat Akurasi</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-800 dark:text-emerald-300">
              {accuracy}%
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200/60 dark:border-zinc-800 space-y-1">
            <span className="text-[11px] font-medium text-zinc-500">Total Waktu</span>
            <div className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 font-mono">
              {formatTime(timeSpentSec)}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200/60 dark:border-zinc-800 space-y-1">
            <span className="text-[11px] font-medium text-zinc-500">Rata-rata per Soal</span>
            <div className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 font-mono">
              {avgSecPerQuestion} detik
            </div>
          </div>
        </div>

        {/* Action Bar for Retake */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {missedQuestionIds.length > 0 && (
            <button
              id="btn-retake-missed"
              onClick={() => onRetakeMissedOnly(missedQuestionIds)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-amber-900 dark:text-amber-200 bg-amber-100 dark:bg-amber-950/60 hover:bg-amber-200 border border-amber-200 dark:border-amber-800 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Ulangi {missedQuestionIds.length} Soal yang Belum Tepat</span>
            </button>
          )}

          <button
            id="btn-retake-all"
            onClick={onRetakeQuiz}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 transition-colors shadow-xs"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>🔄 Ulangi Random (Acak Soal Wajib)</span>
          </button>
        </div>
      </div>

      {/* Topic Analytics Breakdown */}
      <div className="rounded-3xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-xs p-6 sm:p-8 space-y-4">
        <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
          <Layers className="w-4 h-4 text-emerald-500" />
          Pemetaan Penguasaan Berdasarkan Topik
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {Object.entries(topicStats).map(([topic, stats]) => {
            const topicAcc = Math.round((stats.correct / stats.total) * 100);
            return (
              <div
                key={topic}
                className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200/60 dark:border-zinc-800 space-y-2"
              >
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-zinc-800 dark:text-zinc-200">{topic}</span>
                  <span className={topicAcc >= 75 ? 'text-emerald-600' : 'text-amber-600'}>
                    {stats.correct}/{stats.total} ({topicAcc}%)
                  </span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${topicAcc}%`,
                      backgroundColor: topicAcc >= 75 ? '#10b981' : '#f59e0b'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Comprehensive Question Breakdown */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
              Bedah Kunci Jawaban & Pembahasan Lengkap
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Klik pada setiap butir soal untuk membaca trik eliminasi dan konsep intinya.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                filterMode === 'all'
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
              }`}
            >
              Semua ({allQuestions.length})
            </button>
            <button
              onClick={() => setFilterMode('incorrect')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                filterMode === 'incorrect'
                  ? 'bg-rose-600 text-white'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
              }`}
            >
              Salah / Belum ({missedQuestionIds.length})
            </button>
            <button
              onClick={() => setFilterMode('correct')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                filterMode === 'correct'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
              }`}
            >
              Benar ({correctCount})
            </button>
          </div>
        </div>

        {/* Question Review List */}
        <div className="space-y-3">
          {filteredQuestions.map((q) => {
            const ans = answers[q.id];
            const isCorrect = ans?.isCorrect;
            const isExpanded = expandedQId === q.id;

            return (
              <div
                key={q.id}
                className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-xs overflow-hidden transition-all"
              >
                <div
                  onClick={() => setExpandedQId(isExpanded ? null : q.id)}
                  className="p-4 sm:p-5 flex items-start justify-between gap-3 cursor-pointer hover:bg-zinc-50/50 dark:hover:bg-zinc-800/40 transition-colors"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="mt-0.5">
                      {ans ? (
                        isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        ) : (
                          <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                        )
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-zinc-300 dark:border-zinc-700" />
                      )}
                    </div>
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap text-xs">
                        <span className="font-bold text-zinc-900 dark:text-zinc-100">
                          Soal #{q.number}
                        </span>
                        <span className="text-zinc-400">•</span>
                        <span className="text-zinc-500 dark:text-zinc-400">{q.topicTag}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 font-medium line-clamp-2">
                        {q.question}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                      Kunci: {q.correctAnswer}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-zinc-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-zinc-400" />
                    )}
                  </div>
                </div>

                {/* Expanded Explanation */}
                {isExpanded && (
                  <div className="p-5 border-t border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/60 space-y-4 text-xs sm:text-sm">
                    {/* Full question & Options */}
                    <div className="space-y-2">
                      <p className="font-medium text-zinc-900 dark:text-zinc-100 whitespace-pre-line">
                        {q.question}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                        {q.options.map((opt) => {
                          const isKey = opt.id === q.correctAnswer;
                          const isUserChoice = ans?.selectedOption === opt.id;

                          let style = 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300';
                          if (isKey) {
                            style = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-100 font-semibold';
                          } else if (isUserChoice && !isKey) {
                            style = 'bg-rose-50 dark:bg-rose-950/60 border-rose-400 text-rose-900 dark:text-rose-100';
                          }

                          return (
                            <div key={opt.id} className={`p-2.5 rounded-xl border text-xs flex items-start gap-2 ${style}`}>
                              <span className="font-bold">{opt.id}.</span>
                              <span>{opt.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Pembahasan detail */}
                    <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 space-y-2">
                      <div className="font-bold text-zinc-900 dark:text-zinc-100 text-xs">
                        Pembahasan Konseptual:
                      </div>
                      <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-line text-xs">
                        {q.explanation}
                      </p>
                      <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 text-xs text-amber-700 dark:text-amber-400 font-medium">
                        💡 Tips TKA: {q.tkaExamTip}
                      </div>
                    </div>
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
