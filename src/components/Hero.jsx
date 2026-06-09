import React from 'react';

export default function Hero({ scrollTo, onDownloadResume }) {
  return (
    <section id="home" className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start pt-4">
      
      {/* Left Main Content Block */}
      <div className="lg:col-span-2 flex flex-col justify-center">
        <span className="text-sm font-bold text-slate-400">Hi, I'm</span>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mt-1 leading-tight">
          Himanshu<br />Pratap Singh
        </h1>
        <p className="text-sm font-bold text-slate-500 mt-2">Full-Stack Developer</p>
        
        <div className="mt-6 flex flex-wrap gap-3">
          <button onClick={() => scrollTo('projects')} className="bg-[#111] text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition shadow-sm">
            View My Projects
          </button>
          <button onClick={onDownloadResume} className="bg-white border border-slate-200 text-slate-700 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:border-slate-400 transition shadow-sm">
            Download Resume
          </button>
        </div>

        {/* Live Counter Stats */}
        <div className="mt-10 flex gap-8 border-t border-slate-100 pt-6">
          <div>
            <div className="text-xl font-black text-slate-900">4+</div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">Projects</div>
          </div>
          <div>
            <div className="text-xl font-black text-slate-900">9+</div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">Certifications</div>
          </div>
          <div>
            <div className="text-xl font-black text-slate-900">1+</div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">Yrs Experience</div>
          </div>
        </div>
      </div>

      {/* Right Sidebar Widgets */}
      <div className="space-y-4">
        {/* Profile Avatar Box Widget */}
        <div className="bg-[#F4F3EE] border border-slate-200/40 rounded-2xl p-6 text-center flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center text-sm font-black mb-3 shadow-inner">HPS</div>
          <h2 className="text-xs font-black text-slate-900">Himanshu Pratap Singh</h2>
          <p className="text-[10px] font-bold text-slate-400 mt-0.5">Jaipur, Rajasthan</p>
          <div className="flex gap-4 mt-4 text-[11px] font-bold text-slate-500">
            <span onClick={() => scrollTo('contact')} className="cursor-pointer hover:text-black">🔗 LinkedIn</span>
            <span onClick={() => scrollTo('contact')} className="cursor-pointer hover:text-black">✉️ Mail</span>
          </div>
        </div>

        {/* Side Mini Skills Widget */}
        <div className="bg-[#F4F3EE] border border-slate-200/40 rounded-2xl p-4">
          <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 block mb-2">Top skills</span>
          <div className="flex flex-wrap gap-1">
            <span className="text-[9px] bg-white text-blue-600 border border-blue-100 px-2 py-0.5 rounded font-bold shadow-sm">React</span>
            <span className="text-[9px] bg-white text-slate-700 border border-slate-200 px-2 py-0.5 rounded font-bold shadow-sm">HTML5</span>
            <span className="text-[9px] bg-white text-slate-700 border border-slate-200 px-2 py-0.5 rounded font-bold shadow-sm">CSS</span>
            <span className="text-[9px] bg-white text-emerald-600 border border-emerald-100 px-2 py-0.5 rounded font-bold shadow-sm">Javascript</span>
          </div>
        </div>
      </div>

    </section>
  );
}