import { Subject, Question } from '../types';
import { matematikaTopics } from './matematikaData';
import { matematikaQuestions } from './matematikaQuestions';
import { bahasaInggrisTopics } from './bahasaInggrisData';
import { bahasaInggrisQuestions } from './bahasaInggrisQuestions';
import { pkwuTopics } from './pkwuData';
import { pkwuQuestions } from './pkwuQuestions';
import { teknikKomputerTopics } from './teknikKomputerData';
import { teknikKomputerQuestions } from './teknikKomputerQuestions';
import { fisikaTopics } from './fisikaData';
import { fisikaQuestions } from './fisikaQuestions';
import { kimiaTopics } from './kimiaData';
import { kimiaQuestions } from './kimiaQuestions';
import { biologiTopics } from './biologiData';
import { biologiQuestions } from './biologiQuestions';
import { ekonomiTopics } from './ekonomiData';
import { ekonomiQuestions } from './ekonomiQuestions';
import { sosiologiTopics } from './sosiologiData';
import { sosiologiQuestions } from './sosiologiQuestions';
import { geografiTopics } from './geografiData';
import { geografiQuestions } from './geografiQuestions';
import { sejarahTopics } from './sejarahData';
import { sejarahQuestions } from './sejarahQuestions';

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
  },
  {
    id: 'fisika',
    title: 'Fisika Dasar & Lanjutan',
    shortTitle: 'Fisika',
    description: 'Kinematika, Dinamika, Usaha-Energi, Termodinamika, dan Elektromagnetik.',
    iconName: 'Atom',
    accentColor: 'from-cyan-500 to-blue-600',
    badgeBg: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
    topics: fisikaTopics
  },
  {
    id: 'kimia',
    title: 'Kimia Dasar & Analitik',
    shortTitle: 'Kimia',
    description: 'Struktur Atom, Stokiometri, Ikatan Kimia, Termokimia, dan Larutan.',
    iconName: 'FlaskConical',
    accentColor: 'from-rose-500 to-red-600',
    badgeBg: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
    topics: kimiaTopics
  },
  {
    id: 'biologi',
    title: 'Biologi Sel & Organisme',
    shortTitle: 'Biologi',
    description: 'Biologi Sel, Metabolisme, Genetika, Pewarisan Sifat, dan Ekologi.',
    iconName: 'Dna',
    accentColor: 'from-emerald-600 to-green-700',
    badgeBg: 'bg-emerald-600/10 text-emerald-700 dark:text-emerald-400 border-emerald-600/20',
    topics: biologiTopics
  },
  {
    id: 'ekonomi',
    title: 'Ekonomi & Akuntansi',
    shortTitle: 'Ekonomi',
    description: 'Mikro/Makroekonomi, Permintaan-Penawaran, Inflasi, dan Akuntansi Dasar.',
    iconName: 'TrendingUp',
    accentColor: 'from-amber-600 to-yellow-600',
    badgeBg: 'bg-amber-600/10 text-amber-700 dark:text-amber-400 border-amber-600/20',
    topics: ekonomiTopics
  },
  {
    id: 'sosiologi',
    title: 'Sosiologi Masyarakat',
    shortTitle: 'Sosiologi',
    description: 'Interaksi Sosial, Stratifikasi, Mobilitas Sosial, dan Konflik Integrasi.',
    iconName: 'Users',
    accentColor: 'from-purple-500 to-indigo-600',
    badgeBg: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
    topics: sosiologiTopics
  },
  {
    id: 'geografi',
    title: 'Geografi & Spasial',
    shortTitle: 'Geografi',
    description: 'Litosfer, Atmosfer, Hidrosfer, Kartografi, dan SIG.',
    iconName: 'Globe',
    accentColor: 'from-teal-500 to-emerald-600',
    badgeBg: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20',
    topics: geografiTopics
  },
  {
    id: 'sejarah',
    title: 'Sejarah Nasional & Dunia',
    shortTitle: 'Sejarah',
    description: 'Praaksara, Peradaban Kuno, Kolonialisme, dan Pergerakan Nasional.',
    iconName: 'Landmark',
    accentColor: 'from-orange-500 to-amber-600',
    badgeBg: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
    topics: sejarahTopics
  }
];

export const allQuestions: Question[] = [
  ...matematikaQuestions,
  ...bahasaInggrisQuestions,
  ...pkwuQuestions,
  ...teknikKomputerQuestions,
  ...fisikaQuestions,
  ...kimiaQuestions,
  ...biologiQuestions,
  ...ekonomiQuestions,
  ...sosiologiQuestions,
  ...geografiQuestions,
  ...sejarahQuestions
];
