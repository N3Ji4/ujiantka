import React from 'react';
import { 
  BookOpen, 
  Volume2, 
  VolumeX, 
  Sun, 
  Moon, 
  FileText, 
  Search, 
  Compass, 
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { Subject, ThemeMode, ActiveView } from '../types';
import { sound } from '../utils/audio';

interface NavbarProps {
  activeView: ActiveView;
  currentSubject?: Subject;
  themeMode: ThemeMode;
  onThemeChange: (mode: ThemeMode) => void;
  onNavigateHome: () => void;
  onNavigateMaterials: (subject: Subject) => void;
  onOpenFormula: () => void;
  onOpenSearch: () => void;
  isAudioPlaying: boolean;
  onToggleAudio: () => void;
  onResetProgress?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  currentSubject,
  themeMode,
  onThemeChange,
  onNavigateHome,
  onNavigateMaterials,
  onOpenFormula,
  onOpenSearch,
  isAudioPlaying,
  onToggleAudio
}) => {
  const [showSoundMenu, setShowSoundMenu] = React.useState(false);
  const currentSoundType = sound.getAmbientType();
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/85 dark:bg-zinc-950/85 border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        {/* Brand Logo & Breadcrumb */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            id="btn-nav-home-logo"
            onClick={onNavigateHome}
            className="flex items-center gap-2.5 group text-left transition-opacity hover:opacity-80 focus:outline-none"
            aria-label="Kembali ke Beranda TKA Belajar"
          >
            <img 
              src="/logo.jpg" 
              alt="TKA Logo" 
              className="w-9 h-9 rounded-xl object-cover shadow-xs transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <div className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                TKA Belajar
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                  2026
                </span>
              </div>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-normal leading-none mt-0.5">
                Ruang Belajar Tenang
              </p>
            </div>
          </button>

          {/* Breadcrumb if inside a subject */}
          {currentSubject && activeView !== 'home' && (
            <div className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500 pl-2 border-l border-zinc-200 dark:border-zinc-800">
              <button
                id="btn-breadcrumb-subject"
                onClick={() => onNavigateMaterials(currentSubject)}
                className="font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors truncate max-w-[120px] sm:max-w-[200px]"
              >
                {currentSubject.title}
              </button>
              {activeView === 'quiz' && (
                <>
                  <span>/</span>
                  <span className="text-zinc-900 dark:text-zinc-100 font-semibold truncate">
                    30 Soal
                  </span>
                </>
              )}
              {activeView === 'summary' && (
                <>
                  <span>/</span>
                  <span className="text-zinc-900 dark:text-zinc-100 font-semibold truncate">
                    Hasil Analisis
                  </span>
                </>
              )}
            </div>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Quick Search */}
          <button
            id="btn-nav-search"
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/70 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 transition-all"
            title="Cari Materi & Rumus (Ctrl + K)"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden md:inline text-zinc-500 dark:text-zinc-400">Cari materi...</span>
            <kbd className="hidden lg:inline text-[10px] font-mono px-1 py-0.2 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-500">
              ⌘K
            </kbd>
          </button>

          {/* Formula Sheet Trigger (Active when in subject) */}
          {currentSubject && (
            <button
              id="btn-nav-formulas"
              onClick={onOpenFormula}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100/70 dark:bg-zinc-900 hover:bg-zinc-200/70 dark:hover:bg-zinc-800 transition-all"
              title="Lembar Rumus & Cheat Sheet"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span className="hidden sm:inline">Ringkasan Rumus</span>
            </button>
          )}

          {/* Calm Ambient Sound Toggle & 3 Choices Menu */}
          <div className="relative">
            <div className="flex items-center rounded-lg bg-zinc-100/70 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800">
              <button
                id="btn-nav-ambient-sound"
                onClick={onToggleAudio}
                className={`p-2 rounded-l-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                  isAudioPlaying 
                    ? 'bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300' 
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/50'
                }`}
                title={isAudioPlaying ? 'Matikan Suara Fokus' : 'Nyalakan Suara Fokus'}
                aria-label="Toggle suara fokus"
              >
                {isAudioPlaying ? (
                  <Volume2 className="w-4 h-4 animate-pulse text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <VolumeX className="w-4 h-4 opacity-70" />
                )}
                <span className="hidden md:inline text-[11px] font-semibold capitalize pr-1">
                  {isAudioPlaying ? currentSoundType : 'Suara'}
                </span>
              </button>
              <button
                onClick={() => setShowSoundMenu(!showSoundMenu)}
                className="px-1.5 py-2 rounded-r-lg text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-200/50 transition-colors"
                title="Pilih Jenis Suara Fokus (3 Pilihan)"
                aria-label="Pilih jenis suara"
              >
                ▼
              </button>
            </div>

            {/* Sound Selection Dropdown Menu */}
            {showSoundMenu && (
              <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-2 shadow-xl z-50 space-y-1 animate-in fade-in duration-150">
                <div className="px-3 py-1.5 text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                  Pilih Suara Fokus (3 Opsi)
                </div>
                
                <button
                  onClick={() => {
                    sound.startAmbient('rain');
                    setShowSoundMenu(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                    isAudioPlaying && currentSoundType === 'rain'
                      ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold'
                      : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                >
                  <span className="flex items-center gap-2">🌧️ Hujan Tenang</span>
                  {isAudioPlaying && currentSoundType === 'rain' && <span className="text-[10px] bg-emerald-200 dark:bg-emerald-900 px-1.5 py-0.5 rounded-full">Aktif</span>}
                </button>

                <button
                  onClick={() => {
                    sound.startAmbient('stream');
                    setShowSoundMenu(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                    isAudioPlaying && currentSoundType === 'stream'
                      ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold'
                      : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                >
                  <span className="flex items-center gap-2">🌊 Gemercik Sungai</span>
                  {isAudioPlaying && currentSoundType === 'stream' && <span className="text-[10px] bg-emerald-200 dark:bg-emerald-900 px-1.5 py-0.5 rounded-full">Aktif</span>}
                </button>

                <button
                  onClick={() => {
                    sound.startAmbient('binaural');
                    setShowSoundMenu(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                    isAudioPlaying && currentSoundType === 'binaural'
                      ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold'
                      : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                >
                  <span className="flex items-center gap-2">🧘 Gelombang Zen</span>
                  {isAudioPlaying && currentSoundType === 'binaural' && <span className="text-[10px] bg-emerald-200 dark:bg-emerald-900 px-1.5 py-0.5 rounded-full">Aktif</span>}
                </button>
              </div>
            )}
          </div>

          {/* Theme Selector (Light / Paper / Dark) */}
          <button
            id="btn-nav-theme-toggle"
            onClick={() => {
              const next: ThemeMode = themeMode === 'light' ? 'paper' : themeMode === 'paper' ? 'dark' : 'light';
              onThemeChange(next);
            }}
            className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
            title={`Mode Tampilan: ${themeMode === 'light' ? 'Terang' : themeMode === 'paper' ? 'Kertas Lembut' : 'Malam Tenang'}`}
            aria-label="Ganti mode tampilan"
          >
            {themeMode === 'light' && <Sun className="w-4 h-4 text-amber-500" />}
            {themeMode === 'paper' && <Sparkles className="w-4 h-4 text-amber-700 dark:text-amber-300" />}
            {themeMode === 'dark' && <Moon className="w-4 h-4 text-indigo-400" />}
          </button>
        </div>
      </div>
    </header>
  );
};
