import React from 'react';

export default function Navbar({ sections, activeSection, scrollTo, onDownloadResume }) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-slate-100 z-50 px-6 py-4 md:px-16 flex flex-wrap items-center justify-between gap-4">
      <div className="leading-tight">
        <div className="text-base font-black text-slate-900">Himanshu</div>
        <div className="text-xs font-bold text-slate-400">Pratap Singh</div>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {sections?.map((sec) => ( 
                <button
            key={sec}
            onClick={() => scrollTo(sec)}
            className={`px-3.5 py-1.5 text-[11px] font-bold rounded-xl border transition-all uppercase tracking-wider ${
              activeSection === sec 
                ? 'bg-slate-200 text-slate-900 border-slate-300 shadow-sm' 
                : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400'
            }`}
          >
            {sec}
          </button>
        ))}
      </div>
      <button 
        onClick={onDownloadResume} 
        className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl transition shadow-md shadow-blue-100"
      >
        Resume 📥
      </button>
    </header>
  );
}