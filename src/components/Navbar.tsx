import React from 'react';
import { BookOpen, GraduationCap, Moon, Search, Sun, BarChart2 } from 'lucide-react';
import { AppView, ThemeMode } from '../types';

interface NavbarProps {
  activeView: AppView;
  onNavigate: (view: AppView) => void;
  themeMode: ThemeMode;
  onThemeToggle: () => void;
  onOpenSearch: () => void;
  onOpenFormulas: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  onNavigate,
  themeMode,
  onThemeToggle,
  onOpenSearch,
  onOpenFormulas
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 group text-left focus:outline-none"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
                Akademika
              </span>
              <span className="px-1.5 py-0.5 text-[9px] font-semibold bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-md">
                Next.js App
              </span>
            </div>
            <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400 block -mt-0.5">
              Uji Kompetensi & Materi SMK
            </span>
          </div>
        </button>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800/80 p-1 rounded-xl">
          <button
            onClick={() => onNavigate('home')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeView === 'home'
                ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-xs'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            Beranda
          </button>
          <button
            onClick={() => onNavigate('materials')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeView === 'materials'
                ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-xs'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            Materi & Rumus
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenSearch}
            className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-700 transition-colors"
            title="Pencarian Cepat"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Cari Soal / Materi...</span>
            <kbd className="hidden lg:inline px-1.5 py-0.5 text-[10px] font-mono bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded text-zinc-400">⌘K</kbd>
          </button>

          <button
            onClick={onOpenFormulas}
            className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            title="Bank Rumus Penting"
          >
            <BookOpen className="w-4 h-4" />
          </button>

          <button
            onClick={onThemeToggle}
            className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            title="Ganti Tema"
          >
            {themeMode === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};
