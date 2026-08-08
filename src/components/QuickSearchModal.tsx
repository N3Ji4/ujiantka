import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, HelpCircle, ArrowRight, Sparkles, Hash } from 'lucide-react';
import { Subject, Question, Topic } from '../types';
import { subjects, questionsBySubject } from '../data';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTopic: (subject: Subject, topicId: string) => void;
  onSelectSubjectPractice: (subject: Subject) => void;
}

interface SearchResult {
  type: 'topic' | 'concept' | 'question' | 'guide';
  subject: Subject;
  title: string;
  subtitle: string;
  actionId: string;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectTopic,
  onSelectSubjectPractice
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const results: SearchResult[] = [];

  if (query.trim().length >= 2) {
    const qLower = query.toLowerCase();

    subjects.forEach((subj) => {
      // Search in topics
      subj.topics.forEach((top) => {
        if (
          top.title.toLowerCase().includes(qLower) ||
          top.subheader.toLowerCase().includes(qLower) ||
          top.summary.toLowerCase().includes(qLower)
        ) {
          results.push({
            type: 'topic',
            subject: subj,
            title: top.title,
            subtitle: `${subj.title} • ${top.estimatedReadTime}`,
            actionId: top.id
          });
        }

        // Search in key concepts
        top.keyConcepts.forEach((concept) => {
          if (
            concept.title.toLowerCase().includes(qLower) ||
            concept.explanation.toLowerCase().includes(qLower) ||
            (concept.formulaOrKey && concept.formulaOrKey.toLowerCase().includes(qLower))
          ) {
            results.push({
              type: 'concept',
              subject: subj,
              title: concept.title,
              subtitle: `${subj.title} • ${top.title}`,
              actionId: top.id
            });
          }
        });

        // Search in step-by-step guides
        top.stepByStepGuides.forEach((guide) => {
          if (
            guide.title.toLowerCase().includes(qLower) ||
            guide.problem.toLowerCase().includes(qLower) ||
            guide.solution.toLowerCase().includes(qLower)
          ) {
            results.push({
              type: 'guide',
              subject: subj,
              title: guide.title,
              subtitle: `Panduan Langkah • ${subj.title}`,
              actionId: top.id
            });
          }
        });
      });

      // Search in questions
      const qList = questionsBySubject[subj.id] || [];
      qList.forEach((q) => {
        if (
          q.question.toLowerCase().includes(qLower) ||
          q.keyConcept.toLowerCase().includes(qLower) ||
          q.topicTag.toLowerCase().includes(qLower)
        ) {
          results.push({
            type: 'question',
            subject: subj,
            title: `Soal #${q.number}: ${q.question.slice(0, 75)}...`,
            subtitle: `${subj.title} • ${q.topicTag} • ${q.difficulty}`,
            actionId: subj.id
          });
        }
      });
    });
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelect(results[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleSelect = (item: SearchResult) => {
    if (item.type === 'question') {
      onSelectSubjectPractice(item.subject);
    } else {
      onSelectTopic(item.subject, item.actionId);
    }
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 bg-zinc-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="modal-quick-search"
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[75vh]"
      >
        {/* Search Bar */}
        <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center gap-3 bg-zinc-50/50 dark:bg-zinc-900/50">
          <Search className="w-5 h-5 text-zinc-400 shrink-0" />
          <input
            ref={inputRef}
            id="input-global-search"
            type="text"
            placeholder="Cari konsep, rumus (misal: 'BEP', 'subnet', 'turunan'), atau soal..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            className="w-full text-sm bg-transparent text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
              aria-label="Hapus kata kunci"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-500">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-2">
          {query.trim().length < 2 ? (
            <div className="p-8 text-center text-zinc-400">
              <Sparkles className="w-6 h-6 mx-auto mb-2 opacity-50" />
              <p className="text-xs font-medium">Ketik minimal 2 karakter untuk mencari di seluruh 4 mata pelajaran.</p>
              <div className="mt-4 flex flex-wrap justify-center gap-1.5 text-[11px] text-zinc-500">
                <span className="px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800">Trigonometri</span>
                <span className="px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800">Inversion</span>
                <span className="px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800">Break Even Point</span>
                <span className="px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800">Subnetting /28</span>
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-zinc-400">
              <p className="text-xs font-medium">Tidak ada materi atau soal yang cocok dengan &quot;{query}&quot;.</p>
            </div>
          ) : (
            <div className="space-y-1">
              {results.slice(0, 15).map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`p-2.5 rounded-xl cursor-pointer transition-colors flex items-center justify-between gap-3 ${
                    selectedIndex === idx
                      ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white'
                      : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-white text-xs font-bold"
                      style={{ backgroundColor: item.subject.accentColor }}
                    >
                      {item.type === 'question' ? <HelpCircle className="w-3.5 h-3.5" /> : <BookOpen className="w-3.5 h-3.5" />}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold truncate">{item.title}</div>
                      <div className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-400 shrink-0 opacity-70" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-2.5 px-4 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 flex items-center justify-between text-[11px] text-zinc-400">
          <span>Gunakan panah ↑ ↓ untuk navigasi dan Enter untuk membuka</span>
          <span>{results.length} hasil ditemukan</span>
        </div>
      </div>
    </div>
  );
};
