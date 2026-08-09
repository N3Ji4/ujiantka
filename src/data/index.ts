import { Subject, Question } from '../types';
import { matematikaTopics } from './matematikaData';
import { matematikaQuestions } from './matematikaQuestions';
import { bahasaInggrisTopics } from './bahasaInggrisData';
import { bahasaInggrisQuestions } from './bahasaInggrisQuestions';
import { pkwuTopics } from './pkwuData';
import { pkwuQuestions } from './pkwuQuestions';
import { teknikKomputerTopics } from './teknikKomputerData';
import { teknikKomputerQuestions } from './teknikKomputerQuestions';

export const subjects: Subject[] = [
  {
    id: 'matematika',
    title: 'Matematika Lanjutan',
    shortTitle: 'Matematika',
    description: 'Aljabar, Kalkulus, Trigonometri, dan Statistika untuk Uji Kompetensi Akademik.',
    iconName: 'Calculator',
    accentColor: 'from-emerald-500 to-teal-600',
    badgeBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    topics: matematikaTopics
  },
  {
    id: 'bahasa_inggris',
    title: 'Bahasa Inggris Lanjutan',
    shortTitle: 'B. Inggris',
    description: 'Reading Comprehension, Advanced Grammar, Subjunctive, dan Error Recognition.',
    iconName: 'Languages',
    accentColor: 'from-sky-500 to-blue-600',
    badgeBg: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20',
    topics: bahasaInggrisTopics
  },
  {
    id: 'pkwu',
    title: 'PKWU (Kewirausahaan)',
    shortTitle: 'PKWU',
    description: 'Analisis SWOT, Break Even Point (BEP), Strategi Pemasaran 4P, dan Manajemen Bisnis.',
    iconName: 'Briefcase',
    accentColor: 'from-amber-500 to-orange-600',
    badgeBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    topics: pkwuTopics
  },
  {
    id: 'teknik_komputer',
    title: 'Teknik Komputer & Jaringan',
    shortTitle: 'Teknik Komputer',
    description: 'Arsitektur CPU, Protokol TCP/IP, Model OSI, Subnetting CIDR, dan Manajemen OS.',
    iconName: 'Cpu',
    accentColor: 'from-indigo-500 to-violet-600',
    badgeBg: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
    topics: teknikKomputerTopics
  }
];

export const allQuestions: Question[] = [
  ...matematikaQuestions,
  ...bahasaInggrisQuestions,
  ...pkwuQuestions,
  ...teknikKomputerQuestions
];
