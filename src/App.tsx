import React, { useState, useEffect } from 'react';
import { AppView, ThemeMode, SubjectId, UserAnswer, Question } from './types';
import { subjects, allQuestions } from './data';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { QuizView } from './components/QuizView';
import { SummaryView } from './components/SummaryView';
import { MaterialsView } from './components/MaterialsView';
import { QuickSearchModal } from './components/QuickSearchModal';
import { FormulaModal } from './components/FormulaModal';

const STORAGE_KEY_THEME = 'akademika_theme_v1';

export default function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_THEME);
    return (saved as ThemeMode) || 'light';
  });

  const [activeView, setActiveView] = useState<AppView>('home');
  const [selectedSubjectId, setSelectedSubjectId] = useState<SubjectId>('matematika');
  const [quizSessionId, setQuizSessionId] = useState(0);
  const [currentAnswers, setCurrentAnswers] = useState<UserAnswer[]>([]);
  const [totalTimeSec, setTotalTimeSec] = useState(0);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFormulaOpen, setIsFormulaOpen] = useState(false);

  // Apply theme class to <html>
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark');
    if (themeMode === 'dark') {
      root.classList.add('dark');
    }
    localStorage.setItem(STORAGE_KEY_THEME, themeMode);
  }, [themeMode]);

  const handleNavigate = (view: AppView) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSubject = (subjectId: SubjectId) => {
    setSelectedSubjectId(subjectId);
    setQuizSessionId(Date.now());
    setActiveView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewMaterials = (subjectId: SubjectId) => {
    setSelectedSubjectId(subjectId);
    setActiveView('materials');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinishQuiz = (answers: UserAnswer[], timeSec: number) => {
    setCurrentAnswers(answers);
    setTotalTimeSec(timeSec);
    setActiveView('summary');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentSubject = subjects.find(s => s.id === selectedSubjectId) || subjects[0];
  const subjectQuestions = allQuestions.filter(q => q.subjectId === selectedSubjectId);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white transition-colors duration-200">
      <Navbar
        activeView={activeView}
        onNavigate={handleNavigate}
        themeMode={themeMode}
        onThemeToggle={() => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenFormulas={() => setIsFormulaOpen(true)}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        {activeView === 'home' && (
          <HomeView
            subjects={subjects}
            onSelectSubject={handleSelectSubject}
            onViewMaterials={handleViewMaterials}
            onOpenSearch={() => setIsSearchOpen(true)}
          />
        )}

        {activeView === 'quiz' && (
          <QuizView
            key={quizSessionId}
            subject={currentSubject}
            questions={subjectQuestions}
            onFinishQuiz={handleFinishQuiz}
            onBack={() => handleNavigate('home')}
            onOpenMaterials={() => handleViewMaterials(currentSubject.id)}
          />
        )}

        {activeView === 'summary' && (
          <SummaryView
            subject={currentSubject}
            questions={subjectQuestions}
            answers={currentAnswers}
            totalTimeSec={totalTimeSec}
            onRetake={() => handleSelectSubject(currentSubject.id)}
            onGoHome={() => handleNavigate('home')}
            onOpenMaterials={() => handleViewMaterials(currentSubject.id)}
          />
        )}

        {activeView === 'materials' && (
          <MaterialsView
            subjects={subjects}
            initialSubjectId={selectedSubjectId}
            onBackToHome={() => handleNavigate('home')}
            onStartQuiz={handleSelectSubject}
          />
        )}
      </main>

      <QuickSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        subjects={subjects}
        onSelectSubject={handleSelectSubject}
        onViewMaterials={handleViewMaterials}
      />

      <FormulaModal
        isOpen={isFormulaOpen}
        onClose={() => setIsFormulaOpen(false)}
        subjects={subjects}
      />

      {/* Footer */}
      <footer className="w-full border-t border-zinc-200/80 dark:border-zinc-800 py-6 text-center text-xs text-zinc-400 dark:text-zinc-500 bg-white/50 dark:bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 Akademika Uji Kompetensi & Materi. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Privasi</span>
            <span>Syarat & Ketentuan</span>
            <span>Bantuan</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
