import { Topic } from '../types';

export const ekonomiTopics: Topic[] = [
  {
    id: 'eko-1',
    title: 'Permintaan, Penawaran & Keseimbangan Pasar',
    categoryTag: 'Mikroekonomi',
    summary: 'Mempelajari hukum permintaan dan penawaran, fungsi pasar, titik keseimbangan (equilibrium), serta elastisitas harga.',
    keyPoints: [
      'Hukum Permintaan: Jika harga naik, jumlah permintaan turun (berbanding terbalik).',
      'Hukum Penawaran: Jika harga naik, jumlah penawaran naik (berbanding lurus).',
      'Titik Keseimbangan (Equilibrium): Terjadi saat Qd = Qs (jumlah permintaan sama dengan penawaran).',
      'Elastisitas Harga (Ed): Mengukur tingkat kepekaan perubahan jumlah barang akibat perubahan harga.'
    ],
    conceptExplanation: 'Pasar ditentukan oleh pertemuan antara pembeli (permintaan) dan penjual (penawaran). Harga pasar terbentuk secara alami pada titik ekuilibrium.',
    stepByStepGuides: [
      {
        title: 'Cara Menghitung Harga Keseimbangan Pasar',
        steps: [
          'Tuliskan fungsi permintaan (Qd = a - bP) dan fungsi penawaran (Qs = c + dP).',
          'Masukkan syarat keseimbangan: Qd = Qs.',
          'Selesaikan persamaan aljabar untuk mendapatkan harga keseimbangan (Pe) dan kuantitas keseimbangan (Qe).'
        ],
        tips: 'Pastikan tanda negatif/positif pada koefisien harga sudah benar.'
      }
    ],
    formulas: [
      'Syarat Keseimbangan: Qd = Qs',
      'Elastisitas Permintaan: E_d = \\frac{\\Delta Q}{\\Delta P} \\cdot \\frac{P}{Q}'
    ],
    formulaDetails: [
      {
        title: 'Fungsi Permintaan & Penawaran Linear',
        formula: 'Q_d = a - bP \\quad \\text{dan} \\quad Q_s = c + dP',
        explanation: 'Model matematis hubungan antara harga (P) dan jumlah barang (Q).',
        variables: [
          { symbol: 'Q_d', meaning: 'Jumlah permintaan' },
          { symbol: 'Q_s', meaning: 'Jumlah penawaran' },
          { symbol: 'P', meaning: 'Harga barang' }
        ],
        quickTip: 'Kurva permintaan berlereng negatif (turun dari kiri ke kanan), kurva penawaran berlereng positif.'
      }
    ],
    examples: [
      {
        problem: 'Diketahui fungsi permintaan Qd = 100 - 2P dan fungsi penawaran Qs = -20 + 4P. Tentukan harga keseimbangan pasar (Pe).',
        given: 'Qd = 100 - 2P, Qs = -20 + 4P',
        questionTarget: 'Harga Keseimbangan (Pe)',
        steps: [
          'Gunakan syarat Qd = Qs',
          '100 - 2P = -20 + 4P',
          '100 + 20 = 4P + 2P => 120 = 6P => P = 20'
        ],
        solution: 'Harga keseimbangan pasar (Pe) adalah 20.',
        tip: 'Uji kembali nilai P ke dalam persamaan Qd atau Qs untuk memastikan hasilnya sama.'
      }
    ],
    quickTips: [
      'Ingat bahwa pajak (t) menggeser kurva penawaran ke atas/kiri, sedangkan subsidi (s) menggeser ke bawah/kanan.'
    ]
  },
  {
    id: 'eko-2',
    title: 'Pendapatan Nasional & Inflasi',
    categoryTag: 'Makroekonomi',
    summary: 'Kajian mengenai Produk Domestik Bruto (PDB/GDP), Produk Nasional Bruto (PNB/GNP), perhitungan pendapatan nasional, dan indeks harga inflasi.',
    keyPoints: [
      'GDP (Gross Domestic Product): Nilai produk dalam batas wilayah suatu negara termasuk WNA.',
      'GNP (Gross National Product): Nilai produk oleh warga negara sendiri di dalam maupun luar negeri.',
      'Metode Penghitungan: Pendekatan Pendapatan, Pendekatan Pengeluaran, dan Pendekatan Produksi.',
      'Inflasi adalah kecenderungan kenaikan harga barang dan jasa secara umum dan terus-menerus.'
    ],
    conceptExplanation: 'Pendapatan nasional mengukur kesehatan ekonomi suatu negara dan tingkat kemakmuran rata-rata penduduknya.',
    quickTips: [
      'IHK (Indeks Harga Konsumen) digunakan oleh BPS untuk mengukur tingkat inflasi bulanan/tahunan.'
    ]
  }
];
