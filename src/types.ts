export type SubjectId = 'matematika' | 'bahasa_inggris' | 'pkwu' | 'teknik_komputer' | 'fisika' | 'kimia' | 'biologi' | 'ekonomi' | 'sosiologi' | 'geografi' | 'sejarah';

export type Difficulty = 'Mudah' | 'Sedang' | 'Sulit';

export interface Option {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface Question {
  id: string;
  subjectId: SubjectId;
  topicTag: string;
  difficulty: Difficulty;
  question: string;
  contextSnippet?: string;
  mathFormula?: string;
  options: Option[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

export interface FormulaVariable {
  symbol: string;
  meaning: string;
}

export interface FormulaDetail {
  title?: string;
  formula: string;
  explanation?: string;
  variables?: FormulaVariable[];
  quickTip?: string;
}

export interface StepByStepGuide {
  title: string;
  description?: string;
  steps: string[];
  tips?: string;
}

export interface WorkedExample {
  problem: string;
  given?: string;
  questionTarget?: string;
  steps?: string[];
  solution: string;
  tip?: string;
}

export interface Topic {
  id: string;
  title: string;
  categoryTag?: string;
  summary: string;
  keyPoints: string[];
  conceptExplanation?: string;
  stepByStepGuides?: StepByStepGuide[];
  formulas?: string[];
  formulaDetails?: FormulaDetail[];
  examples?: WorkedExample[];
  quickTips?: string[];
}

export interface Subject {
  id: SubjectId;
  title: string;
  shortTitle: string;
  description: string;
  iconName: string;
  accentColor: string;
  badgeBg: string;
  topics: Topic[];
}

export interface UserAnswer {
  questionId: string;
  selectedOption: 'A' | 'B' | 'C' | 'D';
  isCorrect: boolean;
  timeSpentSec: number;
  timestamp: number;
}

export type AppView = 'home' | 'quiz' | 'summary' | 'materials';
export type ThemeMode = 'light' | 'dark';
