import React, { useState, useMemo } from 'react';
import { X, BookOpen, Search, Copy, Check, Calculator, Lightbulb, Sparkles, Filter } from 'lucide-react';
import { Subject, SubjectId, FormulaDetail } from '../types';

interface FormulaModalProps {
  isOpen: boolean;
  onClose: () => void;
  subjects: Subject[];
}

export const FormulaModal: React.FC<FormulaModalProps> = ({
  isOpen,
  onClose,
  subjects
}) => {
  const [activeSubjectFilter, setActiveSubjectFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedFormula, setCopiedFormula] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFormula(text);
    setTimeout(() => {
      setCopiedFormula(null);
    }, 2000);
  };

  // Compile all formulas across subjects
  const allFormulaItems = useMemo(() => {
    const items: {
      subjectTitle: string;
      subjectId: SubjectId;
      topicTitle: string;
      title?: string;
      formula: string;
      explanation?: string;
      variables?: { symbol: string; meaning: string }[];
      quickTip?: string;
    }[] = [];

    subjects.forEach((sub) => {
      sub.topics.forEach((t) => {
        if (t.formulaDetails && t.formulaDetails.length > 0) {
          t.formulaDetails.forEach((fd) => {
            items.push({
              subjectTitle: sub.title,
              subjectId: sub.id,
              topicTitle: t.title,
              title: fd.title,
              formula: fd.formula,
              explanation: fd.explanation,
              variables: fd.variables,
              quickTip: fd.quickTip
            });
          });
        } else if (t.formulas && t.formulas.length > 0) {
          t.formulas.forEach((f) => {
            items.push({
              subjectTitle: sub.title,
              subjectId: sub.id,
              topicTitle: t.title,
              formula: f
            });
          });
        }
      });
    });

    return items;
  }, [subjects]);

  const filteredItems = useMemo(() => {
    return allFormulaItems.filter((item) => {
      const matchSubject = activeSubjectFilter === 'all' || item.subjectId === activeSubjectFilter;
      const matchSearch =
        item.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.topicTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subjectTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.explanation && item.explanation.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.variables && item.variables.some(v => v.symbol.toLowerCase().includes(searchQuery.toLowerCase()) || v.meaning.toLowerCase().includes(searchQuery.toLowerCase())));

      return matchSubject && matchSearch;
    });
  }, [allFormulaItems, activeSubjectFilter, searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 w-full max-w-3xl rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100">
                Bank Rumus & Notasi Utama
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Kumpulan rumus praktis beserta makna variabel dan trik perhitungan cepat.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Subject Tabs */}
        <div className="space-y-3 shrink-0">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Cari rumus, variabel, atau topik (contoh: BEP, Horner, Subnet, kuadrat)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl text-xs bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 text-xs">
            <button
              onClick={() => setActiveSubjectFilter('all')}
              className={`px-3 py-1.5 rounded-xl font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                activeSubjectFilter === 'all'
                  ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-xs'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200'
              }`}
            >
              Semua Pelajaran ({allFormulaItems.length})
            </button>
            {subjects.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setActiveSubjectFilter(sub.id)}
                className={`px-3 py-1.5 rounded-xl font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  activeSubjectFilter === sub.id
                    ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-xs'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200'
                }`}
              >
                {sub.shortTitle}
              </button>
            ))}
          </div>
        </div>

        {/* Formulas Grid (Scrollable) */}
        <div className="space-y-4 overflow-y-auto flex-1 pr-1">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800 space-y-3"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      {item.subjectTitle}
                    </span>
                    <span className="text-[11px] font-medium text-zinc-400">
                      {item.topicTitle}
                    </span>
                  </div>
                  {item.title && (
                    <h4 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100 pt-1">
                      {item.title}
                    </h4>
                  )}
                </div>

                <button
                  onClick={() => handleCopy(item.formula)}
                  className="flex items-center gap-1 text-[11px] font-semibold text-zinc-500 hover:text-zinc-900 dark:hover:text-white px-2.5 py-1 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors cursor-pointer shrink-0"
                >
                  {copiedFormula === item.formula ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>

              {/* Formula Display */}
              <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 font-mono text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 overflow-x-auto shadow-inner">
                {item.formula}
              </div>

              {item.explanation && (
                <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {item.explanation}
                </p>
              )}

              {/* Variables List */}
              {item.variables && item.variables.length > 0 && (
                <div className="pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60 space-y-1.5">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                    Keterangan Variabel:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
                    {item.variables.map((v, vIdx) => (
                      <div key={vIdx} className="flex items-start gap-1.5">
                        <code className="px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-mono font-bold text-[11px] shrink-0">
                          {v.symbol}
                        </code>
                        <span className="text-zinc-600 dark:text-zinc-400 text-[11px]">= {v.meaning}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {item.quickTip && (
                <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Trik:</strong> {item.quickTip}</span>
                </div>
              )}
            </div>
          ))}

          {filteredItems.length === 0 && (
            <div className="text-center py-12 text-zinc-400 text-xs">
              Tidak ditemukan rumus yang cocok dengan "{searchQuery}".
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
