export type SubjectId = 'matematika' | 'bahasa-inggris' | 'pkwu' | 'teknik-komputer';

export type Difficulty = 'Mudah' | 'Sedang' | 'Tinggi';

export interface KeyConcept {
  title: string;
  explanation: string;
  formulaOrKey?: string;
}

export interface StepByStepGuide {
  title: string;
  problem: string;
  steps: { stepNumber: number; instruction: string; calculationOrDetail: string }[];
  solution: string;
  tip: string;
}

export interface PracticalExample {
  title: string;
  context: string;
  solution: string;
  takeaway: string;
}

export interface QuickCheck {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Topic {
  id: string;
  title: string;
  subheader: string;
  estimatedReadTime: string;
  summary: string;
  keyConcepts: KeyConcept[];
  stepByStepGuides: StepByStepGuide[];
  practicalExamples: PracticalExample[];
  quickTips: string[];
  quickCheck: QuickCheck[];
}

export interface QuestionOption {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface Question {
  id: string;
  number: number;
  subjectId: SubjectId;
  topicTag: string;
  difficulty: Difficulty;
  question: string;
  contextSnippet?: string;
  mathFormula?: string;
  codeSnippet?: string;
  options: QuestionOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  keyConcept: string;
  tkaExamTip: string;
}

export interface UserAnswer {
  questionId: string;
  selectedOption: 'A' | 'B' | 'C' | 'D';
  isCorrect: boolean;
  timeSpentSec: number;
  timestamp: number;
}

export interface Subject {
  id: SubjectId;
  title: string;
  shortTitle: string;
  category: string;
  subtitle: string;
  description: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  lightBg: string;
  iconName: string;
  topics: Topic[];
  cheatSheet: {
    category: string;
    items: { label: string; formula: string; note: string }[];
  }[];
}

export interface QuizState {
  subjectId: SubjectId;
  currentIndex: number;
  answers: Record<string, UserAnswer>;
  flaggedQuestionIds: string[];
  startTime: number;
  endTime?: number;
  isFinished: boolean;
  mode: 'all' | 'missed_only';
  customQuestionIds?: string[];
}

export type ThemeMode = 'light' | 'paper' | 'dark';
export type ActiveView = 'home' | 'materials' | 'quiz' | 'summary' | 'about';
