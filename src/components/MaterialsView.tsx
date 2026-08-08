import React, { useState } from 'react';
import { 
  BookOpen, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  FileText, 
  HelpCircle, 
  Lightbulb, 
  Sparkles, 
  Copy, 
  Check, 
  ChevronRight,
  AlertTriangle
} from 'lucide-react';
import { Subject, Topic } from '../types';
import { sound } from '../utils/audio';

interface MaterialsViewProps {
  subject: Subject;
  initialTopicId?: string;
  onNavigateHome: () => void;
  onStartQuiz: (subject: Subject) => void;
  onOpenCheatSheet: (subject: Subject) => void;
}

export const MaterialsView: React.FC<MaterialsViewProps> = ({
  subject,
  initialTopicId,
  onNavigateHome,
  onStartQuiz,
  onOpenCheatSheet
}) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(
    initialTopicId || subject.topics[0]?.id || ''
  );
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  
  // Quick check answers state: topicId -> { selectedIndex, isSubmitted }
  const [quickCheckState, setQuickCheckState] = useState<Record<string, { selected: number; submitted: boolean }>>({});

  const currentTopic = subject.topics.find((t) => t.id === selectedTopicId) || subject.topics[0];
  const currentTopicIndex = subject.topics.findIndex((t) => t.id === currentTopic?.id);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleQuickCheckSelect = (topicId: string, optIndex: number, correctIndex: number) => {
    setQuickCheckState((prev) => ({
      ...prev,
      [topicId]: { selected: optIndex, submitted: true }
    }));

    if (optIndex === correctIndex) {
      sound.playCorrectSound();
    } else {
      sound.playIncorrectSound();
    }
  };

  if (!currentTopic) return null;

  return (
    <div className="space-y-6 pb-20">
      {/* Top Breadcrumb & Navigation Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200/80 dark:border-zinc-800 pb-4">
        <div className="flex items-center gap-3">
          <button
            id="btn-materials-back-home"
            onClick={onNavigateHome}
            className="p-2 rounded-xl text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            title="Kembali ke Beranda"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${subject.badgeBg}`}>
                {subject.shortTitle}
              </span>
              <h1 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                {subject.title}
              </h1>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              {subject.subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            id="btn-materials-open-cheatsheet"
            onClick={() => onOpenCheatSheet(subject)}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Rumus & Cheat Sheet</span>
          </button>

          <button
            id="btn-materials-start-quiz-top"
            onClick={() => onStartQuiz(subject)}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white rounded-xl shadow-xs transition-opacity hover:opacity-90"
            style={{ backgroundColor: subject.accentColor }}
          >
            <span>Mulai 30 Soal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Topic Tabs Horizontal Selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {subject.topics.map((t, idx) => {
          const isActive = t.id === currentTopic.id;
          return (
            <button
              key={t.id}
              onClick={() => setSelectedTopicId(t.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-xs'
                  : 'bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/80 dark:hover:bg-zinc-700'
              }`}
            >
              <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold bg-white/20 dark:bg-zinc-800/40">
                {idx + 1}
              </span>
              <span>{t.title.split(',')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Main Topic Content Card */}
      <div className="rounded-3xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-xs overflow-hidden">
        {/* Topic Header */}
        <div className="p-6 sm:p-8 border-b border-zinc-100 dark:border-zinc-800/80 space-y-3 bg-zinc-50/40 dark:bg-zinc-900/40">
          <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
            <span className="font-semibold text-zinc-700 dark:text-zinc-300">
              Topik #{currentTopicIndex + 1} dari {subject.topics.length}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              Estimasi baca: {currentTopic.estimatedReadTime}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            {currentTopic.title}
          </h2>

          <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400">
            {currentTopic.subheader}
          </p>

          <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed pt-1">
            {currentTopic.summary}
          </p>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          {/* Section 1: Konsep Kunci & Rumus Utama */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Konsep Kunci & Formula Wajib TKA</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentTopic.keyConcepts.map((concept, cIdx) => {
                const uniqueKey = `concept-${cIdx}`;
                return (
                  <div
                    key={cIdx}
                    className="p-4 rounded-2xl border border-zinc-200/70 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50 space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                        {concept.title}
                      </h4>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {concept.explanation}
                      </p>
                    </div>

                    {concept.formulaOrKey && (
                      <div className="pt-2 border-t border-zinc-200/50 dark:border-zinc-800 flex items-center justify-between gap-2">
                        <code className="text-[11px] font-mono font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-1 rounded-md truncate">
                          {concept.formulaOrKey}
                        </code>
                        <button
                          id={`btn-copy-concept-${cIdx}`}
                          onClick={() => handleCopy(concept.formulaOrKey || '', uniqueKey)}
                          className="p-1 rounded text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
                          title="Salin formula"
                        >
                          {copiedKey === uniqueKey ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section 2: Panduan Perhitungan Langkah demi Langkah */}
          {currentTopic.stepByStepGuides.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-emerald-500" />
                <span>Panduan Solusi Langkah demi Langkah</span>
              </div>

              {currentTopic.stepByStepGuides.map((guide, gIdx) => (
                <div
                  key={gIdx}
                  className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-950/60 p-5 sm:p-6 space-y-5"
                >
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                      Contoh Bedah Soal & Kasus
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100">
                      {guide.title}
                    </h3>
                    <div className="p-3 rounded-xl bg-zinc-100/70 dark:bg-zinc-800/50 text-xs font-mono text-zinc-800 dark:text-zinc-200">
                      {guide.problem}
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="space-y-3">
                    {guide.steps.map((step) => (
                      <div
                        key={step.stepNumber}
                        className="flex items-start gap-3 p-3 rounded-xl bg-zinc-50/70 dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-zinc-800"
                      >
                        <div className="w-6 h-6 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          {step.stepNumber}
                        </div>
                        <div className="space-y-1 min-w-0">
                          <div className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                            {step.instruction}
                          </div>
                          <div className="text-xs text-zinc-600 dark:text-zinc-400 font-mono">
                            {step.calculationOrDetail}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Solution & Tip */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-800/60 text-xs space-y-1">
                      <div className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        Kesimpulan Jawaban
                      </div>
                      <p className="text-emerald-900 dark:text-emerald-200 font-medium">
                        {guide.solution}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/60 text-xs space-y-1">
                      <div className="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                        <Lightbulb className="w-4 h-4" />
                        Tips Kecepatan Ujian
                      </div>
                      <p className="text-amber-900 dark:text-amber-200">
                        {guide.tip}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* Section 3: Praktik Nyata & Tips Cepat */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Practical Examples */}
            {currentTopic.practicalExamples.length > 0 && (
              <section className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4 text-sky-500" />
                  <span>Aplikasi Dunia Nyata</span>
                </div>

                <div className="space-y-3">
                  {currentTopic.practicalExamples.map((ex, eIdx) => (
                    <div
                      key={eIdx}
                      className="p-4 rounded-2xl border border-zinc-200/70 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50 space-y-2"
                    >
                      <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                        {ex.title}
                      </h4>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400">
                        <strong className="text-zinc-800 dark:text-zinc-200">Konteks:</strong> {ex.context}
                      </p>
                      <p className="text-xs text-zinc-700 dark:text-zinc-300">
                        <strong className="text-zinc-800 dark:text-zinc-200">Solusi:</strong> {ex.solution}
                      </p>
                      <div className="text-[11px] font-medium text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/40 p-2 rounded-lg">
                        {ex.takeaway}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Quick Tips & Pitfalls */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <span>Tips Cepat & Jebakan Soal</span>
              </div>

              <div className="p-4 rounded-2xl border border-amber-200/60 dark:border-amber-900/40 bg-amber-50/30 dark:bg-amber-950/20 space-y-2.5">
                {currentTopic.quickTips.map((tip, tIdx) => (
                  <div key={tIdx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Section 4: Interactive Quick Check (Active Recall Widget) */}
          {currentTopic.quickCheck.length > 0 && (
            <section className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-linear-to-br from-zinc-50 to-emerald-50/20 dark:from-zinc-950 dark:to-emerald-950/10 p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
                    Uji Pemahaman Singkat (Active Recall)
                  </h3>
                </div>
                <span className="text-[11px] text-zinc-500">1 Soal Cepat</span>
              </div>

              {currentTopic.quickCheck.map((qc) => {
                const state = quickCheckState[qc.id];
                const hasAnswered = state?.submitted;

                return (
                  <div key={qc.id} className="space-y-3">
                    <p className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-relaxed">
                      {qc.question}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {qc.options.map((opt, optIdx) => {
                        const isSelected = state?.selected === optIdx;
                        const isCorrect = optIdx === qc.correctIndex;

                        let btnStyle = 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:border-zinc-400';
                        if (hasAnswered) {
                          if (isCorrect) {
                            btnStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold';
                          } else if (isSelected && !isCorrect) {
                            btnStyle = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-900 dark:text-rose-200';
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            id={`btn-qc-${qc.id}-opt-${optIdx}`}
                            onClick={() => handleQuickCheckSelect(qc.id, optIdx, qc.correctIndex)}
                            disabled={hasAnswered}
                            className={`p-3 rounded-xl border text-xs text-left transition-all ${btnStyle}`}
                          >
                            <span className="font-bold mr-1.5">{String.fromCharCode(65 + optIdx)}.</span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {hasAnswered && (
                      <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 text-xs space-y-1 text-zinc-700 dark:text-zinc-300 animate-in fade-in duration-200">
                        <span className="font-bold text-zinc-900 dark:text-zinc-100">
                          {state.selected === qc.correctIndex ? 'Tepat Sekali!' : 'Belum Tepat.'}
                        </span>
                        <p>{qc.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </section>
          )}

          {/* Bottom Topic Switcher Navigation */}
          <div className="flex items-center justify-between pt-6 border-t border-zinc-200/80 dark:border-zinc-800">
            {currentTopicIndex > 0 ? (
              <button
                id="btn-prev-topic"
                onClick={() => setSelectedTopicId(subject.topics[currentTopicIndex - 1].id)}
                className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Topik Sebelumnya</span>
              </button>
            ) : (
              <div />
            )}

            {currentTopicIndex < subject.topics.length - 1 ? (
              <button
                id="btn-next-topic"
                onClick={() => setSelectedTopicId(subject.topics[currentTopicIndex + 1].id)}
                className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white rounded-xl shadow-xs transition-opacity hover:opacity-90"
                style={{ backgroundColor: subject.accentColor }}
              >
                <span>Topik Selanjutnya</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                id="btn-goto-practice-bottom"
                onClick={() => onStartQuiz(subject)}
                className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white rounded-xl shadow-xs transition-opacity hover:opacity-90"
                style={{ backgroundColor: subject.accentColor }}
              >
                <span>Siap! Mulai 30 Soal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
