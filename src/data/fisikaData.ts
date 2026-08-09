import { Topic } from '../types';

export const fisikaTopics: Topic[] = [
  {
    id: 'fis-1',
    title: 'Kinematika Gerak Lurus',
    categoryTag: 'Mekanika',
    summary: 'Mempelajari gerak benda tanpa memperhitungkan penyebabnya, meliputi GLB, GLBB, dan gerak parabola.',
    keyPoints: [
      'GLB (Gerak Lurus Beraturan): Kecepatan konstan, percepatan nol (s = v * t).',
      'GLBB (Gerak Lurus Berubah Beraturan): Percepatan konstan (v = v0 + a*t).',
      'Gerak Vertikal: Memanfaatkan persamaan GLBB dengan percepatan gravitasi g.',
      'Grafik v-t: Luas di bawah kurva menyatakan perpindahan.'
    ],
    conceptExplanation: 'Dalam kehidupan sehari-hari, GLB dicontohkan mobil berjalan dengan kecepatan tetap di jalan tol, sedangkan GLBB dicontohkan mobil yang direm atau dipercepat saat lampu lalu lintas berubah.',
    stepByStepGuides: [
      {
        title: 'Menyelesaikan Soal GLBB',
        steps: [
          'Identifikasi besaran yang diketahui (v0, vt, s, a, t).',
          'Tentukan rumus GLBB yang paling sesuai tanpa variabel yang tidak diketahui.',
          'Substitusikan nilai dengan satuan SI (meter, sekon).'
        ],
        tips: 'Perhatikan tanda positif/negatif pada percepatan (dipercepat = +, diperlambat = -).'
      }
    ],
    formulas: [
      's = v0 * t + 1/2 * a * t^2',
      'vt^2 = v0^2 + 2 * a * s'
    ],
    formulaDetails: [
      {
        title: 'Persamaan Jarak Tempuh GLBB',
        formula: 's = v_0 t + \\frac{1}{2} a t^2',
        explanation: 'Menghitung posisi atau jarak yang ditempuh benda dengan percepatan konstan.',
        variables: [
          { symbol: 's', meaning: 'Jarak / Perpindahan (m)' },
          { symbol: 'v_0', meaning: 'Kecepatan awal (m/s)' },
          { symbol: 'a', meaning: 'Percepatan (m/s²)' },
          { symbol: 't', meaning: 'Waktu (s)' }
        ],
        quickTip: 'Jika benda mulai dari keadaan diam, maka v_0 = 0.'
      }
    ],
    examples: [
      {
        problem: 'Sebuah mobil melaju dengan kecepatan awal 10 m/s dipercepat tetap 2 m/s^2 selama 5 detik. Berapa jarak yang ditempuh?',
        given: 'v0 = 10 m/s, a = 2 m/s^2, t = 5 s',
        questionTarget: 'Jarak (s)',
        steps: [
          'Gunakan rumus s = v0 * t + 1/2 * a * t^2',
          's = (10 * 5) + 0.5 * 2 * (5^2)',
          's = 50 + 25 = 75 meter'
        ],
        solution: 'Jarak tempuh mobil adalah 75 meter.',
        tip: 'Periksa kembali kesesuaian satuan sebelum menghitung.'
      }
    ],
    quickTips: [
      'Hafalkan tiga rumus utama GLBB agar dapat memilih dengan cepat saat ujian.',
      'Konversikan km/jam ke m/s dengan membagi 3.6.'
    ]
  },
  {
    id: 'fis-2',
    title: 'Usaha, Energi, dan Daya',
    categoryTag: 'Energi & Usaha',
    summary: 'Kajian mengenai perpindahan energi mekanik melalui gaya, kekekalan energi, dan laju melakukan kerja.',
    keyPoints: [
      'Usaha (W) adalah hasil kali gaya dengan perpindahan searah gaya (W = F * s * cos θ).',
      'Energi Kinetik (Ek) bergantung pada massa dan kecepatan (Ek = 1/2 m v^2).',
      'Energi Potensial (Ep) bergantung pada posisi dan gravitasi (Ep = m g h).',
      'Hukum Kekekalan Energi Mekanik: Em1 = Em2 di medan konservatif.'
    ],
    conceptExplanation: 'Energi tidak dapat diciptakan atau dimusnahkan, melainkan hanya berubah bentuk dari energi potensial gravitasi menjadi energi kinetik saat benda jatuh.',
    quickTips: [
      'Ingat bahwa gaya yang tegak lurus dengan perpindahan melakukan usaha sebesar nol (cos 90° = 0).'
    ]
  }
];
