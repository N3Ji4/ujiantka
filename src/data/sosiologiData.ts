import { Topic } from '../types';

export const sosiologiTopics: Topic[] = [
  {
    id: 'sos-1',
    title: 'Interaksi Sosial & Sosialisasi',
    categoryTag: 'Sosiologi Dasar',
    summary: 'Mempelajari hakikat manusia sebagai makhluk sosial, syarat terjadinya interaksi sosial, bentuk proses sosial asosiatif & disosiatif, serta agen sosialisasi.',
    keyPoints: [
      'Syarat interaksi sosial: Adanya Kontak Sosial dan Komunikasi.',
      'Proses Asosiatif: Kerja sama (cooperation), akomodasi, asimilasi, dan akulturasi.',
      'Proses Disosiatif: Persaingan (competition), kontravensi, dan pertikaian/konflik.',
      'Agen Sosialisasi utama: Keluarga, kelompok sebaya, sekolah, dan media massa.'
    ],
    conceptExplanation: 'Interaksi sosial adalah kunci dari semua kehidupan bermasyarakat. Melalui sosialisasi, individu mempelajari nilai dan norma yang berlaku di masyarakat.',
    stepByStepGuides: [
      {
        title: 'Mengidentifikasi Bentuk Akomodasi Konflik',
        steps: [
          'Koersi: Penyelesaian melalui paksaan/kekerasan.',
          'Kompromi: Pihak yang bersengketa saling mengurangi tuntutan.',
          'Mediasi: Penyelesaian dengan bantuan pihak ketiga yang netral sebagai penengah.',
          'Arbitrase: Pihak ketiga memberikan keputusan mengikat layaknya hakim.'
        ],
        tips: 'Perhatikan posisi pihak ketiga dalam soal: apakah hanya menengahi (mediasi) atau berhak memutuskan (arbitrase).'
      }
    ],
    quickTips: [
      'Asimilasi adalah peleburan dua kebudayaan menjadi kebudayaan baru, sedangkan akulturasi adalah pencampuran budaya tanpa menghilangkan kepribadian aslinya.'
    ]
  },
  {
    id: 'sos-2',
    title: 'Stratifikasi & Mobilitas Sosial',
    categoryTag: 'Struktur Sosial',
    summary: 'Kajian mengenai pelapisan sosial di masyarakat (stratifikasi tertutup, terbuka, campuran), diferensiasi sosial, serta saluran mobilitas sosial vertikal dan horizontal.',
    keyPoints: [
      'Stratifikasi Sosial: Penggolongan masyarakat secara bertingkat berdasarkan kekayaan, kekuasaan, atau pendidikan.',
      'Mobilitas Vertikal Naik (Social Climbing) dan Turun (Social Sinking).',
      'Mobilitas Horizontal: Perpindahan status sosial dalam derajat yang sama (contoh: pindah sekolah antar kota).',
      'Saluran mobilitas: Pendidikan, organisasi politik, lembaga keagamaan, dan perkawinan.'
    ],
    conceptExplanation: 'Struktur sosial menentukan kedudukan individu dan kelompok dalam hierarki sosial serta peluang mereka untuk melakukan mobilitas vertikal.',
    quickTips: [
      'Pendidikan adalah eskalator sosial terbaik untuk mewujudkan mobilitas vertikal naik.'
    ]
  }
];
