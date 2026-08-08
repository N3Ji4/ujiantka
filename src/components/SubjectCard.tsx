import React from 'react';
import { 
  Calculator, 
  BookOpen, 
  Lightbulb, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Layers,
  Sparkles
} from 'lucide-react';
import { Subject } from '../types';

interface SubjectCardProps {
  subject: Subject;
  answeredCount: number;
  totalQuestions: number;
  onOpenMaterials: (subject: Subject) => void;
  onStartQuiz: (subject: Subject) => void;
  onOpenCheatSheet: (subject: Subject) => void;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({
  subject,
  answeredCount,
  totalQuestions,
  onOpenMaterials,
  onStartQuiz,
  onOpenCheatSheet
}) => {
  const percentComplete = totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;

  const renderIcon = () => {
    switch (subject.iconName) {
      case 'Calculator':
        return <Calculator className="w-5 h-5" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5" />;
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <div 
      className="group relative rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/90 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden"
    >
      {/* Top accent line */}
      <div 
        className="h-1 w-full"
        style={{ backgroundColor: subject.accentColor }}
      />

      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        {/* Header with icon & badge */}
        <div>
          <div className="flex items-center justify-between gap-3 mb-3">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-xs"
              style={{ backgroundColor: subject.accentColor }}
            >
              {renderIcon()}
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${subject.badgeBg}`}>
                {subject.badgeText}
              </span>
              <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full">
                {subject.shortTitle}
              </span>
            </div>
          </div>

          <h3 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-700 dark:group-hover:text-white transition-colors">
            {subject.title}
          </h3>
          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-0.5">
            {subject.subtitle}
          </p>

          <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2.5 leading-relaxed line-clamp-2">
            {subject.description}
          </p>
        </div>

        {/* Meta details */}
        <div className="space-y-3 pt-2 border-t border-zinc-100 dark:border-zinc-800/60">
          <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-zinc-400" />
              {subject.topics.length} Topik Inti
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-zinc-400" />
              ±40 menit
            </span>
          </div>

          {/* Progress bar */}
          <div>
            <div className="flex justify-between text-[11px] font-medium mb-1">
              <span className="text-zinc-500 dark:text-zinc-400">Kemajuan Latihan</span>
              <span className="text-zinc-700 dark:text-zinc-300">
                {answeredCount}/{totalQuestions} Soal ({percentComplete}%)
              </span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${percentComplete}%`,
                  backgroundColor: subject.accentColor
                }}
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          <button
            id={`btn-subject-materials-${subject.id}`}
            onClick={() => onOpenMaterials(subject)}
            className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-zinc-700 dark:text-zinc-200 bg-zinc-100/80 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Materi Inti</span>
          </button>

          <button
            id={`btn-subject-quiz-${subject.id}`}
            onClick={() => onStartQuiz(subject)}
            className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-white transition-opacity hover:opacity-90 shadow-xs"
            style={{ backgroundColor: subject.accentColor }}
          >
            <span>Latihan Soal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
