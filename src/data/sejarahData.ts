import { Topic } from '../types';

export const sejarahTopics: Topic[] = [
  {
    id: 'sej-1',
    title: 'Masa Praaksara & Peradaban Kuno',
    categoryTag: 'Sejarah Dunia & Nasional',
    summary: 'Mempelajari evolusi manusia purba di Nusantara (Pithecanthropus, Homo), corak kehidupan masa berburu hingga bercocok tanam, serta peradaban besar dunia.',
    keyPoints: [
      'Masa Praaksara: Zaman sebelum manusia mengenal tulisan.',
      'Jenis Manusia Purba di Indonesia: Meganthropus palaeojavanicus, Pithecanthropus erectus, dan Homo wajakensis / soloensis.',
      'Hasil kebudayaan batu: Paleolitikum (batu kasar), Mesolitikum (kebudayaan pesisir / kjokkenmoddinger), Neolitikum (batu halus / kapak persegi).',
      'Peradaban Kuno Dunia: Mesopotamia, Mesir Kuno (Sungai Nil), Lembah Sungai Indus, dan Tiongkok Kuno.'
    ],
    conceptExplanation: 'Sejarah peradaban manusia berkembang dari kehidupan nomaden (berpindah-pindah) menjadi menetap (food producing) setelah mengenal pertanian.',
    stepByStepGuides: [
      {
        title: 'Kronologi Zaman Batu',
        steps: [
          'Paleolitikum (Zaman Batu Tua): Alat masih sangat kasar untuk berburu dan meramu.',
          'Mesolitikum (Zaman Batu Madya): Ditemukan bukit kerang (kjokkenmoddinger) dan abris sous roche (gua tempat tinggal).',
          'Neolitikum (Zaman Batu Muda): Revolusi kebudayaan food producing, kapak persegi, dan kapak lonjong.',
          'Zaman Logam: Kebudayaan perunggu dan besi (nekara, moko, candrasa).'
        ],
        tips: 'Ingat bahwa Neolitikum adalah titik balik revolusi pertanian.'
      }
    ],
    quickTips: [
      'Peradaban kuno dunia selalu lahir di lembah sungai besar karena kesuburan tanahnya mendukung pertanian.'
    ]
  },
  {
    id: 'sej-2',
    title: 'Masa Kolonialisme & Pergerakan Nasional',
    categoryTag: 'Sejarah Indonesia',
    summary: 'Kajian kedatangan bangsa barat ke Nusantara, sistem monopoli VOC, Cultuurstelsel (Tanam Paksa), kebangkitan nasional, hingga Proklamasi Kemerdekaan 1945.',
    keyPoints: [
      'VOC dibentuk tahun 1602 dengan hak oktroi (istimewa) untuk memonopoli rempah-rempah.',
      'Sistem Tanam Paksa (Cultuurstelsel) dicetuskan oleh Johannes van den Bosch tahun 1830.',
      'Kebangkitan Nasional ditandai dengan berdirinya Budi Utomo pada 20 Mei 1908.',
      'Sumpah Pemuda 28 Oktober 1928 meneguhkan tekad satu tanah air, satu bangsa, dan satu bahasa.'
    ],
    conceptExplanation: 'Perjuangan bangsa Indonesia bergeser dari perlawanan kedaerahan yang bersifat fisik dan sporadis menuju pergerakan nasional yang terorganisir secara modern.',
    quickTips: [
      'Hafalkan tokoh-tokoh penting pergerakan nasional dan organisasi pelopornya (Budi Utomo, Sarekat Islam, Indische Partij).'
    ]
  }
];
