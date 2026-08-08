import { Subject, SubjectId, Question } from '../types';
import { matematikaTopics, matematikaCheatSheet } from './matematikaData';
import { matematikaQuestions } from './matematikaQuestions';
import { bahasaInggrisTopics, bahasaInggrisCheatSheet } from './bahasaInggrisData';
import { bahasaInggrisQuestions } from './bahasaInggrisQuestions';
import { pkwuTopics, pkwuCheatSheet } from './pkwuData';
import { pkwuQuestions } from './pkwuQuestions';
import { teknikKomputerTopics, teknikKomputerCheatSheet } from './teknikKomputerData';
import { teknikKomputerQuestions } from './teknikKomputerQuestions';

export const subjects: Subject[] = [
  {
    id: 'matematika',
    title: 'Matematika',
    shortTitle: 'MTK',
    category: 'Sains & Analitika',
    subtitle: 'Aljabar, Kalkulus, Trigonometri, Vektor & Peluang',
    description: 'Kuasai konsep aljabar fungsi, rumus cepat kalkulus turunan dan integral, sudut trigonometri, determinan matriks, dan kaidah pencacahan TKA.',
    accentColor: '#10b981', // emerald
    badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800',
    badgeText: '30 Soal TKA',
    lightBg: 'from-emerald-50/70 to-teal-50/40 dark:from-emerald-950/20 dark:to-teal-950/10',
    iconName: 'Calculator',
    topics: matematikaTopics,
    cheatSheet: matematikaCheatSheet
  },
  {
    id: 'bahasa-inggris',
    title: 'Bahasa Inggris',
    shortTitle: 'ENG',
    category: 'Literasi & Bahasa',
    subtitle: 'Reading Comprehension, Advanced Grammar & Inversion',
    description: 'Strategi membaca teks akademik cepat, kosakata kontekstual, struktur kalimat inversi, subjunctive mood, dan analisis wacana TKA.',
    accentColor: '#0ea5e9', // sky
    badgeBg: 'bg-sky-50 text-sky-800 border-sky-200 dark:bg-sky-950/50 dark:text-sky-300 dark:border-sky-800',
    badgeText: '30 Soal TKA',
    lightBg: 'from-sky-50/70 to-indigo-50/40 dark:from-sky-950/20 dark:to-indigo-950/10',
    iconName: 'BookOpen',
    topics: bahasaInggrisTopics,
    cheatSheet: bahasaInggrisCheatSheet
  },
  {
    id: 'pkwu',
    title: 'PKWU',
    shortTitle: 'PKWU',
    category: 'Kewirausahaan Terapan',
    subtitle: 'Analisis BEP, Model Bisnis, Pemasaran 4P/7P & HKI',
    description: 'Prakarya dan Kewirausahaan: perhitungan titik impas produksi (BEP), HPP, Lean Canvas, strategi penetapan harga, desain ergonomis, dan legalitas HKI.',
    accentColor: '#f59e0b', // amber
    badgeBg: 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800',
    badgeText: '30 Soal TKA',
    lightBg: 'from-amber-50/70 to-orange-50/40 dark:from-amber-950/20 dark:to-orange-950/10',
    iconName: 'Lightbulb',
    topics: pkwuTopics,
    cheatSheet: pkwuCheatSheet
  },
  {
    id: 'teknik-komputer',
    title: 'Teknik Komputer',
    shortTitle: 'TKOM',
    category: 'Teknologi & Komputasi',
    subtitle: 'Arsitektur CPU, Subnetting IPv4, OS & Query SQL',
    description: 'Sistem bilangan biner/heksadesimal, gerbang logika, kalkulasi subnetting CIDR, deadlock OS, struktur data Stack/Queue, dan relasi basis data SQL.',
    accentColor: '#6366f1', // indigo
    badgeBg: 'bg-indigo-50 text-indigo-800 border-indigo-200 dark:bg-indigo-950/50 dark:text-indigo-300 dark:border-indigo-800',
    badgeText: '30 Soal TKA',
    lightBg: 'from-indigo-50/70 to-purple-50/40 dark:from-indigo-950/20 dark:to-purple-950/10',
    iconName: 'Cpu',
    topics: teknikKomputerTopics,
    cheatSheet: teknikKomputerCheatSheet
  }
];

export const questionsBySubject: Record<SubjectId, Question[]> = {
  matematika: matematikaQuestions,
  'bahasa-inggris': bahasaInggrisQuestions,
  pkwu: pkwuQuestions,
  'teknik-komputer': teknikKomputerQuestions
};

export function getSubjectById(id: SubjectId): Subject | undefined {
  return subjects.find((s) => s.id === id);
}

export function getQuestionsForSubject(id: SubjectId): Question[] {
  return questionsBySubject[id] || [];
}
