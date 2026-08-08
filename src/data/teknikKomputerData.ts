import { Topic } from '../types';

export const teknikKomputerTopics: Topic[] = [
  {
    id: 'tk-1',
    title: 'Arsitektur Komputer, Gerbang Logika & Sistem Bilangan',
    subheader: 'Struktur Von Neumann, CPU registers, logika Boolean, dan konversi basis biner/heksadesimal',
    estimatedReadTime: '9 menit',
    summary: 'Mempelajari organisasi komponen CPU (ALU, CU, Register, Cache L1/L2/L3), siklus Fetch-Decode-Execute, hukum logika De Morgan pada gerbang logika digital, serta konversi bilangan Biner, Desimal, dan Heksadesimal.',
    keyConcepts: [
      {
        title: 'Siklus Instruksi CPU (Fetch, Decode, Execute)',
        explanation: '1. Fetch: Mengambil instruksi dari RAM ke Instruction Register via Program Counter (PC). 2. Decode: Control Unit (CU) menerjemahkan kode operasi (Opcode). 3. Execute: Arithmetic Logic Unit (ALU) memproses perhitungan dan menyimpan output ke memori/register.',
        formulaOrKey: 'PC → MAR → MDR → IR → CU/ALU → Akumulator'
      },
      {
        title: 'Gerbang Logika Universal (NAND & NOR)',
        explanation: 'Gerbang NAND dan NOR disebut universal gates karena kombinasi rangkaiannya dapat membentuk gerbang logika apa pun (AND, OR, NOT, XOR, XNOR). Sifat XOR: Output 1 hanya jika kedua input berbeda (0,1 atau 1,0).',
        formulaOrKey: 'XOR = A ⊕ B = A\'B + AB\' | NAND = (A · B)\''
      },
      {
        title: 'Konversi Bilangan Biner & Heksadesimal',
        explanation: 'Tiap 1 digit Heksadesimal (0-9, A=10, B=11, C=12, D=13, E=14, F=15) merepresentasikan tepat 4 bit Biner (nibble). Contoh: 0x2F = 0010 1111b.',
        formulaOrKey: '1 Hex digit = 4 Bits Biner | 2 Hex digits = 1 Byte (8 bits)'
      }
    ],
    stepByStepGuides: [
      {
        title: 'Konversi Bilangan Desimal ke Biner dan Heksadesimal',
        problem: 'Konversikan bilangan desimal 157₁₀ ke dalam bentuk Biner dan Heksadesimal.',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Bagi 157 dengan 16 untuk mencari Heksadesimal',
            calculationOrDetail: '157 ÷ 16 = 9 sisa 13. Angka 13 dalam heksadesimal diwakili huruf D. Hasil Heksadesimal = 9D₁₆.'
          },
          {
            stepNumber: 2,
            instruction: 'Konversi tiap digit heksadesimal ke 4 bit biner',
            calculationOrDetail: 'Digit 9 = 1001₂. Digit D (13) = 1101₂.'
          },
          {
            stepNumber: 3,
            instruction: 'Gabungkan bit-bit biner menjadi satu byte',
            calculationOrDetail: '157₁₀ = 10011101₂ (128 + 16 + 8 + 4 + 1 = 157).'
          }
        ],
        solution: 'Biner = 10011101₂ dan Heksadesimal = 9D₁₆ (atau 0x9D).',
        tip: 'Konversi ke heksadesimal terlebih dahulu seringkali jauh lebih cepat daripada membagi dua berulang-ulang 8 kali!'
      }
    ],
    practicalExamples: [
      {
        title: 'Kode Warna Web Hexadecimal (RGB)',
        context: 'Format warna CSS #FF8000.',
        solution: 'FF₁₆ = 255 (Red maksimal), 80₁₆ = 128 (Green separuh), 00₁₆ = 0 (Blue kosong), menghasilkan warna oranye cerah.',
        takeaway: 'Heksadesimal adalah cara manusia membaca bit-bit byte biner komputer dengan ringkas.'
      }
    ],
    quickTips: [
      'Bobot nilai biner 8 bit: 128 - 64 - 32 - 16 - 8 - 4 - 2 - 1.',
      'SRAM lebih cepat dan mahal (dipakai untuk CPU Cache); DRAM lebih lambat dan butuh refresh berkala (dipakai untuk RAM utama).',
      'XOR gate menghasilkan logika 1 jika jumlah bit bernilai 1 adalah ganjil (Parity Generator).'
    ],
    quickCheck: [
      {
        id: 'qc-tk1',
        question: 'Nilai desimal dari bilangan biner 8-bit 11000110 adalah...',
        options: ['182', '198', '214', '226'],
        correctIndex: 1,
        explanation: '128 + 64 + 0 + 0 + 0 + 4 + 2 + 0 = 198.'
      }
    ]
  },
  {
    id: 'tk-2',
    title: 'Jaringan Komputer, Model OSI & Perhitungan Subnetting IPv4',
    subheader: '7 Layer OSI, TCP vs UDP, CIDR Subnetting (/24 - /30), dan protokol internet',
    estimatedReadTime: '10 menit',
    summary: 'Materi yang paling sering keluar di ujian teknik komputer: 7 Lapisan OSI vs 4 Layer TCP/IP, perbedaan protokol TCP (Connection-oriented) vs UDP (Connectionless), perhitungan cepat Subnet Mask, Network ID, Broadcast ID, dan Host Range.',
    keyConcepts: [
      {
        title: '7 Layer OSI (Physical hingga Application)',
        explanation: '1. Physical (Kabel, Bit), 2. Data Link (Frame, MAC Address, Switch), 3. Network (Packet, IP Address, Router), 4. Transport (Segment, TCP/UDP Port), 5. Session, 6. Presentation (Enkripsi, Kompresi), 7. Application (HTTP, DNS, SSH).',
        formulaOrKey: 'Jembatan Keledai: Please Do Not Throw Sausage Pizza Away'
      },
      {
        title: 'Rumus Cepat Subnetting IPv4 (CIDR /24 - /30)',
        explanation: 'Prefix /n menyisakan host bit h = 32 - n. Jumlah Total IP = 2^h. Jumlah Host Valid yang bisa dipakai = 2^h - 2 (dikurangi 1 Network ID dan 1 Broadcast ID). Subnet Mask = 256 - 2^h pada oktet terakhir.',
        formulaOrKey: 'Total IP = 2^(32 - prefix) ; Usable Host = 2^(32 - prefix) - 2'
      },
      {
        title: 'TCP vs UDP',
        explanation: 'TCP (Transmission Control Protocol) memakai 3-Way Handshake (SYN, SYN-ACK, ACK), menjamin urutan paket dan error recovery (contoh: HTTP, HTTPS, FTP). UDP tanpa jaminan koneksi, sangat cepat untuk streaming video dan game real-time (contoh: DNS query, VoIP, Live Video).',
        formulaOrKey: 'TCP = Reliable & Ordered | UDP = Low-latency & Datagram'
      }
    ],
    stepByStepGuides: [
      {
        title: 'Menghitung Network, Broadcast, dan Host Valid pada IP 192.168.10.75/26',
        problem: 'Diberikan alamat IP 192.168.10.75 dengan prefix /26. Tentukan Subnet Mask, Network ID, Broadcast ID, dan rentang host yang dapat digunakan.',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Hitung jumlah bit host dan ukuran blok (block size)',
            calculationOrDetail: 'Prefix /26 menyisakan h = 32 - 26 = 6 bit host. Ukuran blok = 2⁶ = 64 IP per subnet. Subnet mask = 256 - 64 = 255.255.255.192.'
          },
          {
            stepNumber: 2,
            instruction: 'Tentukan kelipatan blok di mana IP 75 berada',
            calculationOrDetail: 'Blok subnet oktet ke-4: Subnet 0 (0-63), Subnet 1 (64-127), Subnet 2 (128-191). IP 75 berada pada rentang 64 - 127.'
          },
          {
            stepNumber: 3,
            instruction: 'Identifikasi Network ID, Broadcast ID, dan Usable Host',
            calculationOrDetail: 'Network ID = 192.168.10.64. Broadcast ID = 192.168.10.127. Host Valid = 192.168.10.65 sampai 192.168.10.126 (total 62 host).'
          }
        ],
        solution: 'Network: 192.168.10.64, Broadcast: 192.168.10.127, Rentang Host: 192.168.10.65 - 192.168.10.126.',
        tip: 'Ukuran blok = 256 - angka terakhir subnet mask. Nilai IP selalu berada di antara kelipatan blok tersebut.'
      }
    ],
    practicalExamples: [
      {
        title: 'Koneksi Point-to-Point Antar Router',
        context: 'Menghubungkan dua port router tetangga tanpa membuang IP publik berharga.',
        solution: 'Gunakan prefix /30 (menyediakan 4 IP: 1 Network, 2 Usable Host untuk kedua router, dan 1 Broadcast).',
        takeaway: 'Prefix /30 adalah standar efisiensi tertinggi untuk link P2P IPv4.'
      }
    ],
    quickTips: [
      'CIDR /24 = 254 host, /25 = 126 host, /26 = 62 host, /27 = 30 host, /28 = 14 host, /29 = 6 host, /30 = 2 host.',
      'Port protokol terkenal: HTTP (80), HTTPS (443), DNS (53), SSH (22), FTP (21), DHCP (67/68).',
      'Router bekerja di Layer 3 (Network); Switch bekerja di Layer 2 (Data Link); Hub bekerja di Layer 1 (Physical).'
    ],
    quickCheck: [
      {
        id: 'qc-tk2',
        question: 'Berapa banyak host valid yang dapat digunakan pada jaringan dengan subnet mask /28?',
        options: ['6 host', '14 host', '30 host', '62 host'],
        correctIndex: 1,
        explanation: '32 - 28 = 4 bit host. Usable host = 2⁴ - 2 = 16 - 2 = 14 host.'
      }
    ]
  },
  {
    id: 'tk-3',
    title: 'Sistem Operasi, Penjadwalan CPU & Manajemen Memori',
    subheader: 'Proses vs Thread, algoritma Round Robin/FCFS/SJF, Virtual Memory & Paging',
    estimatedReadTime: '8 menit',
    summary: 'Membahas state siklus proses (New, Ready, Running, Waiting, Terminated), algoritma penjadwalan CPU (FCFS, Shortest Job First, Round Robin time quantum), kondisi Deadlock (4 syarat Coffman), serta Virtual Memory, Paging, dan Page Replacement (FIFO, LRU).',
    keyConcepts: [
      {
        title: '4 Syarat Utama Terjadinya Deadlock (Coffman Conditions)',
        explanation: 'Deadlock terjadi HANYA jika keempat syarat terpenuhi secara simultan: 1. Mutual Exclusion (resource non-shareable), 2. Hold and Wait, 3. No Preemption, 4. Circular Wait.',
        formulaOrKey: 'Deadlock = Mutual Exclusion + Hold&Wait + No Preemption + Circular Wait'
      },
      {
        title: 'Algoritma Penjadwalan CPU',
        explanation: 'FCFS (First Come First Served), SJF (Shortest Job First - optimal meminimalkan average waiting time), Round Robin (preemptive dengan time quantum untuk mencegah proses monopoli CPU).',
        formulaOrKey: 'Average Waiting Time = (Σ Waktu Tunggu Proses) / Jumlah Proses'
      },
      {
        title: 'Manajemen Virtual Memory & Paging',
        explanation: 'Paging membagi memori fisik menjadi Frame berukuran tetap dan memori logis menjadi Page. Jika proses mengakses page yang belum dimuat di RAM, terjadi Page Fault dan OS mengambilnya dari secondary storage (swap).',
        formulaOrKey: 'Alamat Logis = Page Number (p) + Offset (d)'
      }
    ],
    stepByStepGuides: [
      {
        title: 'Menghitung Waktu Tunggu Rata-rata pada Penjadwalan SJF Non-preemptive',
        problem: 'Proses P1 (Burst Time 6 ms), P2 (Burst Time 2 ms), P3 (Burst Time 8 ms), dan P4 (Burst Time 3 ms) tiba bersamaan pada waktu t=0. Hitung rata-rata waktu tunggu (Average Waiting Time).',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Urutkan proses berdasarkan burst time terpendek (SJF)',
            calculationOrDetail: 'Urutan eksekusi: P2 (2 ms) → P4 (3 ms) → P1 (6 ms) → P3 (8 ms).'
          },
          {
            stepNumber: 2,
            instruction: 'Hitung waktu tunggu masing-masing proses',
            calculationOrDetail: 'Waktu tunggu P2 = 0 ms. Waktu tunggu P4 = 2 ms. Waktu tunggu P1 = 2 + 3 = 5 ms. Waktu tunggu P3 = 2 + 3 + 6 = 11 ms.'
          },
          {
            stepNumber: 3,
            instruction: 'Hitung rata-rata waktu tunggu seluruh proses',
            calculationOrDetail: 'Rata-rata = (0 + 2 + 5 + 11) / 4 = 18 / 4 = 4.5 ms.'
          }
        ],
        solution: 'Average Waiting Time adalah 4.5 ms.',
        tip: 'SJF selalu memberikan rata-rata waktu tunggu terkecil dibanding algoritma penjadwalan lainnya.'
      }
    ],
    practicalExamples: [
      {
        title: 'Thrashing pada Sistem Operasi yang Kekurangan RAM',
        context: 'Laptop membuka 50 tab browser berat hingga sistem macet total.',
        solution: 'Terjadi "Thrashing" di mana OS menghabiskan lebih dari 90% waktu CPU hanya untuk swap in/out page antara RAM dan disk ketimbang mengeksekusi instruksi aplikasi nyata.',
        takeaway: 'Thrashing diatasi dengan menambah kapasitas RAM fisik atau membatasi derajat multiprogramming.'
      }
    ],
    quickTips: [
      'Thread berbagi address space memori yang sama dalam satu proses (ringan / lightweight process).',
      'LRU (Least Recently Used) mengganti halaman memori yang paling lama tidak diakses.',
      'Semaphore dan Mutex digunakan untuk mencegah Race Condition pada Critical Section.'
    ],
    quickCheck: [
      {
        id: 'qc-tk3',
        question: 'Manakah dari syarat berikut yang BUKAN merupakan salah satu dari 4 syarat Coffman terjadinya Deadlock?',
        options: ['Mutual Exclusion', 'Hold and Wait', 'Arbitrary Preemption', 'Circular Wait'],
        correctIndex: 2,
        explanation: 'Syarat Coffman adalah "No Preemption" (sumber daya tidak boleh dirampas paksa). Jika ada arbitrary preemption, deadlock tidak akan terjadi.'
      }
    ]
  },
  {
    id: 'tk-4',
    title: 'Algoritma, Struktur Data & Query Basis Data SQL',
    subheader: 'Big-O notation, Stack, Queue, Binary Search Tree, relasi tabel & SQL Join',
    estimatedReadTime: '9 menit',
    summary: 'Mempelajari kompleksitas waktu algoritma (O(1), O(log n), O(n), O(n log n)), struktur data linear (Stack LIFO, Queue FIFO, Linked List) vs non-linear (Tree, Graph), normalisasi database (1NF, 2NF, 3NF), serta penulisan query SQL (SELECT, JOIN, GROUP BY, HAVING).',
    keyConcepts: [
      {
        title: 'Kompleksitas Algoritma (Big-O Notation)',
        explanation: 'O(1): Akses index array / Hash table lookup. O(log n): Binary Search pada data terurut. O(n): Linear search traversal. O(n log n): Merge Sort & Quick Sort rata-rata. O(n²): Bubble Sort / nested loop.',
        formulaOrKey: 'Urutan Efisiensi: O(1) < O(log n) < O(n) < O(n log n) < O(n²)'
      },
      {
        title: 'Stack (LIFO) vs Queue (FIFO)',
        explanation: 'Stack (Last In First Out) operasi Push dan Pop (contoh: tombol Undo/Redo, Call Stack fungsi rekursif). Queue (First In First Out) operasi Enqueue dan Dequeue (contoh: antrean cetak printer, buffer pesan Kafka).',
        formulaOrKey: 'Stack: LIFO (Tumpukan) | Queue: FIFO (Antrean)'
      },
      {
        title: 'SQL Join & Klausa GROUP BY / HAVING',
        explanation: 'INNER JOIN (hanya baris yang cocok di kedua tabel), LEFT JOIN (semua baris tabel kiri + data cocok tabel kanan). Klausa WHERE menyaring baris individual sebelum pengelompokan; HAVING menyaring hasil fungsi agregat (COUNT, SUM, AVG) setelah GROUP BY.',
        formulaOrKey: 'WHERE = Filter baris awal | HAVING = Filter agregat GROUP BY'
      }
    ],
    stepByStepGuides: [
      {
        title: 'Analisis Output Query SQL dengan Klausa HAVING',
        problem: 'Diberikan tabel `pesanan` (id, pelanggan_id, total_belanja). Apa fungsi dari query: `SELECT pelanggan_id, COUNT(*) FROM pesanan GROUP BY pelanggan_id HAVING COUNT(*) >= 5;`?',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Pahami fungsi GROUP BY',
            calculationOrDetail: 'GROUP BY pelanggan_id mengelompokkan baris transaksi berdasarkan masing-masing pelanggan.'
          },
          {
            stepNumber: 2,
            instruction: 'Pahami fungsi agregasi COUNT(*)',
            calculationOrDetail: 'COUNT(*) menghitung frekuensi jumlah transaksi pesanan per pelanggan.'
          },
          {
            stepNumber: 3,
            instruction: 'Pahami filter HAVING COUNT(*) >= 5',
            calculationOrDetail: 'HAVING menyaring grup sehingga hanya menampilkan pelanggan yang memiliki total transaksi 5 kali atau lebih.'
          }
        ],
        solution: 'Query menampilkan ID pelanggan yang telah melakukan transaksi pesanan minimal 5 kali beserta jumlah pesanannya.',
        tip: 'Jangan pernah meletakkan fungsi agregat (seperti COUNT atau SUM) di dalam klausa WHERE; selalu gunakan klausa HAVING setelah GROUP BY.'
      }
    ],
    practicalExamples: [
      {
        title: 'Pencarian Binary Search pada Array 1 Juta Elemen',
        context: 'Mencari satu kata pada kamus terurut 1.000.000 kata.',
        solution: 'Linear search butuh hingga 1.000.000 komparasi; Binary search (O(log₂ n)) hanya membutuhkan maksimal 20 kali perbandingan (2²⁰ ≈ 1.048.576).',
        takeaway: 'Struktur data terurut memungkinkan akselerasi pencarian eksponensial.'
      }
    ],
    quickTips: [
      'Struktur data Tree Traversal: In-Order (Kiri, Akar, Kanan), Pre-Order (Akar, Kiri, Kanan), Post-Order (Kiri, Kanan, Akar).',
      'Normalisasi 1NF: Tidak ada kolom multi-nilai (atomik); 2NF: Menghilangkan dependensi parsial terhadap Primary Key gabungan; 3NF: Menghilangkan dependensi transitif.',
      'Foreign Key memastikan Integritas Referensial antar dua tabel dalam database relasional.'
    ],
    quickCheck: [
      {
        id: 'qc-tk4',
        question: 'Struktur data manakah yang paling ideal untuk mengimplementasikan fitur tombol "Undo" pada aplikasi pengolah kata teks?',
        options: ['Queue (FIFO)', 'Stack (LIFO)', 'Binary Search Tree', 'Circular Linked List'],
        correctIndex: 1,
        explanation: 'Fitur "Undo" membutuhkan aksi terakhir yang diketik untuk dibatalkan pertama kali, yang merupakan karakteristik utama struktur data Stack (Last In, First Out).'
      }
    ]
  }
];

