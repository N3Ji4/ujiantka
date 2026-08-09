import { Topic } from '../types';

export const kimiaTopics: Topic[] = [
  {
    id: 'kim-1',
    title: 'Struktur Atom & Sistem Periodik',
    categoryTag: 'Kimia Dasar',
    summary: 'Mempelajari partikel penyusun atom (proton, elektron, neutron), konfigurasi elektron, bilangan kuantum, dan sifat keperiodikan unsur.',
    keyPoints: [
      'Nomor Atom (Z) menyatakan jumlah proton (dan elektron pada atom netral).',
      'Nomor Massa (A) adalah jumlah proton ditambah neutron (A = p + n).',
      'Konfigurasi elektron Aufbau mengikuti tingkat energi: 1s, 2s, 2p, 3s, 3p, 4s, 3d, dst.',
      'Sifat periodik: Jari-jari atom, energi ionisasi, afinitas elektron, dan keelektronegatifan.'
    ],
    conceptExplanation: 'Konfigurasi elektron menentukan letak golongan dan periode suatu unsur dalam SPU serta bagaimana unsur tersebut berikatan kimia.',
    stepByStepGuides: [
      {
        title: 'Menentukan Golongan dan Periode dari Konfigurasi',
        steps: [
          'Tuliskan konfigurasi elektron berdasarkan prinsip Aufbau.',
          'Periode ditunjukkan oleh kulit terbesar (angka depan terbesar).',
          'Golongan ditentukan dari jumlah elektron valensi (elektron pada kulit terluar).'
        ],
        tips: 'Untuk golongan transisi (blok d), elektron valensi berasal dari subkulit ns dan (n-1)d.'
      }
    ],
    formulas: [
      'Jumlah Neutron (n) = A - Z',
      'Maksimum Elektron per Kulit = 2n^2'
    ],
    formulaDetails: [
      {
        title: 'Kapasitas Elektron Maksimum Kulit',
        formula: 'N = 2n^2',
        explanation: 'Menghitung jumlah maksimum elektron yang dapat menempati suatu kulit atom.',
        variables: [
          { symbol: 'n', meaning: 'Nomor kulit (utama)' },
          { symbol: 'N', meaning: 'Jumlah elektron maksimum' }
        ],
        quickTip: 'Kulit K(n=1)=2, L(n=2)=8, M(n=3)=18, N(n=4)=32.'
      }
    ],
    examples: [
      {
        problem: 'Tentukan golongan dan periode untuk unsur dengan nomor atom 17 (Chlorine).',
        given: 'Z = 17',
        questionTarget: 'Golongan & Periode',
        steps: [
          'Konfigurasi: 1s² 2s² 2p⁶ 3s² 3p⁵',
          'Kulit terbesar = 3 (Periode 3)',
          'Elektron valensi = 3s² 3p⁵ (Total 7 elektron -> Golongan VIIA / 17)'
        ],
        solution: 'Periode 3, Golongan VIIA (Halogen).',
        tip: 'Unsur halogen sangat reaktif karena membutuhkan 1 elektron untuk mencapai oktet stabil.'
      }
    ],
    quickTips: [
      'Hafalkan konfigurasi gas mulia (He, Ne, Ar, Kr) untuk menyingkat penulisan konfigurasi (core notation).'
    ]
  },
  {
    id: 'kim-2',
    title: 'Stokiometri & Konsep Mol',
    categoryTag: 'Perhitungan Kimia',
    summary: 'Pusat perhitungan kimia yang menghubungkan massa zat, jumlah partikel, volume gas, dan molaritas larutan menggunakan konsep mol.',
    keyPoints: [
      '1 mol zat setara dengan 6.02 × 10^23 partikel (Bilangan Avogadro).',
      'Mol (n) = Massa (gram) / Mr.',
      'Pada keadaan STP (0°C, 1 atm), 1 mol gas ideal bervolume 22.4 liter.',
      'Molaritas (M) adalah jumlah mol zat terlarut dalam 1 liter larutan (M = n / V).'
    ],
    conceptExplanation: 'Mol adalah jembatan penghubung dalam kimia antara dunia mikroskopis (atom/molekul) dan makroskopis (gram/liter).',
    quickTips: [
      'Selalu samakan satuan volume ke Liter dan massa ke gram sebelum menghitung mol.'
    ]
  }
];
