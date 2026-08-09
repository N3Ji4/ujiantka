import { Topic } from '../types';

export const biologiTopics: Topic[] = [
  {
    id: 'bio-1',
    title: 'Sel & Struktur Organel Sel',
    categoryTag: 'Biologi Sel',
    summary: 'Mempelajari unit struktural dan fungsional terkecil makhluk hidup, perbedaan sel prokariotik dan eukariotik, serta fungsi organel sel.',
    keyPoints: [
      'Sel Prokariotik: Tidak memiliki membran inti (contoh: Bakteri, Archaea).',
      'Sel Eukariotik: Memiliki membran inti sejati dan organel bermembran (contoh: Sel Hewan & Tumbuhan).',
      'Mitokondria: Pusat respirasi sel dan penghasil energi (ATP).',
      'Kloroplas: Tempat berlangsungnya fotosintesis pada sel tumbuhan.'
    ],
    conceptExplanation: 'Setiap organel sel bekerja sama seperti pabrik mini. Nukleus sebagai pusat pengendali, ribosom sebagai mesin sintesis protein, dan mitokondria sebagai pembangkit listrik.',
    stepByStepGuides: [
      {
        title: 'Membedakan Sel Hewan dan Sel Tumbuhan',
        steps: [
          'Sel tumbuhan memiliki dinding sel dari selulosa dan vakuola berukuran besar.',
          'Sel hewan memiliki sentriol dan lisosom yang umumnya tidak ditemukan pada tumbuhan tinggi.',
          'Sel tumbuhan memiliki plastida/kloroplas untuk fotosintesis.'
        ],
        tips: 'Ingat akronim: Tumbuhan punya Dinding & Kloroplas, Hewan punya Sentriol.'
      }
    ],
    formulas: [
      'Fotosintesis: 6CO2 + 6H2O + Cahaya → C6H12O6 + 6O2',
      'Respirasi Sel: C6H12O6 + 6O2 → 6CO2 + 6H2O + 38 ATP'
    ],
    formulaDetails: [
      {
        title: 'Reaksi Kimia Fotosintesis',
        formula: '6CO_2 + 6H_2O \\xrightarrow{\\text{Klorofil & Cahaya}} C_6H_{12}O_6 + 6O_2',
        explanation: 'Konversi energi cahaya matahari menjadi energi kimia (glukosa) oleh tumbuhan hijau.',
        variables: [
          { symbol: 'CO_2', meaning: 'Karbon dioksida dari udara' },
          { symbol: 'H_2O', meaning: 'Air yang diserap akar' },
          { symbol: 'C_6H_{12}O_6', meaning: 'Glukosa (cadangan makanan)' }
        ],
        quickTip: 'Reaksi terang terjadi di tilakoid, reaksi gelap (siklus Calvin) terjadi di stroma kloroplas.'
      }
    ],
    examples: [
      {
        problem: 'Organel sel apakah yang paling banyak ditemukan pada sel otot yang membutuhkan energi tinggi?',
        given: 'Sel otot memerlukan energi (ATP) instan dan masif.',
        questionTarget: 'Organel utama',
        steps: [
          'Identifikasi fungsi penghasil energi sel.',
          'Mitokondria bertanggung jawab atas siklus Krebs dan fosforilasi oksidatif pembentuk ATP.'
        ],
        solution: 'Mitokondria.',
        tip: 'Semakin aktif suatu sel (seperti sel otot dan sperma), semakin banyak mitokondria di dalamnya.'
      }
    ],
    quickTips: [
      'Hafalkan fungsi utama masing-masing organel agar tidak terkecoh dalam soal pilihan ganda.'
    ]
  },
  {
    id: 'bio-2',
    title: 'Genetika & Pewarisan Sifat',
    categoryTag: 'Genetika',
    summary: 'Kajian mengenai DNA, RNA, sintesis protein, pembelahan sel (mitosis & meiosis), serta hukum pewarisan sifat Mendel.',
    keyPoints: [
      'DNA tersusun atas nukleotida (gula deoksiribosa, gugus fosfat, basa nitrogen A-T, G-C).',
      'Mitosis menghasilkan 2 sel anak identik (sel tubuh/somatik), Meiosis menghasilkan 4 sel anak haploid (sel kelamin).',
      'Hukum I Mendel (Segregasi Bebas) dan Hukum II Mendel (Berpasangan Bebas).'
    ],
    conceptExplanation: 'Pewarisan sifat dari orang tua kepada keturunannya diatur oleh gen di dalam kromosom melalui replikasi DNA dan pembelahan meiosis.',
    quickTips: [
      'Ingat pasangan basa nitrogen DNA: Adenin berpasangan dengan Timin (A-T), Guanin dengan Sitosin (G-C).'
    ]
  }
];
