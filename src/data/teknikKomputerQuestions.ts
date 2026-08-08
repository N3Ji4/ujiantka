import { Question } from '../types';

export const teknikKomputerQuestions: Question[] = [
  {
    id: 'tk-q1',
    number: 1,
    subjectId: 'teknik-komputer',
    topicTag: 'Perangkat Keras (Hardware) PC',
    difficulty: 'Mudah',
    question: 'Komponen utama pada motherboard komputer yang berfungsi sebagai otak pemrosesan data dan mengeksekusi instruksi aritmatika serta logika adalah...',
    options: [
      { id: 'A', text: 'RAM (Random Access Memory)' },
      { id: 'B', text: 'CPU (Central Processing Unit)' },
      { id: 'C', text: 'Hard Disk Drive (HDD)' },
      { id: 'D', text: 'Power Supply Unit (PSU)' }
    ],
    correctAnswer: 'B',
    explanation: 'Central Processing Unit (CPU) sering disebut sebagai "otak" komputer karena bertugas memproses seluruh instruksi program melalui unit ALU (Arithmetic Logic Unit), CU (Control Unit), dan sekumpulan register internal. RAM adalah memori penyimpanan sementara yang bersifat volatile, HDD adalah media penyimpanan permanen berkapasitas besar, dan PSU menyuplai arus listrik DC ke seluruh komponen hardware.',
    keyConcept: 'Arsitektur dan Fungsi Utama Komponen Hardware Komputer',
    tkaExamTip: 'CPU = Otak pemrosesan instruksi; RAM = Memori kerja sementara; PSU = Sumber catu daya listrik.'
  },
  {
    id: 'tk-q2',
    number: 2,
    subjectId: 'teknik-komputer',
    topicTag: 'Perangkat Keras & Penyimpanan',
    difficulty: 'Mudah',
    question: 'Media penyimpanan data modern yang menggunakan teknologi Flash Memory berbasis chip NAND tanpa komponen mekanik bergerak (sehingga memiliki kecepatan baca/tulis jauh lebih tinggi daripada HDD konvensional) disebut...',
    options: [
      { id: 'A', text: 'Floppy Disk' },
      { id: 'B', text: 'SSD (Solid State Drive)' },
      { id: 'C', text: 'CD-ROM' },
      { id: 'D', text: 'Magnetic Tape' }
    ],
    correctAnswer: 'B',
    explanation: 'Solid State Drive (SSD) menggunakan chip memori flash semikonduktor tanpa piringan magnetik berputar seperti pada Hard Disk Drive (HDD). Keunggulan SSD meliputi kecepatan akses data yang sangat tinggi, tahan terhadap benturan fisik, tidak berisik, dan konsumsi daya listrik yang lebih hemat.',
    keyConcept: 'Perbandingan Teknologi Penyimpanan Data HDD vs SSD',
    tkaExamTip: 'SSD = Chip semikonduktor tanpa piringan mekanik (sangat cepat dan tahan guncangan).'
  },
  {
    id: 'tk-q3',
    number: 3,
    subjectId: 'teknik-komputer',
    topicTag: 'Perakitan & BIOS Komputer',
    difficulty: 'Mudah',
    question: 'Program tingkat rendah (low-level firmware) yang tertanam pada chip memori flash motherboard dan dijalankan pertama kali saat komputer dinyalakan untuk melakukan POST (Power-On Self Test) adalah...',
    options: [
      { id: 'A', text: 'Microsoft Windows' },
      { id: 'B', text: 'BIOS / UEFI' },
      { id: 'C', text: 'Microsoft Office' },
      { id: 'D', text: 'Linux Kernel' }
    ],
    correctAnswer: 'B',
    explanation: 'BIOS (Basic Input/Output System) atau penerusnya UEFI (Unified Extensible Firmware Interface) adalah firmware yang disimpan pada chip ROM/Flash di motherboard. Saat komputer dihidupkan, BIOS langsung melakukan uji mandiri perangkat keras (POST), mendeteksi RAM, keyboard, dan media boot, sebelum menyerahkan kendali sistem ke sistem operasi utama.',
    keyConcept: 'Fungsi BIOS/UEFI dan Proses Booting Komputer',
    tkaExamTip: 'POST (Power-On Self Test) dilakukan oleh BIOS sebelum sistem operasi dimuat ke RAM.'
  },
  {
    id: 'tk-q4',
    number: 4,
    subjectId: 'teknik-komputer',
    topicTag: 'Jaringan Komputer Dasar',
    difficulty: 'Mudah',
    question: 'Jenis kabel jaringan LAN yang paling banyak digunakan pada topologi star jaringan lokal (LAN) dengan susunan 8 pin warna-warni dan menggunakan konektor RJ-45 adalah...',
    options: [
      { id: 'A', text: 'Kabel Coaxial' },
      { id: 'B', text: 'Kabel UTP (Unshielded Twisted Pair)' },
      { id: 'C', text: 'Kabel Fiber Optik' },
      { id: 'D', text: 'Kabel Paralel Printer' },
    ],
    correctAnswer: 'B',
    explanation: 'Kabel UTP (Unshielded Twisted Pair) adalah standar kabel jaringan tembaga yang terdiri dari 4 pasang (8 buah) kawat tembaga saling berpilin tanpa pelindung logam tambahan. Kabel ini diakhiri dengan konektor RJ-45 dan menggunakan standar susunan kabel Straight-Through (untuk menghubungkan PC ke Switch/Hub) atau Crossover.',
    keyConcept: 'Pengkabelan Jaringan Lokal dan Konektor RJ-45',
    tkaExamTip: 'Kabel UTP + konektor RJ-45 adalah media fisik standar jaringan Ethernet LAN.'
  },
  {
    id: 'tk-q5',
    number: 5,
    subjectId: 'teknik-komputer',
    topicTag: 'Pengkabelan & Standar TIA/EIA',
    difficulty: 'Sedang',
    question: 'Dalam standar pengkabelan kabel UTP untuk jaringan Ethernet, susunan warna kabel standar TIA/EIA-568B dari pin 1 sampai pin 8 secara berurutan adalah...',
    options: [
      { id: 'A', text: 'Putih-Hijau, Hijau, Putih-Oranye, Biru, Putih-Biru, Oranye, Putih-Coklat, Coklat' },
      { id: 'B', text: 'Putih-Oranye, Oranye, Putih-Hijau, Biru, Putih-Biru, Hijau, Putih-Coklat, Coklat' },
      { id: 'C', text: 'Putih-Coklat, Coklat, Putih-Biru, Biru, Putih-Hijau, Hijau, Putih-Oranye, Oranye' },
      { id: 'D', text: 'Oranye, Putih-Oranye, Hijau, Putih-Hijau, Biru, Putih-Biru, Coklat, Putih-Coklat' }
    ],
    correctAnswer: 'B',
    explanation: 'Standar internasional TIA/EIA-568B yang paling sering digunakan dalam pemasangan jaringan komputer lokal memiliki urutan warna pin 1 s/d 8: 1. Putih-Oranye, 2. Oranye, 3. Putih-Hijau, 4. Biru, 5. Putih-Biru, 6. Hijau, 7. Putih-Coklat, 8. Coklat. Standar 568A menukar posisi hijau dan oranye.',
    keyConcept: 'Standar Warna Susunan Kabel UTP TIA/EIA-568B',
    tkaExamTip: 'Ingat urutan universal 568B: Putih-Oranye, Oranye, Putih-Hijau, Biru, Putih-Biru, Hijau, Putih-Coklat, Coklat.'
  },
  {
    id: 'tk-q6',
    number: 6,
    subjectId: 'teknik-komputer',
    topicTag: 'Alamat IP & Jaringan Dasar',
    difficulty: 'Mudah',
    question: 'Berdasarkan penggolongan kelas alamat IPv4 standar, alamat IP 192.168.10.1 berada pada...',
    options: [
      { id: 'A', text: 'Kelas A' },
      { id: 'B', text: 'Kelas B' },
      { id: 'C', text: 'Kelas C' },
      { id: 'D', text: 'Kelas D' }
    ],
    correctAnswer: 'C',
    explanation: 'Penggolongan kelas IPv4 berdasarkan oktet pertama:\n- Kelas A: 1 - 126 (Default subnet mask 255.0.0.0)\n- Kelas B: 128 - 191 (Default subnet mask 255.255.0.0)\n- Kelas C: 192 - 223 (Default subnet mask 255.255.255.0)\n- Kelas D: 224 - 239 (Multicast)\nKarena angka pertama adalah 192, maka IP tersebut termasuk dalam Kelas C.',
    keyConcept: 'Klasifikasi Alamat IPv4 Kelas A, B, dan C',
    tkaExamTip: 'Kelas C dimulai dari rentang 192 hingga 223 pada oktet pertama.'
  },
  {
    id: 'tk-q7',
    number: 7,
    subjectId: 'teknik-komputer',
    topicTag: 'Perangkat Jaringan Komputer',
    difficulty: 'Mudah',
    question: 'Perangkat keras jaringan yang berfungsi untuk meneruskan paket data antar dua segmen jaringan yang berbeda (misalnya menghubungkan jaringan lokal LAN ke internet) berdasarkan alamat lapisan jaringan (IP Address) adalah...',
    options: [
      { id: 'A', text: 'LAN Card (NIC)' },
      { id: 'B', text: 'Switch Hub' },
      { id: 'C', text: 'Router' },
      { id: 'D', text: 'Repeater' }
    ],
    correctAnswer: 'C',
    explanation: 'Router bekerja pada Layer 3 (Network Layer) model OSI dan bertugas melakukan routing (pemilihan jalur terbaik) untuk meneruskan paket data antar jaringan yang berbeda subnet atau menghubungkan jaringan lokal dengan WAN/Internet. Switch bekerja di Layer 2 (menggunakan MAC address dalam satu jaringan lokal).',
    keyConcept: 'Fungsi Perangkat Jaringan (Router vs Switch vs Hub)',
    tkaExamTip: 'Router menghubungkan jaringan berbeda (antar subnet/internet); Switch menghubungkan perangkat dalam satu subnet.'
  },
  {
    id: 'tk-q8',
    number: 8,
    subjectId: 'teknik-komputer',
    topicTag: 'Topologi Jaringan',
    difficulty: 'Mudah',
    question: 'Topologi jaringan komputer di mana setiap komputer terhubung langsung melalui kabel ke satu perangkat sentral (perangkat penghubung seperti Switch atau Hub) disebut...',
    options: [
      { id: 'A', text: 'Topologi Bus' },
      { id: 'B', text: 'Topologi Ring' },
      { id: 'C', text: 'Topologi Star (Bintang)' },
      { id: 'D', text: 'Topologi Mesh' }
    ],
    correctAnswer: 'C',
    explanation: 'Topologi Star (Bintang) adalah topologi yang paling populer dalam LAN modern, di mana setiap komputer node memiliki kabel tersendiri yang terhubung ke perangkat pusat (Central Switch/Hub). Kelebihannya adalah jika satu kabel putus, komputer lain tidak terganggu.',
    keyConcept: 'Karakteristik Topologi Jaringan Komputer (Star, Bus, Ring, Mesh)',
    tkaExamTip: 'Topologi Star menggunakan perangkat sentral (Switch) sebagai pusat kontrol koneksi.'
  },
  {
    id: 'tk-q9',
    number: 9,
    subjectId: 'teknik-komputer',
    topicTag: 'Troubleshooting & Perawatan PC',
    difficulty: 'Sedang',
    question: 'Saat komputer dihidupkan, layar monitor tidak menampilkan gambar apa pun, namun terdengar bunyi bip panjang sebanyak 1 kali diikuti 2 kali bip pendek dari speaker internal motherboard. Berdasarkan standar kode error BIOS (AMI/Award BIOS), masalah utama komponen hardware tersebut biasanya terletak pada...',
    options: [
      { id: 'A', text: 'Kerusakan Power Supply' },
      { id: 'B', text: 'Modul RAM tidak terdeteksi atau rusak' },
      { id: 'C', text: 'Kartu Grafis (VGA Card) bermasalah' },
      { id: 'D', text: 'Hard disk korup' }
    ],
    correctAnswer: 'C',
    explanation: 'Kode Beep (Beep Code) BIOS merupakan indikator diagnostik awal saat POST. Pada sebagian besar motherboard (seperti AMI/Award BIOS), 1 bip panjang diikuti 2 atau 3 bip pendek menandakan adanya kegagalan pada kartu grafis (VGA Card) atau slot PCIe grafis yang kurang terpasang rapat.',
    keyConcept: 'Diagnostik Kerusakan Hardware Melalui Beep Code BIOS',
    tkaExamTip: 'Beep code adalah bahasa sandi audio BIOS untuk mendeteksi hardware yang gagal saat POST.'
  },
  {
    id: 'tk-q10',
    number: 10,
    subjectId: 'teknik-komputer',
    topicTag: 'Sistem Operasi Jaringan',
    difficulty: 'Mudah',
    question: 'Perintah pada Command Prompt (CMD) sistem operasi Windows yang digunakan untuk menguji konektivitas jaringan komputer dengan mengirimkan paket ICMP Echo Request ke komputer target adalah...',
    options: [
      { id: 'A', text: 'ipconfig' },
      { id: 'B', text: 'ping' },
      { id: 'C', text: 'tracert' },
      { id: 'D', text: 'netstat' }
    ],
    correctAnswer: 'B',
    explanation: 'Perintah `ping` (Packet Internet Groper) menggunakan protokol ICMP untuk memeriksa apakah suatu host komputer dapat dijangkau di jaringan IP serta mengukur waktu tunda (latency/round-trip time) dan persentase packet loss. Perintah `ipconfig` digunakan untuk melihat konfigurasi IP komputer.',
    keyConcept: 'Perintah Dasar Networking Command Prompt (Ping & Ipconfig)',
    tkaExamTip: 'Ping = Tes koneksi jaringan; Ipconfig = Cek IP komputer sendiri.'
  },
  {
    id: 'tk-q11',
    number: 11,
    subjectId: 'teknik-komputer',
    topicTag: 'Keamanan Jaringan & Protokol',
    difficulty: 'Sedang',
    question: 'Protokol jaringan yang bertugas secara otomatis memberikan (mengalokasikan) nomor alamat IP Address dan konfigurasi gateway kepada komputer klien dalam satu jaringan lokal adalah...',
    options: [
      { id: 'A', text: 'DNS (Domain Name System)' },
      { id: 'B', text: 'DHCP (Dynamic Host Configuration Protocol)' },
      { id: 'C', text: 'FTP (File Transfer Protocol)' },
      { id: 'D', text: 'HTTP (Hypertext Transfer Protocol)' }
    ],
    correctAnswer: 'B',
    explanation: 'DHCP (Dynamic Host Configuration Protocol) bekerja secara otomatis mendistribusikan IP address, subnet mask, gateway, dan DNS server kepada setiap perangkat klien yang baru terhubung ke jaringan, sehingga administrator tidak perlu melakukan konfigurasi IP secara manual satu persatu.',
    keyConcept: 'Fungsi Protokol DHCP dalam Pengalamatan Jaringan',
    tkaExamTip: 'DHCP = Pemberi IP otomatis (Dynamic) ke komputer klien.'
  },
  {
    id: 'tk-q12',
    number: 12,
    subjectId: 'teknik-komputer',
    topicTag: 'Keselamatan Kerja (K3LH)',
    difficulty: 'Mudah',
    question: 'Sebelum melakukan perakitan komputer atau membongkar komponen hardware di dalam CPU case, tindakan pencegahan keselamatan kerja (K3LH) yang paling penting untuk menghindari kerusakan komponen akibat aliran listrik statis tubuh adalah...',
    options: [
      { id: 'A', text: 'Memakai sarung tangan wol warna merah' },
      { id: 'B', text: 'Menggunakan gelang antistatis (Anti-Static Wrist Strap) yang diarde' },
      { id: 'C', text: 'Menyalakan kipas angin di dalam ruangan' },
      { id: 'D', text: 'Mematikan lampu ruangan kerja' }
    ],
    correctAnswer: 'B',
    explanation: 'Listrik statis (Electrostatic Discharge / ESD) dari tubuh manusia dapat merusak chip mikrokontroler dan sirkuit terpadu (IC) yang sensitif pada motherboard dan RAM. Penggunaan gelang antistatis yang dihubungkan ke ground (arde) atau menyentuh casing logam power supply yang terhubung listrik sebelum memegang komponen sangat diwajibkan.',
    keyConcept: 'Prosedur K3LH dan Pencegahan ESD (Electrostatic Discharge)',
    tkaExamTip: 'ESD (Listrik Statis) dapat membakar chip IC sensitif; cegah dengan gelang antistatis.'
  },
  {
    id: 'tk-q13',
    number: 13,
    subjectId: 'teknik-komputer',
    topicTag: 'Perangkat Keras & Motherboard',
    difficulty: 'Sedang',
    question: 'Slot ekspansi pada motherboard modern yang umumnya digunakan untuk memasang kartu grafis berkinerja tinggi (GPU / Graphic Card) adalah...',
    options: [
      { id: 'A', text: 'PCI Slot (Conventional)' },
      { id: 'B', text: 'PCI Express x16 (PCIe x16)' },
      { id: 'C', text: 'AGP Slot' },
      { id: 'D', text: 'IDE Ribbon Cable Slot' }
    ],
    correctAnswer: 'B',
    explanation: 'PCIe x16 (Peripheral Component Interconnect Express x16) adalah standar slot ekspansi berkecepatan tinggi pada motherboard modern yang dirancang khusus untuk menangani bandwidth besar yang dibutuhkan oleh kartu grafis (GPU gaming/rendering).',
    keyConcept: 'Jenis Slot Ekspansi Motherboard (PCIe x16)',
    tkaExamTip: 'PCIe x16 adalah slot utama untuk memasang kartu grafis (VGA).'
  },
  {
    id: 'tk-q14',
    number: 14,
    subjectId: 'teknik-komputer',
    topicTag: 'Sistem Operasi & Partisi Disk',
    difficulty: 'Sedang',
    question: 'Sistem berkas (file system) standar modern yang digunakan pada sistem operasi Microsoft Windows untuk mengelola partisi hard disk dengan dukungan keamanan file, enkripsi, dan kapasitas penyimpanan sangat besar adalah...',
    options: [
      { id: 'A', text: 'FAT16' },
      { id: 'B', text: 'FAT32' },
      { id: 'C', text: 'NTFS (New Technology File System)' },
      { id: 'D', text: 'Ext3' }
    ],
    correctAnswer: 'C',
    explanation: 'NTFS (New Technology File System) adalah sistem berkas standar utama Windows yang menggantikan FAT32. NTFS mendukung izin akses file per user (security permissions), penjurnalan untuk pemulihan error disk, dan ukuran file tunggal yang sangat besar (lebih dari 4 GB).',
    keyConcept: 'Sistem Berkas (File System) NTFS vs FAT32',
    tkaExamTip: 'FAT32 terbatas maksimal file 4GB; NTFS mendukung file berukuran raksasa dan keamanan file tingkat lanjut.'
  },
  {
    id: 'tk-q15',
    number: 15,
    subjectId: 'teknik-komputer',
    topicTag: 'Jaringan Nirkabel (Wi-Fi)',
    difficulty: 'Mudah',
    question: 'Standar teknologi jaringan nirkabel (Wireless LAN) yang populer digunakan saat ini di perkantoran dan rumah berdasarkan spesifikasi IEEE dinamakan...',
    options: [
      { id: 'A', text: 'IEEE 802.3' },
      { id: 'B', text: 'IEEE 802.11 (Wi-Fi)' },
      { id: 'C', text: 'IEEE 802.15 (Bluetooth)' },
      { id: 'D', text: 'IEEE 802.5 (Token Ring)' }
    ],
    correctAnswer: 'B',
    explanation: 'IEEE 802.11 adalah keluarga standar internasional untuk komunikasi jaringan nirkabel lokal (WLAN atau yang akrab disebut Wi-Fi). Adapun IEEE 802.3 adalah standar untuk jaringan kabel Ethernet.',
    keyConcept: 'Standar Komunikasi IEEE untuk Jaringan Nirkabel Wi-Fi',
    tkaExamTip: '802.11 = Wi-Fi (Wireless LAN); 802.3 = Ethernet (Kabel LAN).'
  },
  {
    id: 'tk-q16',
    number: 16,
    subjectId: 'teknik-komputer',
    topicTag: 'Perangkat Keras & Pendingin PC',
    difficulty: 'Mudah',
    question: 'Pasta khusus berwarna abu-abu atau putih yang dioleskan di antara permukaan prosesor (CPU) dan heatsink pendingin berfungsi untuk...',
    options: [
      { id: 'A', text: 'Menambah tegangan listrik prosesor' },
      { id: 'B', text: 'Mengisi celah mikroskopis udara agar konduksi panas dari CPU ke heatsink berjalan maksimal' },
      { id: 'C', text: 'Mencegah CPU berkarat karena air' },
      { id: 'D', text: 'Mempercepat putaran kipas casing' }
    ],
    correctAnswer: 'B',
    explanation: 'Thermal paste (pasta termal) berfungsi mengisi ketidakrataan mikroskopis antara permukaan metal CPU dan heatsink. Udara adalah penghantar panas yang buruk, sehingga pasta termal memastikan perpindahan panas (heat transfer) dari CPU ke kipas pendingin berlangsung sangat efisien.',
    keyConcept: 'Fungsi Thermal Paste pada Sistem Pendingin CPU',
    tkaExamTip: 'Thermal paste mengoptimalkan konduksi panas dari chip CPU ke heatsink pendingin.'
  },
  {
    id: 'tk-q17',
    number: 17,
    subjectId: 'teknik-komputer',
    topicTag: 'Jaringan Komputer & DNS',
    difficulty: 'Sedang',
    question: 'Layanan atau protokol jaringan yang bertugas menerjemahkan nama domain situs web yang mudah dibaca manusia (contoh: www.smk.sch.id) menjadi alamat IP numerik komputer server (contoh: 192.0.2.1) adalah...',
    options: [
      { id: 'A', text: 'DNS (Domain Name System)' },
      { id: 'B', text: 'FTP (File Transfer Protocol)' },
      { id: 'C', text: 'SMTP (Simple Mail Transfer Protocol)' },
      { id: 'D', text: 'DHCP Server' }
    ],
    correctAnswer: 'A',
    explanation: 'DNS (Domain Name System) bertindak sebagai "buku telepon" internet yang memetakan nama domain internet yang mudah diingat ke alamat IP numerik yang dipahami oleh router dan komputer di jaringan.',
    keyConcept: 'Fungsi DNS (Domain Name System)',
    tkaExamTip: 'DNS = Menerjemahkan nama domain teks menjadi alamat IP numerik.'
  },
  {
    id: 'tk-q18',
    number: 18,
    subjectId: 'teknik-komputer',
    topicTag: 'Troubleshooting Jaringan',
    difficulty: 'Sedang',
    question: 'Alat penguji khusus untuk memastikan apakah kabel UTP yang baru selesai dipasang konektor RJ-45 memiliki sambungan pin yang benar dan tidak ada kabel yang putus atau tertukar susunannya dinamakan...',
    options: [
      { id: 'A', text: 'Multimeter Digital' },
      { id: 'B', text: 'LAN Cable Tester' },
      { id: 'C', text: 'Crimping Tool' },
      { id: 'D', text: 'Optical Time Domain Reflectometer (OTDR)' }
    ],
    correctAnswer: 'B',
    explanation: 'LAN Cable Tester adalah alat genggam elektronik yang digunakan untuk mengetes sambungan 8 pin pada kabel UTP. Jika lampu LED indikator menyala berurutan dari 1 sampai 8 di kedua sisi alat, berarti kabel tersambung dengan sempurna.',
    keyConcept: 'Penggunaan LAN Cable Tester dan Crimping Tool',
    tkaExamTip: 'Crimping tool untuk menjepit konektor RJ-45; LAN cable tester untuk mengetes sambungan kabel.'
  },
  {
    id: 'tk-q19',
    number: 19,
    subjectId: 'teknik-komputer',
    topicTag: 'Arsitektur Komputer & RAM',
    difficulty: 'Mudah',
    question: 'Jenis memori RAM komputer yang bersifat volatile (data akan hilang saat komputer dimatikan) dan saat ini menjadi standar pada komputer desktop modern adalah...',
    options: [
      { id: 'A', text: 'ROM (Read Only Memory)' },
      { id: 'B', text: 'DDR4 / DDR5 SDRAM' },
      { id: 'C', text: 'CMOS Battery Memory' },
      { id: 'D', text: 'Flash Disk USB' }
    ],
    correctAnswer: 'B',
    explanation: 'DDR4 dan DDR5 SDRAM (Double Data Rate Synchronous Dynamic RAM) adalah teknologi memori kerja utama komputer saat ini yang menawarkan kecepatan transfer data sangat tinggi dan efisiensi daya yang lebih baik.',
    keyConcept: 'Karakteristik Memori Utama DDR SDRAM',
    tkaExamTip: 'RAM berjenis volatile (butuh aliran listrik agar data tetap tersimpan).'
  },
  {
    id: 'tk-q20',
    number: 20,
    subjectId: 'teknik-komputer',
    topicTag: 'Perangkat Keras & Catu Daya',
    difficulty: 'Sedang',
    question: 'Konektor daya utama pada Power Supply Unit (PSU) yang dicolokkan ke motherboard komputer modern untuk menyuplai tegangan listrik utama memiliki jumlah pin sebanyak...',
    options: [
      { id: 'A', text: '10 Pin' },
      { id: 'B', text: '20 Pin' },
      { id: 'C', text: '24 Pin (20+4 Pin)' },
      { id: 'D', text: '8 Pin saja' }
    ],
    correctAnswer: 'C',
    explanation: 'Konektor ATX Power utama pada motherboard modern menggunakan konfigurasi 24 pin (atau modular 20+4 pin), yang menyuplai tegangan +3.3V, +5V, dan +12V ke seluruh rangkaian motherboard.',
    keyConcept: 'Konektor Daya PSU ATX 24-Pin',
    tkaExamTip: 'Konektor utama motherboard modern adalah ATX 24-pin.'
  },
  {
    id: 'tk-q21',
    number: 21,
    subjectId: 'teknik-komputer',
    topicTag: 'Jaringan Komputer Dasar',
    difficulty: 'Sedang',
    question: 'Alamat fisik unik sepanjang 48-bit (6 byte) yang tertanam secara permanen pada chip Network Interface Card (NIC) oleh pabrik pembuatnya disebut...',
    options: [
      { id: 'A', text: 'IP Address' },
      { id: 'B', text: 'MAC Address (Media Access Control)' },
      { id: 'C', text: 'Subnet Mask' },
      { id: 'D', text: 'Gateway Address' }
    ],
    correctAnswer: 'B',
    explanation: 'MAC Address adalah alamat perangkat keras yang bersifat unik secara global untuk setiap kartu jaringan (NIC). Berbeda dengan IP Address yang dapat berubah sesuai lokasi jaringan, MAC Address bersifat permanen di Layer 2 (Data Link).',
    keyConcept: 'Perbedaan MAC Address vs IP Address',
    tkaExamTip: 'MAC Address = Alamat fisik permanen di kartu jaringan (Layer 2).'
  },
  {
    id: 'tk-q22',
    number: 22,
    subjectId: 'teknik-komputer',
    topicTag: 'Sistem Operasi & Virtualisasi',
    difficulty: 'Sedang',
    question: 'Teknologi yang memungkinkan sebuah komputer fisik menjalankan beberapa sistem operasi secara bersamaan dalam bentuk mesin virtual (Virtual Machine) menggunakan software seperti VirtualBox atau VMware dinamakan...',
    options: [
      { id: 'A', text: 'Defragmentation' },
      { id: 'B', text: 'Virtualization (Virtualisasi)' },
      { id: 'C', text: 'Overclocking' },
      { id: 'D', text: 'Formatting' }
    ],
    correctAnswer: 'B',
    explanation: 'Virtualisasi menggunakan perangkat lunak hypervisor (seperti VirtualBox, VMware, atau KVM) untuk mempartisi sumber daya hardware fisik (CPU, RAM, Storage) sehingga dapat menjalankan beberapa OS terisolasi secara bersamaan.',
    keyConcept: 'Konsep Dasar Virtualisasi Mesin',
    tkaExamTip: 'Virtualisasi memungkinkan 1 PC fisik menjalankan banyak OS virtual sekaligus.'
  },
  {
    id: 'tk-q23',
    number: 23,
    subjectId: 'teknik-komputer',
    topicTag: 'Jaringan Komputer & Port',
    difficulty: 'Sedang',
    question: 'Nomor port standar yang digunakan oleh protokol web secure terenkripsi (HTTPS) untuk komunikasi data aman di internet adalah...',
    options: [
      { id: 'A', text: 'Port 21' },
      { id: 'B', text: 'Port 80' },
      { id: 'C', text: 'Port 443' },
      { id: 'D', text: 'Port 22' }
    ],
    correctAnswer: 'C',
    explanation: 'Port standar layanan jaringan:\n- HTTP (Web biasa): Port 80\n- HTTPS (Web aman terenkripsi SSL/TLS): Port 443\n- FTP (File Transfer): Port 21\n- SSH (Secure Shell remote): Port 22\n- DNS: Port 53.',
    keyConcept: 'Nomor Port Standar Protokol Jaringan (HTTP, HTTPS, SSH, FTP)',
    tkaExamTip: 'HTTPS selalu menggunakan port 443; HTTP biasa menggunakan port 80.'
  },
  {
    id: 'tk-q24',
    number: 24,
    subjectId: 'teknik-komputer',
    topicTag: 'Troubleshooting PC & CMOS',
    difficulty: 'Sedang',
    question: 'Baterai kecil berbentuk koin (CR2032) yang terpasang di atas motherboard komputer memiliki fungsi utama untuk...',
    options: [
      { id: 'A', text: 'Menyuplai listrik tambahan saat CPU bermain game berat' },
      { id: 'B', text: 'Menjaga pasokan daya ke chip CMOS agar pengaturan BIOS dan jam sistem (Real-Time Clock) tidak hilang saat PC dimatikan' },
      { id: 'C', text: 'Mendinginkan chipset utara (Northbridge)' },
      { id: 'D', text: 'Menghapus virus pada hard disk' }
    ],
    correctAnswer: 'B',
    explanation: 'Baterai CMOS (Complementary Metal-Oxide-Semiconductor) menyuplai daya kecil secara terus-menerus ke chip memori CMOS motherboard saat komputer dicabut dari colokan listrik, sehingga tanggal, waktu, dan konfigurasi BIOS tersimpan dengan aman.',
    keyConcept: 'Fungsi Baterai CMOS pada Motherboard',
    tkaExamTip: 'Baterai CMOS habis ditandai dengan jam komputer yang selalu reset saat PC dimatikan.'
  },
  {
    id: 'tk-q25',
    number: 25,
    subjectId: 'teknik-komputer',
    topicTag: 'Perangkat Keras & Expansion Card',
    difficulty: 'Mudah',
    question: 'Komponen tambahan berupa kartu sirkuit yang dipasang pada slot motherboard untuk memberikan tambahan port koneksi atau kemampuan grafis, salah satunya adalah LAN Card (Ethernet Card), disebut sebagai...',
    options: [
      { id: 'A', text: 'Expansion Card (Kartu Ekspansi)' },
      { id: 'B', text: 'Power Supply' },
      { id: 'C', text: 'Kabel SATA' },
      { id: 'D', text: 'Heatsink Fan' }
    ],
    correctAnswer: 'A',
    explanation: 'Expansion card adalah papan sirkuit cetak yang dapat dimasukkan ke dalam soket ekspansi (slot PCI/PCIe) pada motherboard untuk memberikan fungsi tambahan seperti kartu grafis, kartu suara, atau kartu jaringan tambahan.',
    keyConcept: 'Konsep Kartu Ekspansi (Expansion Card) Motherboard',
    tkaExamTip: 'Expansion card menambah fitur modular pada motherboard.'
  },
  {
    id: 'tk-q26',
    number: 26,
    subjectId: 'teknik-komputer',
    topicTag: 'Jaringan Komputer & Subnetting Dasar',
    difficulty: 'Sedang',
    question: 'Berapakah jumlah total alamat IP (Total IP) dalam satu blok subnet jaringan dengan prefix /24 (Subnet mask 255.255.255.0)?',
    options: [
      { id: 'A', text: '16 IP' },
      { id: 'B', text: '64 IP' },
      { id: 'C', text: '256 IP' },
      { id: 'D', text: '512 IP' }
    ],
    correctAnswer: 'C',
    explanation: 'Prefix /24 menyisakan 32 - 24 = 8 bit untuk host. Total IP = 2⁸ = 256 alamat IP. Dari 256 IP tersebut, 1 alamat digunakan sebagai Network ID dan 1 alamat sebagai Broadcast ID, menyisakan 254 host valid.',
    keyConcept: 'Perhitungan Total IP dan Host Valid CIDR /24',
    tkaExamTip: 'CIDR /24 adalah satu blok kelas C penuh berisi 256 total IP (254 host valid).'
  },
  {
    id: 'tk-q27',
    number: 27,
    subjectId: 'teknik-komputer',
    topicTag: 'Perawatan & Pemeliharaan PC',
    difficulty: 'Mudah',
    question: 'Penumpukan debu yang tebal pada kipas heatsink prosesor komputer dapat menyebabkan masalah serius berupa...',
    options: [
      { id: 'A', text: 'Komputer menjadi sangat dingin dan membeku' },
      { id: 'B', text: 'Overheating (suhu CPU terlalu panas) yang mengakibatkan komputer sering mati mendadak (restart sendiri)' },
      { id: 'C', text: 'Kecepatan internet bertambah cepat' },
      { id: 'D', text: 'Kapasitas hard disk bertambah besar' }
    ],
    correctAnswer: 'B',
    explanation: 'Debu yang menyumbat sirip heatsink menghalangi aliran udara kipas pendingin, menyebabkan panas CPU tidak dapat dibuang dengan baik. Akibatnya suhu naik drastis (overheating) dan sistem melakukan proteksi otomatis dengan mati mendadak.',
    keyConcept: 'Dampak Penumpukan Debu dan Pentingnya Perawatan Fisik PC',
    tkaExamTip: 'Debu menghalangi aliran udara pendingin dan memicu overheating pada CPU/GPU.'
  },
  {
    id: 'tk-q28',
    number: 28,
    subjectId: 'teknik-komputer',
    topicTag: 'Jaringan Komputer & Perangkat',
    difficulty: 'Sedang',
    question: 'Perangkat jaringan yang berfungsi untuk memperkuat dan meregenerasi sinyal data yang melemah akibat jarak tempuh yang jauh pada kabel jaringan disebut...',
    options: [
      { id: 'A', text: 'Switch' },
      { id: 'B', text: 'Repeater / Range Extender' },
      { id: 'C', text: 'Hard Disk' },
      { id: 'D', text: 'Power Supply' }
    ],
    correctAnswer: 'B',
    explanation: 'Repeater bekerja pada Layer 1 (Physical Layer) untuk menerima sinyal jaringan yang melemah dan memancarkan kembali dengan daya penuh, sehingga jarak transmisi data kabel atau nirkabel dapat diperluas.',
    keyConcept: 'Fungsi Repeater dalam Penguatan Sinyal Jaringan',
    tkaExamTip: 'Repeater = Memperkuat dan memperpanjang jangkauan sinyal jaringan.'
  },
  {
    id: 'tk-q29',
    number: 29,
    subjectId: 'teknik-komputer',
    topicTag: 'Sistem Operasi & Perintah Dasar',
    difficulty: 'Sedang',
    question: 'Perintah pada terminal Command Prompt Windows untuk melihat daftar alamat IP lengkap beserta konfigurasi gateway dan MAC address dari komputer lokal adalah...',
    options: [
      { id: 'A', text: 'ping localhost' },
      { id: 'B', text: 'ipconfig /all' },
      { id: 'C', text: 'cls' },
      { id: 'D', text: 'dir' }
    ],
    correctAnswer: 'B',
    explanation: 'Perintah `ipconfig /all` menampilkan informasi jaringan yang sangat lengkap pada sistem Windows, meliputi nama host, tipe adaptor fisik, alamat MAC, alamat IPv4/IPv6, status DHCP, hingga alamat DNS server yang aktif.',
    keyConcept: 'Penggunaan Perintah ipconfig /all di Windows',
    tkaExamTip: 'ipconfig /all menampilkan detail lengkap termasuk MAC address dan status DHCP.'
  },
  {
    id: 'tk-q30',
    number: 30,
    subjectId: 'teknik-komputer',
    topicTag: 'Arsitektur Komputer & Chipset',
    difficulty: 'Mudah',
    question: 'Komponen chipset pada motherboard tradisional yang bertugas menghubungkan CPU dengan komponen berkecepatan tinggi seperti RAM dan Slot Kartu Grafis (PCIe) dinamakan...',
    options: [
      { id: 'A', text: 'Southbridge' },
      { id: 'B', text: 'Northbridge (Memory Controller Hub)' },
      { id: 'C', text: 'BIOS Chip' },
      { id: 'D', text: 'Konektor SATA' }
    ],
    correctAnswer: 'B',
    explanation: 'Northbridge (atau Memory Controller Hub) pada arsitektur motherboard lama menangani komunikasi berkecepatan tinggi antara CPU, RAM, dan kartu grafis. (Pada CPU modern, fungsi Northbridge ini sudah diintegrasikan langsung ke dalam die silikon CPU).',
    keyConcept: 'Arsitektur Chipset Motherboard (Northbridge vs Southbridge)',
    tkaExamTip: 'Northbridge = Menghubungkan CPU dengan RAM & VGA; Southbridge = Menghubungkan perangkat I/O (SATA, USB, Audio).'
  }
];
