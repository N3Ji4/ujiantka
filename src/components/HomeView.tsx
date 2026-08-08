import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  BookOpen, 
  HelpCircle, 
  CheckCircle2, 
  FileText, 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  BrainCircuit,
  ArrowRight,
  Flame,
  Play,
  Pause,
  RotateCcw,
  Timer
} from 'lucide-react';
import { Subject, SubjectId } from '../types';
import { subjects } from '../data';
import { SubjectCard } from './SubjectCard';
import { sound } from '../utils/audio';

interface HomeViewProps {
  progressData: Record<SubjectId, { answered: number; correct: number; total: number }>;
  onOpenMaterials: (subject: Subject) => void;
  onStartQuiz: (subject: Subject) => void;
  onOpenCheatSheet: (subject: Subject) => void;
  onOpenGlobalSearch: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  progressData,
  onOpenMaterials,
  onStartQuiz,
  onOpenCheatSheet,
  onOpenGlobalSearch
}) => {
  const [pomodoroTime, setPomodoroTime] = useState(25 * 60);
  const [isPomodoroActive, setIsPomodoroActive] = useState(false);
  const [pomodoroMode, setPomodoroMode] = useState<'focus' | 'break'>('focus');

  useEffect(() => {
    let interval: any = null;
    if (isPomodoroActive && pomodoroTime > 0) {
      interval = setInterval(() => {
        setPomodoroTime((prev) => prev - 1);
      }, 1000);
    } else if (pomodoroTime === 0 && isPomodoroActive) {
      setIsPomodoroActive(false);
      sound.playChillChime();
      if (pomodoroMode === 'focus') {
        alert('Sesi fokus TKA selesai! Waktunya istirahat sejenak (5 menit).');
        setPomodoroMode('break');
        setPomodoroTime(5 * 60);
      } else {
        alert('Waktu istirahat selesai! Siap kembali fokus latihan TKA.');
        setPomodoroMode('focus');
        setPomodoroTime(25 * 60);
      }
    }
    return () => clearInterval(interval);
  }, [isPomodoroActive, pomodoroTime, pomodoroMode]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remSecs.toString().padStart(2, '0')}`;
  };

  // Aggregate stats
  const progressList = Object.values(progressData) as { answered: number; correct: number; total: number }[];
  const totalAnswered: number = progressList.reduce((acc, curr) => acc + (curr.answered || 0), 0);
  const totalCorrect: number = progressList.reduce((acc, curr) => acc + (curr.correct || 0), 0);
  const overallAccuracy: number = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  return (
    <div className="space-y-8 sm:space-y-10 pb-16">
      {/* Calm Hero Section */}
      <section className="relative rounded-3xl bg-linear-to-b from-zinc-50 to-white dark:from-zinc-900/60 dark:to-zinc-950 border border-zinc-200/80 dark:border-zinc-800 p-6 sm:p-8 lg:p-10 shadow-xs overflow-hidden">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/80 text-indigo-700 dark:text-indigo-300 text-xs font-semibold shadow-2xs">
            <img src="/logo.jpg" alt="TKA" className="w-5 h-5 rounded-md object-cover" />
            <span>Platform Persiapan Tes Kemampuan Akademik • Kurikulum Merdeka</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
            Persiapan TKA Terstruktur & Jernih untuk Hasil Terbaik.
          </h1>

          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
            Asah pemahaman konseptual, formula esensial, dan latihan mandiri sesuai standar Kurikulum Merdeka untuk{' '}
            <strong className="text-zinc-800 dark:text-zinc-200 font-semibold">Matematika</strong>,{' '}
            <strong className="text-zinc-800 dark:text-zinc-200 font-semibold">Bahasa Inggris</strong>,{' '}
            <strong className="text-zinc-800 dark:text-zinc-200 font-semibold">PKWU</strong>, dan{' '}
            <strong className="text-zinc-800 dark:text-zinc-200 font-semibold">Teknik Komputer</strong>{' '}
            dengan simulasi 30 butir soal berkualitas tinggi per mata pelajaran.
          </p>

          {/* Quick Action Highlights */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              id="btn-hero-quick-search"
              onClick={onOpenGlobalSearch}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white transition-all shadow-xs"
            >
              <span>Cari Rumus & Konsep (⌘K)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              id="btn-hero-quick-math"
              onClick={() => onStartQuiz(subjects[0])}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all"
            >
              <span>Mulai Latihan MTK (30 Soal)</span>
            </button>
          </div>
        </div>

        {/* Aggregate Stats Pill */}
        <div className="mt-8 pt-6 border-t border-zinc-200/60 dark:border-zinc-800 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="space-y-1">
            <div className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">Total Bank Soal</div>
            <div className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
              120 <span className="text-xs font-normal text-zinc-500">Soal TKA</span>
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">Soal Terselesaikan</div>
            <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
              {totalAnswered} <span className="text-xs font-normal text-zinc-500">/ 120</span>
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">Akurasi Rata-rata</div>
            <div className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              {totalAnswered > 0 ? `${overallAccuracy}%` : '—'}
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">Metode Belajar</div>
            <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              Active Recall
            </div>
          </div>
        </div>
      </section>

      {/* Timer Pomodoro & Fokus Belajar Widget */}
      <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 flex items-center justify-center font-bold text-lg">
              ⏱️
            </div>
            <div>
              <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <span>Timer Fokus Pomodoro Belajar TKA</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${pomodoroMode === 'focus' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300' : 'bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300'}`}>
                  {pomodoroMode === 'focus' ? 'Sesi Fokus (25m)' : 'Istirahat (5m)'}
                </span>
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Jaga ritme konsentrasi tinggi dan hindari kelelahan mental saat mencerna materi TKA.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-2xl font-extrabold font-mono text-zinc-900 dark:text-zinc-100 px-3 py-1 rounded-xl bg-zinc-100 dark:bg-zinc-800">
              {formatTime(pomodoroTime)}
            </div>
            <button
              id="btn-pomodoro-toggle"
              onClick={() => {
                sound.playChillChime();
                setIsPomodoroActive(!isPomodoroActive);
              }}
              className={`p-2.5 rounded-xl text-white font-semibold flex items-center justify-center transition-colors shadow-xs ${isPomodoroActive ? 'bg-amber-600 hover:bg-amber-700' : 'bg-emerald-600 hover:bg-emerald-700'}`}
              title={isPomodoroActive ? 'Jeda Timer' : 'Mulai Timer'}
            >
              {isPomodoroActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              id="btn-pomodoro-reset"
              onClick={() => {
                sound.playChillChime();
                setIsPomodoroActive(false);
                setPomodoroTime(pomodoroMode === 'focus' ? 25 * 60 : 5 * 60);
              }}
              className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 transition-colors"
              title="Reset Timer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-zinc-100 dark:border-zinc-800">
          <button
            onClick={() => {
              setIsPomodoroActive(false);
              setPomodoroMode('focus');
              setPomodoroTime(25 * 60);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${pomodoroMode === 'focus' ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200'}`}
          >
            Fokus 25 Menit
          </button>
          <button
            onClick={() => {
              setIsPomodoroActive(false);
              setPomodoroMode('break');
              setPomodoroTime(5 * 60);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${pomodoroMode === 'break' ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200'}`}
          >
            Istirahat 5 Menit
          </button>
          <span className="text-xs text-zinc-400 ml-auto hidden sm:inline">
            ✨ Dilengkapi bunyi chime penanda sesi
          </span>
        </div>
      </section>

      {/* 4 Subjects Grid */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Pilih Mata Pelajaran
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Setiap mata pelajaran dilengkapi materi ringkas, panduan perhitungan, dan 30 butir soal standar ujian.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {subjects.map((subj) => (
            <SubjectCard
              key={subj.id}
              subject={subj}
              answeredCount={progressData[subj.id]?.answered || 0}
              totalQuestions={30}
              onOpenMaterials={onOpenMaterials}
              onStartQuiz={onStartQuiz}
              onOpenCheatSheet={onOpenCheatSheet}
            />
          ))}
        </div>
      </section>

      {/* 3-Step Study Strategy Guide */}
      <section className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/40 p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-2.5">
          <BrainCircuit className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
            Strategi Belajar Efektif Menjelang Ujian TKA
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 space-y-2">
            <div className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center justify-center text-xs font-bold">
              1
            </div>
            <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
              Kuasai Pola & Rumus Cepat
            </h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Fokus pada konsep yang memiliki bobot tinggi seperti Subnetting CIDR, Turunan Berantai, Analisis BEP, dan Inversi Grammar.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 space-y-2">
            <div className="w-6 h-6 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 flex items-center justify-center text-xs font-bold">
              2
            </div>
            <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
              Simulasi Mandiri 30 Soal
            </h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Kerjakan paket latihan tanpa melihat jawaban terlebih dahulu untuk melatih kecepatan membaca dan daya analisis waktu riil.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 space-y-2">
            <div className="w-6 h-6 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 flex items-center justify-center text-xs font-bold">
              3
            </div>
            <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
              Evaluasi & Bedah Pembahasan
            </h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Gunakan fitur pembahasan mendalam dan &quot;Ulangi Soal yang Salah&quot; hingga mencapai akurasi minimal 85%.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
