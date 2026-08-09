import { Question } from '../types';

export const matematikaQuestions: Question[] = [
  {
    id: 'mq-1',
    subjectId: 'matematika',
    topicTag: 'Operasi Dasar',
    difficulty: 'Mudah',
    question: 'Hasil dari 125 + 75 - 50 adalah...',
    options: [
      { id: 'A', text: '140' },
      { id: 'B', text: '150' },
      { id: 'C', text: '160' },
      { id: 'D', text: '175' }
    ],
    correctAnswer: 'B',
    explanation: '125 + 75 = 200. Kemudian 200 - 50 = 150.'
  },
  {
    id: 'mq-2',
    subjectId: 'matematika',
    topicTag: 'Perkalian & Pembagian',
    difficulty: 'Mudah',
    question: 'Berapakah hasil dari 14 × 8 dibagi 4?',
    options: [
      { id: 'A', text: '24' },
      { id: 'B', text: '28' },
      { id: 'C', text: '32' },
      { id: 'D', text: '56' }
    ],
    correctAnswer: 'B',
    explanation: '14 × 8 = 112. Lalu 112 ÷ 4 = 28.'
  },
  {
    id: 'mq-3',
    subjectId: 'matematika',
    topicTag: 'Pecahan Sederhana',
    difficulty: 'Mudah',
    question: 'Bentuk paling sederhana dari pecahan 24/36 adalah...',
    options: [
      { id: 'A', text: '2/3' },
      { id: 'B', text: '3/4' },
      { id: 'C', text: '4/5' },
      { id: 'D', text: '5/6' }
    ],
    correctAnswer: 'A',
    explanation: 'Pembilang dan penyebut dibagi FPB yaitu 12. 24 ÷ 12 = 2, dan 36 ÷ 12 = 3. Jadi 2/3.'
  },
  {
    id: 'mq-4',
    subjectId: 'matematika',
    topicTag: 'Aljabar Dasar',
    difficulty: 'Mudah',
    question: 'Jika 3x + 5 = 20, maka nilai x adalah...',
    options: [
      { id: 'A', text: '3' },
      { id: 'B', text: '4' },
      { id: 'C', text: '5' },
      { id: 'D', text: '6' }
    ],
    correctAnswer: 'C',
    explanation: '3x = 20 - 5 => 3x = 15 => x = 15 / 3 = 5.'
  },
  {
    id: 'mq-5',
    subjectId: 'matematika',
    topicTag: 'Geometri Persegi Panjang',
    difficulty: 'Mudah',
    question: 'Sebuah persegi panjang memiliki panjang 12 cm dan lebar 5 cm. Luas persegi panjang tersebut adalah...',
    options: [
      { id: 'A', text: '34 cm²' },
      { id: 'B', text: '50 cm²' },
      { id: 'C', text: '60 cm²' },
      { id: 'D', text: '120 cm²' }
    ],
    correctAnswer: 'C',
    explanation: 'Luas = panjang × lebar = 12 × 5 = 60 cm².'
  },
  {
    id: 'mq-6',
    subjectId: 'matematika',
    topicTag: 'Persentase',
    difficulty: 'Mudah',
    question: 'Berapakah 25% dari 200?',
    options: [
      { id: 'A', text: '25' },
      { id: 'B', text: '40' },
      { id: 'C', text: '50' },
      { id: 'D', text: '75' }
    ],
    correctAnswer: 'C',
    explanation: '25% dari 200 = (25 / 100) × 200 = 50.'
  },
  {
    id: 'mq-7',
    subjectId: 'matematika',
    topicTag: 'Bilangan Bulat Negatif',
    difficulty: 'Mudah',
    question: 'Hasil dari -15 + 28 - (-7) adalah...',
    options: [
      { id: 'A', text: '6' },
      { id: 'B', text: '20' },
      { id: 'C', text: '25' },
      { id: 'D', text: '36' }
    ],
    correctAnswer: 'B',
    explanation: '-15 + 28 = 13. Kemudian 13 - (-7) = 13 + 7 = 20.'
  },
  {
    id: 'mq-8',
    subjectId: 'matematika',
    topicTag: 'Statistika Rata-rata',
    difficulty: 'Mudah',
    question: 'Rata-rata (mean) dari data: 6, 8, 7, 9, 10 adalah...',
    options: [
      { id: 'A', text: '7' },
      { id: 'B', text: '8' },
      { id: 'C', text: '8.5' },
      { id: 'D', text: '9' }
    ],
    correctAnswer: 'B',
    explanation: 'Jumlah data = 6 + 8 + 7 + 9 + 10 = 40. Banyak data = 5. Rata-rata = 40 / 5 = 8.'
  },
  {
    id: 'mq-9',
    subjectId: 'matematika',
    topicTag: 'Keliling Lingkaran',
    difficulty: 'Mudah',
    question: 'Keliling sebuah lingkaran dengan jari-jari (r) 7 cm adalah... (π = 22/7)',
    options: [
      { id: 'A', text: '22 cm' },
      { id: 'B', text: '44 cm' },
      { id: 'C', text: '88 cm' },
      { id: 'D', text: '154 cm' }
    ],
    correctAnswer: 'B',
    explanation: 'Keliling = 2 × π × r = 2 × (22/7) × 7 = 44 cm.'
  },
  {
    id: 'mq-10',
    subjectId: 'matematika',
    topicTag: 'Pangkat dan Akar',
    difficulty: 'Mudah',
    question: 'Nilai dari √144 + 5² adalah...',
    options: [
      { id: 'A', text: '37' },
      { id: 'B', text: '39' },
      { id: 'C', text: '41' },
      { id: 'D', text: '43' }
    ],
    correctAnswer: 'A',
    explanation: '√144 = 12 dan 5² = 25. Maka 12 + 25 = 37.'
  },
  {
    id: 'mq-11',
    subjectId: 'matematika',
    topicTag: 'FPB dan KPK',
    difficulty: 'Mudah',
    question: 'KPK (Kelipatan Persekutuan Terkecil) dari 12 dan 18 adalah...',
    options: [
      { id: 'A', text: '24' },
      { id: 'B', text: '36' },
      { id: 'C', text: '48' },
      { id: 'D', text: '72' }
    ],
    correctAnswer: 'B',
    explanation: 'Kelipatan 12: 12, 24, 36, 48... Kelipatan 18: 18, 36, 54... KPK terkecil yang sama adalah 36.'
  },
  {
    id: 'mq-12',
    subjectId: 'matematika',
    topicTag: 'FPB dan KPK',
    difficulty: 'Mudah',
    question: 'FPB (Faktor Persekutuan Terbesar) dari 24 dan 32 adalah...',
    options: [
      { id: 'A', text: '4' },
      { id: 'B', text: '6' },
      { id: 'C', text: '8' },
      { id: 'D', text: '12' }
    ],
    correctAnswer: 'C',
    explanation: 'Faktor 24: 1, 2, 3, 4, 6, 8, 12, 24. Faktor 32: 1, 2, 4, 8, 16, 32. FPB terbesar yang sama adalah 8.'
  },
  {
    id: 'mq-13',
    subjectId: 'matematika',
    topicTag: 'Penjumlahan Pecahan',
    difficulty: 'Mudah',
    question: 'Hasil dari 1/2 + 1/4 adalah...',
    options: [
      { id: 'A', text: '2/6' },
      { id: 'B', text: '3/4' },
      { id: 'C', text: '2/4' },
      { id: 'D', text: '1/8' }
    ],
    correctAnswer: 'B',
    explanation: 'Samakan penyebut: 1/2 = 2/4. Maka 2/4 + 1/4 = 3/4.'
  },
  {
    id: 'mq-14',
    subjectId: 'matematika',
    topicTag: 'Perkalian Pecahan',
    difficulty: 'Mudah',
    question: 'Hasil dari 2/3 × 3/5 adalah...',
    options: [
      { id: 'A', text: '2/5' },
      { id: 'B', text: '5/8' },
      { id: 'C', text: '6/15' },
      { id: 'D', text: '3/5' }
    ],
    correctAnswer: 'A',
    explanation: '(2 × 3) / (3 × 5) = 6/15 = 2/5 (disederhanakan bagi 3).'
  },
  {
    id: 'mq-15',
    subjectId: 'matematika',
    topicTag: 'Operasi Desimal',
    difficulty: 'Mudah',
    question: 'Hasil dari 0.75 + 1.5 - 0.25 adalah...',
    options: [
      { id: 'A', text: '1.75' },
      { id: 'B', text: '2.00' },
      { id: 'C', text: '2.25' },
      { id: 'D', text: '2.50' }
    ],
    correctAnswer: 'B',
    explanation: '0.75 + 1.5 = 2.25. Kemudian 2.25 - 0.25 = 2.00.'
  },
  {
    id: 'mq-16',
    subjectId: 'matematika',
    topicTag: 'Perbandingan Senilai',
    difficulty: 'Mudah',
    question: 'Harga 3 buah buku adalah Rp15.000. Berapakah harga 5 buah buku yang sama?',
    options: [
      { id: 'A', text: 'Rp20.000' },
      { id: 'B', text: 'Rp22.500' },
      { id: 'C', text: 'Rp25.000' },
      { id: 'D', text: 'Rp30.000' }
    ],
    correctAnswer: 'C',
    explanation: 'Harga 1 buku = Rp15.000 / 3 = Rp5.000. Harga 5 buku = 5 × Rp5.000 = Rp25.000.'
  },
  {
    id: 'mq-17',
    subjectId: 'matematika',
    topicTag: 'Aljabar Sederhana',
    difficulty: 'Mudah',
    question: 'Bentuk sederhana dari 4a + 3b - 2a + 5b adalah...',
    options: [
      { id: 'A', text: '2a + 8b' },
      { id: 'B', text: '6a + 8b' },
      { id: 'C', text: '2a + 2b' },
      { id: 'D', text: '7ab' }
    ],
    correctAnswer: 'A',
    explanation: 'Kelompokkan suku sejenis: (4a - 2a) + (3b + 5b) = 2a + 8b.'
  },
  {
    id: 'mq-18',
    subjectId: 'matematika',
    topicTag: 'Keliling Persegi',
    difficulty: 'Mudah',
    question: 'Sebuah persegi memiliki panjang sisi 9 cm. Keliling persegi tersebut adalah...',
    options: [
      { id: 'A', text: '18 cm' },
      { id: 'B', text: '27 cm' },
      { id: 'C', text: '36 cm' },
      { id: 'D', text: '81 cm' }
    ],
    correctAnswer: 'C',
    explanation: 'Keliling persegi = 4 × sisi = 4 × 9 = 36 cm.'
  },
  {
    id: 'mq-19',
    subjectId: 'matematika',
    topicTag: 'Luas Segitiga',
    difficulty: 'Mudah',
    question: 'Sebuah segitiga memiliki alas 10 cm dan tinggi 6 cm. Luas segitiga tersebut adalah...',
    options: [
      { id: 'A', text: '16 cm²' },
      { id: 'B', text: '30 cm²' },
      { id: 'C', text: '60 cm²' },
      { id: 'D', text: '120 cm²' }
    ],
    correctAnswer: 'B',
    explanation: 'Luas segitiga = (alas × tinggi) / 2 = (10 × 6) / 2 = 60 / 2 = 30 cm².'
  },
  {
    id: 'mq-20',
    subjectId: 'matematika',
    topicTag: 'Statistika Modus',
    difficulty: 'Mudah',
    question: 'Modus dari data nilai siswa: 7, 6, 8, 7, 9, 7, 8, 6, 7 adalah...',
    options: [
      { id: 'A', text: '6' },
      { id: 'B', text: '7' },
      { id: 'C', text: '8' },
      { id: 'D', text: '9' }
    ],
    correctAnswer: 'B',
    explanation: 'Angka 7 muncul paling sering (sebanyak 4 kali), sehingga modusnya adalah 7.'
  },
  {
    id: 'mq-21',
    subjectId: 'matematika',
    topicTag: 'Statistika Median',
    difficulty: 'Mudah',
    question: 'Median dari data terurut: 4, 5, 7, 8, 10, 11, 12 adalah...',
    options: [
      { id: 'A', text: '7' },
      { id: 'B', text: '8' },
      { id: 'C', text: '9' },
      { id: 'D', text: '10' }
    ],
    correctAnswer: 'B',
    explanation: 'Banyak data n = 7 (ganjil). Nilai tengah berada di posisi ke-4, yaitu 8.'
  },
  {
    id: 'mq-22',
    subjectId: 'matematika',
    topicTag: 'Kecepatan & Waktu',
    difficulty: 'Mudah',
    question: 'Sebuah mobil melaju dengan kecepatan rata-rata 60 km/jam selama 2,5 jam. Berapakah jarak yang ditempuh?',
    options: [
      { id: 'A', text: '120 km' },
      { id: 'B', text: '140 km' },
      { id: 'C', text: '150 km' },
      { id: 'D', text: '180 km' }
    ],
    correctAnswer: 'C',
    explanation: 'Jarak = Kecepatan × Waktu = 60 × 2.5 = 150 km.'
  },
  {
    id: 'mq-23',
    subjectId: 'matematika',
    topicTag: 'Sudut Bangun',
    difficulty: 'Mudah',
    question: 'Jumlah besar ketiga sudut pada setiap segitiga adalah...',
    options: [
      { id: 'A', text: '90°' },
      { id: 'B', text: '180°' },
      { id: 'C', text: '270°' },
      { id: 'D', text: '360°' }
    ],
    correctAnswer: 'B',
    explanation: 'Jumlah total besar sudut dalam sebuah segitiga selalu 180°.'
  },
  {
    id: 'mq-24',
    subjectId: 'matematika',
    topicTag: 'Konversi Satuan',
    difficulty: 'Mudah',
    question: '2,5 kilogram sama dengan berapa gram?',
    options: [
      { id: 'A', text: '25 gram' },
      { id: 'B', text: '250 gram' },
      { id: 'C', text: '2.500 gram' },
      { id: 'D', text: '25.000 gram' }
    ],
    correctAnswer: 'C',
    explanation: '1 kg = 1.000 gram. Maka 2,5 kg = 2,5 × 1.000 = 2.500 gram.'
  },
  {
    id: 'mq-25',
    subjectId: 'matematika',
    topicTag: 'Perbandingan Rasio',
    difficulty: 'Mudah',
    question: 'Perbandingan banyak kelereng Amir dan Budi adalah 3 : 5. Jika kelereng Amir ada 15 butir, berapa banyak kelereng Budi?',
    options: [
      { id: 'A', text: '20 butir' },
      { id: 'B', text: '25 butir' },
      { id: 'C', text: '30 butir' },
      { id: 'D', text: '35 butir' }
    ],
    correctAnswer: 'B',
    explanation: 'Kelereng Budi = (5 / 3) × 15 = 5 × 5 = 25 butir.'
  },
  {
    id: 'mq-26',
    subjectId: 'matematika',
    topicTag: 'Diskon & Potongan Harga',
    difficulty: 'Mudah',
    question: 'Sebuah baju seharga Rp100.000 mendapat diskon 20%. Berapa uang yang harus dibayar pembeli?',
    options: [
      { id: 'A', text: 'Rp70.000' },
      { id: 'B', text: 'Rp80.000' },
      { id: 'C', text: 'Rp85.000' },
      { id: 'D', text: 'Rp90.000' }
    ],
    correctAnswer: 'B',
    explanation: 'Potongan diskon = 20% × 100.000 = Rp20.000. Total bayar = 100.000 - 20.000 = Rp80.000.'
  },
  {
    id: 'mq-27',
    subjectId: 'matematika',
    topicTag: 'Volume Kubus',
    difficulty: 'Mudah',
    question: 'Volume sebuah kubus dengan panjang rusuk 4 cm adalah...',
    options: [
      { id: 'A', text: '16 cm³' },
      { id: 'B', text: '24 cm³' },
      { id: 'C', text: '64 cm³' },
      { id: 'D', text: '96 cm³' }
    ],
    correctAnswer: 'C',
    explanation: 'Volume kubus = rusuk × rusuk × rusuk (s³) = 4 × 4 × 4 = 64 cm³.'
  },
  {
    id: 'mq-28',
    subjectId: 'matematika',
    topicTag: 'Operasi Campuran',
    difficulty: 'Mudah',
    question: 'Hasil dari 50 - 10 × 3 + 15 adalah...',
    options: [
      { id: 'A', text: '35' },
      { id: 'B', text: '45' },
      { id: 'C', text: '135' },
      { id: 'D', text: '15' }
    ],
    correctAnswer: 'A',
    explanation: 'Dahulukan perkalian: 10 × 3 = 30. Lalu 50 - 30 + 15 = 20 + 15 = 35.'
  },
  {
    id: 'mq-29',
    subjectId: 'matematika',
    topicTag: 'Pecahan ke Persen',
    difficulty: 'Mudah',
    question: 'Pecahan 3/5 jika diubah ke bentuk persen adalah...',
    options: [
      { id: 'A', text: '30%' },
      { id: 'B', text: '50%' },
      { id: 'C', text: '60%' },
      { id: 'D', text: '75%' }
    ],
    correctAnswer: 'C',
    explanation: '(3 / 5) × 100% = 3 × 20% = 60%.'
  },
  {
    id: 'mq-30',
    subjectId: 'matematika',
    topicTag: 'Aritmatika Sosial Dasar',
    difficulty: 'Mudah',
    question: 'Pak Joko membeli barang seharga Rp50.000 lalu menjualnya seharga Rp65.000. Berapakah keuntungan Pak Joko?',
    options: [
      { id: 'A', text: 'Rp10.000' },
      { id: 'B', text: 'Rp15.000' },
      { id: 'C', text: 'Rp20.000' },
      { id: 'D', text: 'Rp25.000' }
    ],
    correctAnswer: 'B',
    explanation: 'Untung = Harga Jual - Harga Beli = Rp65.000 - Rp50.000 = Rp15.000.'
  }
];
