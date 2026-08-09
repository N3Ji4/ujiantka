import React from 'react';
import { Sparkles, BookOpen, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { Subject, SubjectId } from '../types';
import { SubjectCard } from './SubjectCard';

interface HomeViewProps {
  subjects: Subject[];
  onSelectSubject: (subjectId: SubjectId) => void;
  onViewMaterials: (subjectId: SubjectId) => void;
  onOpenSearch: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  subjects,
  onSelectSubject,
  onViewMaterials,
  onOpenSearch
}) => {
  return (
    <div className="space-y-12 pb-20">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-800 dark:from-zinc-900 dark:to-zinc-950 text-white p-8 sm:p-12 shadow-xl border border-zinc-800">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-80 h-80 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> Platform Latihan & Simulasi Uji Kompetensi
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Asah Potensi & Kuasai Ujian Akademik.
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
            Latihan soal terstruktur, pembahasan mendalam, dan simulasi ujian lengkap untuk Matematika, Bahasa Inggris, PKWU, dan Teknik Komputer.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onSelectSubject('matematika')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-zinc-900 bg-white hover:bg-zinc-100 transition-colors shadow-sm"
            >
              Mulai Latihan Sekarang <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
            >
              Cari Topik Soal
            </button>
          </div>
        </div>
      </div>



      {/* Subject Cards Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Pilih Mata Pelajaran</h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">Pilih bidang studi untuk mulai latihan soal atau mempelajari materinya.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subjects.map((sub) => (
            <SubjectCard
              key={sub.id}
              subject={sub}
              onSelect={onSelectSubject}
              onViewMaterials={onViewMaterials}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
