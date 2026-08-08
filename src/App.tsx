import React, { useState, useEffect } from 'react';
import { 
  Subject, 
  SubjectId, 
  ThemeMode, 
  ActiveView, 
  UserAnswer, 
  QuizState 
} from './types';
import { subjects, getSubjectById, questionsBySubject } from './data';
import { sound } from './utils/audio';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { MaterialsView } from './components/MaterialsView';
import { QuizView } from './components/QuizView';
import { SummaryView } from './components/SummaryView';
import { FormulaModal } from './components/FormulaModal';
import { QuickSearchModal } from './components/QuickSearchModal';

const STORAGE_KEY_PROGRESS = 'tka_progress_v1';
const STORAGE_KEY_THEME = 'tka_theme_v1';

export default function App() {
  // Theme state: light | paper | dark
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_THEME);
    return (saved as ThemeMode) || 'light';
  });

  // Active view state: home | materials | quiz | summary
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [currentSubjectId, setCurrentSubjectId] = useState<SubjectId>('matematika');
  const [initialTopicId, setInitialTopicId] = useState<string | undefined>(undefined);

  // Modals state
  const [isFormulaOpen, setIsFormulaOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  // Quiz active session state
  const [quizMode, setQuizMode] = useState<'all' | 'missed_only'>('all');
  const [customQuestionIds, setCustomQuestionIds] = useState<string[] | undefined>(undefined);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, UserAnswer>>({});
  const [lastQuizTimeSec, setLastQuizTimeSec] = useState(0);
  const [quizSessionKey, setQuizSessionKey] = useState(0);

  // Progress per subject: { subjectId: { answered, correct, total } }
  const [progressData, setProgressData] = useState<
    Record<SubjectId, { answered: number; correct: number; total: number }>
  >(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROGRESS);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return {
      matematika: { answered: 0, correct: 0, total: 30 },
      'bahasa-inggris': { answered: 0, correct: 0, total: 30 },
      pkwu: { answered: 0, correct: 0, total: 30 },
      'teknik-komputer': { answered: 0, correct: 0, total: 30 }
    };
  });

  // Apply theme class to <html> element
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'paper');
    if (themeMode === 'dark') {
      root.classList.add('dark');
    } else if (themeMode === 'paper') {
      root.classList.add('paper');
    }
    localStorage.setItem(STORAGE_KEY_THEME, themeMode);
  }, [themeMode]);

  // Global Keyboard shortcuts: Ctrl+K or Cmd+K to open search, Esc to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentSubject = getSubjectById(currentSubjectId) || subjects[0];

  // Navigation handlers
  const handleNavigateHome = () => {
    setActiveView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenMaterials = (subject: Subject, topicId?: string) => {
    setCurrentSubjectId(subject.id);
    setInitialTopicId(topicId);
    setActiveView('materials');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartQuiz = (subject: Subject, mode: 'all' | 'missed_only' = 'all', specificQuestionIds?: string[]) => {
    setCurrentSubjectId(subject.id);
    setQuizMode(mode);
    setCustomQuestionIds(specificQuestionIds);
    setQuizSessionKey((k) => k + 1);
    setActiveView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinishQuiz = (answers: Record<string, UserAnswer>, timeSpentSec: number) => {
    setQuizAnswers(answers);
    setLastQuizTimeSec(timeSpentSec);

    // Update aggregated progress
    const answeredCount = Object.keys(answers).length;
    const correctCount = Object.values(answers).filter((a) => a.isCorrect).length;

    setProgressData((prev) => {
      const updated = {
        ...prev,
        [currentSubjectId]: {
          answered: Math.max(prev[currentSubjectId]?.answered || 0, answeredCount),
          correct: Math.max(prev[currentSubjectId]?.correct || 0, correctCount),
          total: 30
        }
      };
      localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(updated));
      return updated;
    });

    setActiveView('summary');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleAudio = () => {
    const newState = sound.toggleAmbient('rain');
    setIsAudioPlaying(newState);
  };

  // Background styling based on theme
  const getContainerBg = () => {
    if (themeMode === 'paper') {
      return 'bg-[#fcfaf4] text-zinc-900 selection:bg-amber-200';
    }
    return 'bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-emerald-200 dark:selection:bg-emerald-950';
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-200 ${getContainerBg()}`}>
      {/* Top Navbar */}
      <Navbar
        activeView={activeView}
        currentSubject={activeView !== 'home' ? currentSubject : undefined}
        themeMode={themeMode}
        onThemeChange={setThemeMode}
        onNavigateHome={handleNavigateHome}
        onNavigateMaterials={handleOpenMaterials}
        onOpenFormula={() => setIsFormulaOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        isAudioPlaying={isAudioPlaying}
        onToggleAudio={handleToggleAudio}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        {activeView === 'home' && (
          <HomeView
            progressData={progressData}
            onOpenMaterials={(subj) => handleOpenMaterials(subj)}
            onStartQuiz={(subj) => handleStartQuiz(subj, 'all')}
            onOpenCheatSheet={(subj) => {
              setCurrentSubjectId(subj.id);
              setIsFormulaOpen(true);
            }}
            onOpenGlobalSearch={() => setIsSearchOpen(true)}
          />
        )}

        {activeView === 'materials' && (
          <MaterialsView
            subject={currentSubject}
            initialTopicId={initialTopicId}
            onNavigateHome={handleNavigateHome}
            onStartQuiz={(subj) => handleStartQuiz(subj, 'all')}
            onOpenCheatSheet={(subj) => {
              setCurrentSubjectId(subj.id);
              setIsFormulaOpen(true);
            }}
          />
        )}

        {activeView === 'quiz' && (
          <QuizView
            key={quizSessionKey}
            subject={currentSubject}
            mode={quizMode}
            customQuestionIds={customQuestionIds}
            onFinishQuiz={handleFinishQuiz}
            onExitToHome={handleNavigateHome}
            onOpenCheatSheet={(subj) => {
              setCurrentSubjectId(subj.id);
              setIsFormulaOpen(true);
            }}
          />
        )}

        {activeView === 'summary' && (
          <SummaryView
            subject={currentSubject}
            answers={quizAnswers}
            timeSpentSec={lastQuizTimeSec}
            onRetakeQuiz={() => handleStartQuiz(currentSubject, 'all')}
            onRetakeMissedOnly={(missedIds) => handleStartQuiz(currentSubject, 'missed_only', missedIds)}
            onOpenMaterials={(subj) => handleOpenMaterials(subj)}
            onNavigateHome={handleNavigateHome}
          />
        )}
      </main>

      {/* Formula & Cheat Sheet Modal */}
      <FormulaModal
        subject={currentSubject}
        isOpen={isFormulaOpen}
        onClose={() => setIsFormulaOpen(false)}
      />

      {/* Quick Search Modal (Ctrl + K) */}
      <QuickSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectTopic={(subj, topicId) => handleOpenMaterials(subj, topicId)}
        onSelectSubjectPractice={(subj) => handleStartQuiz(subj, 'all')}
      />

      {/* Minimal Footer */}
      <footer className="w-full border-t border-zinc-200/80 dark:border-zinc-800/80 py-6 text-center text-xs text-zinc-500 dark:text-zinc-400 bg-white/50 dark:bg-zinc-950/50">
        <div className="max-w-6xl mx-auto px-4">
          <span>© 2026 TKA Belajar — Platform Persiapan Tes Kemampuan Akademik</span>
        </div>
      </footer>
    </div>
  );
}
