import React, { useState } from 'react';
import { Search, X, BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Subject, SubjectId } from '../types';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  subjects: Subject[];
  onSelectSubject: (subjectId: SubjectId) => void;
  onViewMaterials: (subjectId: SubjectId) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  subjects,
  onSelectSubject,
  onViewMaterials
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results: { type: 'subject' | 'topic'; title: string; subtitle: string; subjectId: SubjectId }[] = [];

  subjects.forEach((sub) => {
    if (sub.title.toLowerCase().includes(query.toLowerCase()) || sub.description.toLowerCase().includes(query.toLowerCase())) {
      results.push({
        type: 'subject',
        title: sub.title,
        subtitle: sub.description,
        subjectId: sub.id
      });
    }
    sub.topics.forEach((t) => {
      if (t.title.toLowerCase().includes(query.toLowerCase()) || t.summary.toLowerCase().includes(query.toLowerCase())) {
        results.push({
          type: 'topic',
          title: t.title,
          subtitle: `${sub.title} - ${t.summary}`,
          subjectId: sub.id
        });
      }
    });
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-zinc-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 w-full max-w-2xl rounded-3xl p-6 shadow-2xl space-y-4">
        <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-4">
          <div className="relative flex-1 mr-3">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              autoFocus
              placeholder="Cari mata pelajaran, topik, atau rumus..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none"
            />
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-2 max-h-96 overflow-y-auto">
          {results.map((res, idx) => (
            <button
              key={idx}
              onClick={() => {
                onClose();
                onViewMaterials(res.subjectId);
              }}
              className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200/80 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 transition-all text-left group"
            >
              <div className="space-y-0.5 min-w-0 pr-4">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[10px] font-semibold">
                    {res.type === 'subject' ? 'Mata Pelajaran' : 'Topik Materi'}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100 truncate group-hover:text-emerald-600 transition-colors">
                    {res.title}
                  </h4>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                  {res.subtitle}
                </p>
              </div>

              <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 transition-transform shrink-0" />
            </button>
          ))}

          {results.length === 0 && (
            <div className="text-center py-12 text-zinc-400 text-xs">
              Tidak ditemukan materi atau topik yang cocok dengan "{query}".
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
