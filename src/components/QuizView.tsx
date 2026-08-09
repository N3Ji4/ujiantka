import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  Award, 
  RotateCcw,
  BookOpen
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

export const QuizView: React.FC<QuizViewProps> = ({
  subject,
  questions,
  onFinishQuiz,
  onBack,
  onOpenMaterials
}) => {
  // Shuffle questions randomly when quiz starts so retaking gives a fresh order!
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [questionTimes, setQuestionTimes] = useState<Record<string, number>>({});
  const [timerSeconds, setTimerSeconds] = useState(0);

  useEffect(() => {
    // Randomize array copy
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
    setCurrentIndex(0);
    setAnswers({});
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

  const handleSelectOption = (optionId: 'A' | 'B' | 'C' | 'D') => {
    sound.playClick();
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId
    }));
  };

  const handleNext = () => {
    sound.playClick();
    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Finish quiz
      sound.playChillChime();
      const userAnswersList: UserAnswer[] = shuffledQuestions.map((q) => {
        const sel = answers[q.id] || 'A';
        return {
          questionId: q.id,
          selectedOption: sel,
          isCorrect: sel === q.correctAnswer,
          timeSpentSec: questionTimes[q.id] || 0,
          timestamp: Date.now()
        };
      });
      onFinishQuiz(userAnswersList, timerSeconds);
    }
  };

  const handlePrev = () => {
    sound.playClick();
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const formatTimer = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const answeredCount = Object.keys(answers).length;
  const progressPercent = ((currentIndex + 1) / shuffledQuestions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-24">
      {/* Top Bar */}
      <div className="flex items-center justify-between bg-white dark:bg-zinc-900 px-6 py-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 shadow-xs">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Keluar Ujian
        </button>

        <div className="flex items-center gap-4">
          <button
            onClick={onOpenMaterials}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
          >
            <BookOpen className="w-3.5 h-3.5" /> Ringkasan Materi
          </button>
          <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 rounded-xl">
            <Clock className="w-3.5 h-3.5 text-emerald-600" /> {formatTimer(timerSeconds)}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold text-zinc-500">
          <span>Soal {currentIndex + 1} dari {shuffledQuestions.length} ({subject.shortTitle})</span>
          <span>{answeredCount} Terjawab</span>
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
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
            Topik: {currentQuestion.topicTag}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            currentQuestion.difficulty === 'Mudah' ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300' :
            currentQuestion.difficulty === 'Sedang' ? 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300' :
            'bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300'
          }`}>
            Kesulitan: {currentQuestion.difficulty}
          </span>
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
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-950 dark:text-emerald-200 shadow-xs'
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
        <div className="flex items-center justify-between pt-6 border-t border-zinc-100 dark:border-zinc-800">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
              currentIndex === 0
                ? 'opacity-40 cursor-not-allowed bg-zinc-100 dark:bg-zinc-800 text-zinc-400'
                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200'
            }`}
          >
            Sebelumnya
          </button>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 hover:opacity-90 transition-opacity shadow-xs"
          >
            <span>{currentIndex === shuffledQuestions.length - 1 ? 'Selesaikan Ujian' : 'Selanjutnya'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
