import { Topic } from '../types';

export const geografiTopics: Topic[] = [
  {
    id: 'geo-1',
    title: 'Litosfer & Dinamika Tenaga Endogen',
    categoryTag: 'Geomorfologi',
    summary: 'Mempelajari lapisan bumi (litosfer), tenaga endogen (tektonisme, vulkanisme, seisme), serta tenaga eksogen (pelapukan, erosi, sedimentasi).',
    keyPoints: [
      'Tenaga Endogen: Bersumber dari dalam bumi yang bersifat membangun bentuk muka bumi (Tektonisme, Vulkanisme, Seisme).',
      'Tenaga Eksogen: Bersumber dari luar bumi yang bersifat merusak/mengikis relief muka bumi.',
      'Teori Tektonik Lempeng: Lempeng bumi bergerak di atas lapisan astenosfer akibat arus konveksi mantel.',
      'Gempa Bumi: Pusat gempa di dalam bumi disebut hiposentrum, di permukaan bumi disebut episentrum.'
    ],
    conceptExplanation: 'Bentang alam bumi seperti pegunungan, lembah, dan palung laut terbentuk melalui pertarungan abadi antara tenaga pembentuk bumi (endogen) dan perusak (eksogen).',
    stepByStepGuides: [
      {
        title: 'Menghitung Jarak Episentrum Gempa (Metode Gesetz)',
        steps: [
          'Catat waktu kedatangan gelombang primer (P) dan gelombang sekunder (S).',
          'Gunakan rumus Laska: Delta = [ (S - P) - 1 menit ] * 1000 km.'
        ],
        tips: 'Pastikan selisih waktu S-P dikonversi ke menit dengan benar.'
      }
    ],
    formulas: [
      'Rumus Laska: \\Delta = \\left[ (S - P) - 1\' \\right] \\times 1000 \\text{ km}'
    ],
    formulaDetails: [
      {
        title: 'Formula Jarak Episentrum Gempa',
        formula: '\\Delta = \\left[ (t_s - t_p) - 1 \\right] \\times 1000 \\text{ km}',
        explanation: 'Menghitung jarak stasiun pengamat seismograf ke pusat episentrum gempa.',
        variables: [
          { symbol: 't_s', meaning: 'Waktu gelombang Sekunder tercatat' },
          { symbol: 't_p', meaning: 'Waktu gelombang Primer tercatat' },
          { symbol: '\\Delta', meaning: 'Jarak episentrum (km)' }
        ],
        quickTip: 'Selisih (t_s - t_p) dalam satuan menit.'
      }
    ],
    examples: [
      {
        problem: 'Gelombang sekunder tercatat pukul 10.15.20 dan gelombang primer pukul 10.12.20. Berapa jarak episentrum gempa?',
        given: 'S = 10:15:20, P = 10:12:20 (Selisih S - P = 3 menit)',
        questionTarget: 'Jarak Episentrum',
        steps: [
          'S - P = 3 menit',
          'Delta = [ 3 - 1 ] * 1000 km = 2 * 1000 = 2000 km.'
        ],
        solution: 'Jarak episentrum gempa adalah 2000 kilometer.',
        tip: 'Kurangi selisih waktu dengan 1 menit sesuai ketentuan rumus Laska.'
      }
    ],
    quickTips: [
      'Pelapukan organik, fisika, dan kimia adalah agen utama pembentuk tanah.'
    ]
  },
  {
    id: 'geo-2',
    title: 'Atmosfer & Pola Iklim Dunia',
    categoryTag: 'Klimatologi',
    summary: 'Kajian mengenai lapisan atmosfer, unsur cuaca dan iklim (suhu, kelembapan, angin, curah hujan), serta klasifikasi iklim Koppen dan Junghuhn.',
    keyPoints: [
      'Lapisan Troposfer: Tempat terjadinya fenomena cuaca (awan, hujan, angin).',
      'Klasifikasi Iklim Junghuhn: Berdasarkan ketinggian tempat dan jenis vegetasi (Panas, Sedang, Sejuk, Dingin).',
      'Angin Muson Barat membawa musim hujan di Indonesia, Angin Muson Timur membawa musim kemarau.'
    ],
    conceptExplanation: 'Iklim dan cuaca sangat menentukan aktivitas pertanian, pelayaran, dan tata guna lahan suatu wilayah.',
    quickTips: [
      'Semakin tinggi suatu tempat dari permukaan laut (altitude), suhu udara akan semakin turun.'
    ]
  }
];
