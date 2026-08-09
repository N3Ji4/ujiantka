import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Search, 
  ChevronRight, 
  CheckCircle2, 
  ArrowLeft, 
  Calculator, 
  Lightbulb, 
  ListOrdered, 
  HelpCircle, 
  Copy, 
  Check, 
  Sparkles,
  Filter,
  Layers,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Subject, SubjectId, Topic } from '../types';

interface MaterialsViewProps {
  subjects: Subject[];
  initialSubjectId?: SubjectId;
  onBackToHome: () => void;
  onStartQuiz: (subjectId: SubjectId) => void;
}

type TabFilter = 'all' | 'guides' | 'formulas' | 'examples';

export const MaterialsView: React.FC<MaterialsViewProps> = ({
  subjects,
  initialSubjectId = 'matematika',
  onBackToHome,
  onStartQuiz
}) => {
  const [selectedSubjectId, setSelectedSubjectId] = useState<SubjectId>(initialSubjectId);
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activeTabFilter, setActiveTabFilter] = useState<TabFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedFormula, setCopiedFormula] = useState<string | null>(null);
  const [expandedTopicIds, setExpandedTopicIds] = useState<Record<string, boolean>>({});

  const currentSubject = subjects.find(s => s.id === selectedSubjectId) || subjects[0];

  // Extract distinct category tags
  const categories = useMemo(() => {
    const cats = new Set<string>();
    currentSubject.topics.forEach(t => {
      if (t.categoryTag) cats.add(t.categoryTag);
    });
    return ['Semua', ...Array.from(cats)];
  }, [currentSubject]);

  // Filter topics
  const filteredTopics = useMemo(() => {
    return currentSubject.topics.filter(t => {
      const matchesSearch = 
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.keyPoints.some(kp => kp.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (t.conceptExplanation && t.conceptExplanation.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (t.stepByStepGuides && t.stepByStepGuides.some(g => g.title.toLowerCase().includes(searchQuery.toLowerCase()) || g.steps.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())))) ||
        (t.formulaDetails && t.formulaDetails.some(f => f.formula.toLowerCase().includes(searchQuery.toLowerCase()) || (f.title && f.title.toLowerCase().includes(searchQuery.toLowerCase()))));

      const matchesCategory = selectedCategory === 'Semua' || t.categoryTag === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [currentSubject, searchQuery, selectedCategory]);

  const handleCopyFormula = (formulaText: string) => {
    navigator.clipboard.writeText(formulaText);
    setCopiedFormula(formulaText);
    setTimeout(() => {
      setCopiedFormula(null);
    }, 2000);
  };

  const toggleExpandTopic = (id: string) => {
    setExpandedTopicIds(prev => ({
      ...prev,
      [id]: prev[id] === undefined ? false : !prev[id]
    }));
  };

  const isTopicExpanded = (id: string) => {
    return expandedTopicIds[id] !== false; // default expanded
  };

  const expandAll = () => {
    const allExp: Record<string, boolean> = {};
    filteredTopics.forEach(t => { allExp[t.id] = true; });
    setExpandedTopicIds(allExp);
  };

  const collapseAll = () => {
    const allCol: Record<string, boolean> = {};
    filteredTopics.forEach(t => { allCol[t.id] = false; });
    setExpandedTopicIds(allCol);
  };

  return (
    <div className="space-y-8 pb-28 max-w-5xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200/80 dark:border-zinc-800 pb-5">
        <div>
          <button
            onClick={onBackToHome}
            className="flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-zinc-900 dark:hover:text-white mb-2 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Kembali ke Beranda
          </button>
          <h1 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" /> Ringkasan Materi & Rumus Komprehensif
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Pelajari konsep fundamental, bank rumus dengan makna variabel, cara pengerjaan langkah demi langkah, dan contoh soal teruji.
          </p>
        </div>

        <button
          onClick={() => onStartQuiz(currentSubject.id)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 hover:opacity-90 transition-opacity shadow-xs self-start sm:self-auto cursor-pointer"
        >
          Mulai Ujian {currentSubject.shortTitle}
        </button>
      </div>

      {/* Subject Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {subjects.map((sub) => {
          const isSelected = selectedSubjectId === sub.id;
          return (
            <button
              key={sub.id}
              onClick={() => {
                setSelectedSubjectId(sub.id);
                setSelectedCategory('Semua');
              }}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                isSelected
                  ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-md'
                  : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800'
              }`}
            >
              <span>{sub.title}</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                isSelected ? 'bg-white/20 dark:bg-zinc-900/20 text-white dark:text-zinc-900' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500'
              }`}>
                {sub.topics.length} Bab
              </span>
            </button>
          );
        })}
      </div>

      {/* Filter & Search Bar */}
      <div className="space-y-3 bg-white dark:bg-zinc-900 p-4 sm:p-5 rounded-3xl border border-zinc-200/80 dark:border-zinc-800 shadow-xs">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Cari materi, rumus, langkah pengerjaan, atau kata kunci..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl text-xs bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTabFilter('all')}
              className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                activeTabFilter === 'all'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200'
              }`}
            >
              Semua Bagian
            </button>
            <button
              onClick={() => setActiveTabFilter('guides')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                activeTabFilter === 'guides'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200'
              }`}
            >
              <ListOrdered className="w-3.5 h-3.5" /> Cara & Langkah
            </button>
            <button
              onClick={() => setActiveTabFilter('formulas')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                activeTabFilter === 'formulas'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" /> Rumus
            </button>
            <button
              onClick={() => setActiveTabFilter('examples')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                activeTabFilter === 'examples'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" /> Contoh Soal
            </button>
          </div>
        </div>

        {/* Categories Pills */}
        {categories.length > 2 && (
          <div className="flex items-center gap-1.5 overflow-x-auto pt-2 border-t border-zinc-100 dark:border-zinc-800 text-xs no-scrollbar">
            <span className="text-zinc-400 font-semibold flex items-center gap-1 mr-1">
              <Filter className="w-3 h-3" /> Kategori:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900'
                    : 'bg-zinc-50 dark:bg-zinc-950 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 border border-zinc-200 dark:border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between pt-1 text-[11px] text-zinc-400">
          <span>Menampilkan <strong>{filteredTopics.length}</strong> bab materi pembelajaran</span>
          <div className="flex items-center gap-2">
            <button onClick={expandAll} className="hover:text-zinc-700 dark:hover:text-zinc-200 cursor-pointer">Buka Semua</button>
            <span>•</span>
            <button onClick={collapseAll} className="hover:text-zinc-700 dark:hover:text-zinc-200 cursor-pointer">Tutup Semua</button>
          </div>
        </div>
      </div>

      {/* Topics List */}
      <div className="space-y-6">
        {filteredTopics.map((topic, topicIdx) => {
          const isExpanded = isTopicExpanded(topic.id);

          return (
            <div
              key={topic.id}
              className="rounded-3xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-xs transition-all duration-200"
            >
              {/* Topic Header Card */}
              <div 
                onClick={() => toggleExpandTopic(topic.id)}
                className="p-6 sm:p-7 flex items-start justify-between gap-4 cursor-pointer hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40 transition-colors border-b border-zinc-100 dark:border-zinc-800/60"
              >
                <div className="space-y-1.5 min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-xs flex items-center justify-center">
                      {topicIdx + 1}
                    </span>
                    {topic.categoryTag && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
                        {topic.categoryTag}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {topic.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {topic.summary}
                  </p>
                </div>

                <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-500 shrink-0">
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </div>

              {/* Collapsible Content */}
              {isExpanded && (
                <div className="p-6 sm:p-8 space-y-8 animate-in fade-in duration-150">
                  {/* Concept Explanation (Easy to understand intro) */}
                  {topic.conceptExplanation && (activeTabFilter === 'all' || activeTabFilter === 'guides') && (
                    <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800 space-y-2">
                      <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Konsep Dasar & Pemahaman Mudah
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        {topic.conceptExplanation}
                      </p>
                    </div>
                  )}

                  {/* Key Points */}
                  {(activeTabFilter === 'all' || activeTabFilter === 'guides') && (
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Poin Penting & Aturan Utama
                      </h4>
                      <div className="grid grid-cols-1 gap-2.5">
                        {topic.keyPoints.map((kp, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 p-3 rounded-2xl bg-zinc-50/70 dark:bg-zinc-950/40 border border-zinc-200/60 dark:border-zinc-800/60 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                            <span className="leading-relaxed whitespace-pre-line">{kp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step-by-Step Guides ("Cara-Cara Pengerjaan") */}
                  {topic.stepByStepGuides && topic.stepByStepGuides.length > 0 && (activeTabFilter === 'all' || activeTabFilter === 'guides') && (
                    <div className="space-y-4 pt-2">
                      <h4 className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                        <ListOrdered className="w-4 h-4" /> Cara & Langkah-Langkah Pengerjaan
                      </h4>

                      <div className="space-y-4">
                        {topic.stepByStepGuides.map((guide, gIdx) => (
                          <div key={gIdx} className="p-5 sm:p-6 rounded-2xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/60 space-y-3">
                            <div className="space-y-1">
                              <h5 className="text-xs sm:text-sm font-bold text-emerald-950 dark:text-emerald-200">
                                {guide.title}
                              </h5>
                              {guide.description && (
                                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                                  {guide.description}
                                </p>
                              )}
                            </div>

                            <div className="space-y-2 pt-1">
                              {guide.steps.map((step, sIdx) => (
                                <div key={sIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200">
                                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                                    {sIdx + 1}
                                  </span>
                                  <span className="leading-relaxed">{step}</span>
                                </div>
                              ))}
                            </div>

                            {guide.tips && (
                              <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-emerald-200 dark:border-emerald-800/80 text-xs text-emerald-800 dark:text-emerald-300 font-medium flex items-start gap-2">
                                <Lightbulb className="w-4 h-4 shrink-0 text-amber-500 mt-0.5" />
                                <span><strong>Tips Praktis:</strong> {guide.tips}</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Rich Formulas & Variables Breakdown */}
                  {topic.formulaDetails && topic.formulaDetails.length > 0 && (activeTabFilter === 'all' || activeTabFilter === 'formulas') && (
                    <div className="space-y-4 pt-2">
                      <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Calculator className="w-4 h-4 text-emerald-500" /> Bank Rumus & Makna Variabel
                      </h4>

                      <div className="grid grid-cols-1 gap-4">
                        {topic.formulaDetails.map((fDetail, fIdx) => (
                          <div key={fIdx} className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800 space-y-3">
                            <div className="flex items-center justify-between gap-2">
                              {fDetail.title && (
                                <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                                  {fDetail.title}
                                </span>
                              )}
                              <button
                                onClick={() => handleCopyFormula(fDetail.formula)}
                                className="flex items-center gap-1 text-[11px] font-semibold text-zinc-500 hover:text-zinc-900 dark:hover:text-white px-2 py-1 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                              >
                                {copiedFormula === fDetail.formula ? (
                                  <>
                                    <Check className="w-3 h-3 text-emerald-500" />
                                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">Tersalin!</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3 h-3" />
                                    <span>Salin Rumus</span>
                                  </>
                                )}
                              </button>
                            </div>

                            <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 font-mono text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 overflow-x-auto shadow-inner">
                              {fDetail.formula}
                            </div>

                            {fDetail.explanation && (
                              <p className="text-xs text-zinc-600 dark:text-zinc-300">
                                {fDetail.explanation}
                              </p>
                            )}

                            {fDetail.variables && fDetail.variables.length > 0 && (
                              <div className="pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60 space-y-1.5">
                                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
                                  Keterangan Simbol / Variabel:
                                </span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                                  {fDetail.variables.map((v, vIdx) => (
                                    <div key={vIdx} className="flex items-start gap-1.5">
                                      <code className="px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-mono font-bold text-[11px] shrink-0">
                                        {v.symbol}
                                      </code>
                                      <span className="text-zinc-600 dark:text-zinc-400">= {v.meaning}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {fDetail.quickTip && (
                              <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-1.5">
                                <Lightbulb className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                                <span><strong>Trik Singkat:</strong> {fDetail.quickTip}</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Fallback Standard Formulas */}
                  {(!topic.formulaDetails || topic.formulaDetails.length === 0) && topic.formulas && topic.formulas.length > 0 && (activeTabFilter === 'all' || activeTabFilter === 'formulas') && (
                    <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800 space-y-2">
                      <h4 className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Rumus Utama</h4>
                      <div className="space-y-1.5 font-mono text-xs text-zinc-800 dark:text-zinc-200">
                        {topic.formulas.map((form, idx) => (
                          <div key={idx} className="py-2 px-3 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                            <span>{form}</span>
                            <button
                              onClick={() => handleCopyFormula(form)}
                              className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white p-1"
                            >
                              <Copy className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Pro Tips / Quick Tricks */}
                  {topic.quickTips && topic.quickTips.length > 0 && (activeTabFilter === 'all' || activeTabFilter === 'guides') && (
                    <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 space-y-2">
                      <h4 className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400" /> Trik Cepat & Cara Ingat
                      </h4>
                      <div className="space-y-1.5">
                        {topic.quickTips.map((tip, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-amber-950 dark:text-amber-200">
                            <span className="text-amber-500 font-bold">•</span>
                            <span>{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Worked Examples (Contoh Soal & Cara Penyelesaian Detail) */}
                  {topic.examples && topic.examples.length > 0 && (activeTabFilter === 'all' || activeTabFilter === 'examples') && (
                    <div className="space-y-4 pt-2">
                      <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                        <HelpCircle className="w-4 h-4 text-emerald-500" /> Contoh Soal & Pembahasan Langkah Demi Langkah
                      </h4>

                      <div className="space-y-4">
                        {topic.examples.map((ex, idx) => (
                          <div key={idx} className="p-5 rounded-2xl bg-zinc-50/70 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 space-y-3 text-xs sm:text-sm">
                            <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                              <strong className="text-zinc-900 dark:text-zinc-100 block mb-1 text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                                Contoh Soal:
                              </strong>
                              <p className="font-semibold text-zinc-800 dark:text-zinc-200 leading-relaxed">
                                {ex.problem}
                              </p>
                            </div>

                            {ex.given && (
                              <div className="text-xs text-zinc-600 dark:text-zinc-400">
                                <strong className="text-zinc-900 dark:text-zinc-200">Diketahui:</strong> {ex.given}
                              </div>
                            )}

                            {ex.questionTarget && (
                              <div className="text-xs text-zinc-600 dark:text-zinc-400">
                                <strong className="text-zinc-900 dark:text-zinc-200">Ditanya:</strong> {ex.questionTarget}
                              </div>
                            )}

                            {ex.steps && ex.steps.length > 0 && (
                              <div className="space-y-1.5 pt-1">
                                <strong className="text-zinc-900 dark:text-zinc-100 text-xs block">
                                  Langkah Penyelesaian:
                                </strong>
                                <div className="space-y-1.5">
                                  {ex.steps.map((st, sIdx) => (
                                    <div key={sIdx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                                      <span className="w-4 h-4 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold text-[9px] flex items-center justify-center shrink-0 mt-0.5">
                                        {sIdx + 1}
                                      </span>
                                      <span className="leading-relaxed">{st}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200 font-medium space-y-1">
                              <strong className="block text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                                Kesimpulan / Jawaban Akhir:
                              </strong>
                              <p className="leading-relaxed">{ex.solution}</p>
                            </div>

                            {ex.tip && (
                              <div className="text-[11px] text-zinc-500 italic">
                                Catatan: {ex.tip}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {filteredTopics.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-3">
            <BookOpen className="w-8 h-8 text-zinc-400 mx-auto" />
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              Materi tidak ditemukan
            </h3>
            <p className="text-xs text-zinc-500 max-w-sm mx-auto">
              Tidak ada materi yang sesuai dengan kata kunci "{searchQuery}". Coba gunakan istilah umum seperti rumus, aljabar, atau tenses.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