export const teknikKomputerCheatSheet = [
  {
    category: 'Subnetting IPv4 & Jaringan',
    items: [
      { label: 'Prefix /24', formula: 'Netmask: 255.255.255.0 → 254 Usable Hosts', note: 'Blok size: 256' },
      { label: 'Prefix /26', formula: 'Netmask: 255.255.255.192 → 62 Usable Hosts', note: 'Blok size: 64' },
      { label: 'Prefix /28', formula: 'Netmask: 255.255.255.240 → 14 Usable Hosts', note: 'Blok size: 16' },
      { label: 'Prefix /30', formula: 'Netmask: 255.255.255.252 → 2 Usable Hosts', note: 'P2P Link antar router' }
    ]
  },
  {
    category: 'Arsitektur & Konversi Biner Hex',
    items: [
      { label: '1 Digit Hex', formula: '4 Bit Biner (0x0 = 0000b hingga 0xF = 1111b)', note: '0xA=10, 0xB=11, 0xC=12, 0xD=13, 0xE=14, 0xF=15' },
      { label: 'XOR Gate', formula: 'Y = A ⊕ B (Bernilai 1 jika bit input berbeda)', note: '0⊕0=0, 0⊕1=1, 1⊕0=1, 1⊕1=0' },
      { label: 'De Morgan', formula: '(A · B)\' = A\' + B\' ; (A + B)\' = A\' · B\'', note: 'Penyederhanaan aljabar Boolean' }
    ]
  },
  {
    category: 'Sistem Operasi & Database',
    items: [
      { label: 'Syarat Deadlock', formula: 'Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait', note: '4 syarat Coffman' },
      { label: 'Kompleksitas Binary Search', formula: 'O(log n) pada array terurut', note: 'Jauh lebih cepat dari linear search O(n)' },
      { label: 'HAVING vs WHERE', formula: 'WHERE (sebelum group by) vs HAVING (sesudah group by untuk agregat)', note: 'HAVING COUNT(*) > 10' }
    ]
  }
];
