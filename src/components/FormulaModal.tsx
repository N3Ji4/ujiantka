import React, { useState } from 'react';
import { X, Search, Copy, Check, BookOpen, Sparkles, Hash } from 'lucide-react';
import { Subject } from '../types';

interface FormulaModalProps {
  subject: Subject;
  isOpen: boolean;
  onClose: () => void;
}

export const FormulaModal: React.FC<FormulaModalProps> = ({ subject, isOpen, onClose }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [filterQuery, setFilterQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  if (!isOpen) return null;

  const categories = ['all', ...Array.from(new Set(subject.cheatSheet.map((c) => c.category)))];

  const handleCopy = (formula: string, key: string) => {
    navigator.clipboard.writeText(formula);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const filteredCategories = subject.cheatSheet
    .filter((cat) => selectedCategory === 'all' || cat.category === selectedCategory)
    .map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          item.label.toLowerCase().includes(filterQuery.toLowerCase()) ||
          item.formula.toLowerCase().includes(filterQuery.toLowerCase()) ||
          item.note.toLowerCase().includes(filterQuery.toLowerCase())
      )
    }))
    .filter((cat) => cat.items.length > 0);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="modal-formula-container"
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 w-full max-w-2xl max-h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between gap-4 bg-zinc-50/50 dark:bg-zinc-900/50">
          <div className="flex items-center gap-3">
            <div 
              className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm text-white"
              style={{ backgroundColor: subject.accentColor }}
            >
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-zinc-900 dark:text-white flex items-center gap-2">
                Lembar Rumus & Cheat Sheet
                <span className="text-xs font-normal px-2 py-0.5 rounded-full bg-zinc-200/70 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                  {subject.shortTitle}
                </span>
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Formula cepat, aturan baku, dan kata kunci praktis ujian TKA
              </p>
            </div>
          </div>
          <button
            id="btn-close-formula-modal"
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Tutup lembar rumus"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Category Filter */}
        <div className="p-4 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/30 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="input-formula-search"
              type="text"
              placeholder="Cari rumus, formula, atau kata kunci..."
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition-all"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 text-xs rounded-lg font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                }`}
              >
                {cat === 'all' ? 'Semua Kategori' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Formula Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-6">
          {filteredCategories.length === 0 ? (
            <div className="py-12 text-center text-zinc-400">
              <Sparkles className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm font-medium">Tidak ada rumus yang cocok dengan pencarian.</p>
              <p className="text-xs text-zinc-500 mt-1">Coba kata kunci lain seperti &quot;BEP&quot;, &quot;turunan&quot;, atau &quot;subnet&quot;.</p>
            </div>
          ) : (
            filteredCategories.map((cat, catIdx) => (
              <div key={catIdx} className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
                  <Hash className="w-3.5 h-3.5 text-zinc-400" />
                  {cat.category}
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {cat.items.map((item, itemIdx) => {
                    const uniqueKey = `${catIdx}-${itemIdx}`;
                    return (
                      <div
                        key={itemIdx}
                        className="p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <div className="space-y-1 min-w-0">
                          <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                            {item.label}
                          </div>
                          <div className="font-mono text-xs font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-1 rounded-md inline-block max-w-full truncate">
                            {item.formula}
                          </div>
                          {item.note && (
                            <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                              {item.note}
                            </p>
                          )}
                        </div>

                        <button
                          id={`btn-copy-formula-${catIdx}-${itemIdx}`}
                          onClick={() => handleCopy(item.formula, uniqueKey)}
                          className="self-end sm:self-center flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg text-zinc-600 dark:text-zinc-300 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors shrink-0"
                          title="Salin rumus"
                        >
                          {copiedKey === uniqueKey ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                              <span className="text-emerald-600 dark:text-emerald-400">Tersalin</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-zinc-400" />
                              <span>Salin</span>
                            </>
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-3.5 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 text-center text-xs text-zinc-500">
          Gunakan tombol salin untuk menyimpan rumus ke catatan pribadimu saat belajar.
        </div>
      </div>
    </div>
  );
};
