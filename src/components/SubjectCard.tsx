import React from 'react';
import { 
  Calculator, Languages, Briefcase, Cpu, Terminal, 
  Atom, FlaskConical, Dna, TrendingUp, Users, Globe, Landmark, 
  ArrowRight, BookOpen, Play 
} from 'lucide-react';
import { Subject } from '../types';

interface SubjectCardProps {
  subject: Subject;
  onSelect: (subjectId: Subject['id']) => void;
  onViewMaterials: (subjectId: Subject['id']) => void;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({
  subject,
  onSelect,
  onViewMaterials
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Calculator': return <Calculator className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Languages': return <Languages className="w-6 h-6 text-sky-600 dark:text-sky-400" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      case 'Terminal': return <Terminal className="w-6 h-6 text-purple-600 dark:text-purple-400" />;
      case 'Atom': return <Atom className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />;
      case 'FlaskConical': return <FlaskConical className="w-6 h-6 text-rose-600 dark:text-rose-400" />;
      case 'Dna': return <Dna className="w-6 h-6 text-emerald-700 dark:text-emerald-400" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-amber-700 dark:text-amber-400" />;
      case 'Users': return <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />;
      case 'Globe': return <Globe className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'Landmark': return <Landmark className="w-6 h-6 text-orange-600 dark:text-orange-400" />;
      default: return <BookOpen className="w-6 h-6 text-zinc-600" />;
    }
  };

  return (
    <div className="rounded-3xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-6 group">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${subject.badgeBg} border`}>
            {getIcon(subject.iconName)}
          </div>
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${subject.badgeBg} border`}>
            {subject.topics.length} Topik Pembelajaran
          </span>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {subject.title}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            {subject.description}
          </p>
        </div>
      </div>

      <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center gap-3">
        <button
          onClick={() => onSelect(subject.id)}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 hover:opacity-90 transition-opacity shadow-xs"
        >
          <Play className="w-4 h-4 fill-current" /> Mulai Uji Soal
        </button>
        <button
          onClick={() => onViewMaterials(subject.id)}
          className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
          title="Baca Ringkasan Materi"
        >
          <BookOpen className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
