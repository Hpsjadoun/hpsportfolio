import React from 'react';

export default function Education() {
  return (
    <section id="education" className="py-6 border-t border-slate-200/60">
      <h2 className="text-xs font-black text-slate-400 tracking-widest uppercase mb-6">Education & Qualifications</h2>
      <div className="space-y-6">
        <div className="grid grid-cols-4 gap-4 items-start">
          <span className="text-xs font-bold text-slate-400 col-span-1">2022 - 2025</span>
          <div className="col-span-3">
            <h3 className="text-xs font-bold text-slate-900">Bachelor of Computer Application</h3>
            <p className="text-slate-500 text-[11px] mt-0.5">University of Rajasthan</p>
            <span className="inline-block text-[9px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded font-bold mt-1.5">Degree</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 items-start border-t border-slate-100 pt-4">
          <span className="text-xs font-bold text-slate-400 col-span-1">2020 - 2022</span>
          <div className="col-span-3">
            <h3 className="text-xs font-bold text-slate-900">Industrial Training Institute</h3>
            <p className="text-slate-500 text-[11px] mt-0.5">Sanganer, Jaipur</p>
            <span className="inline-block text-[9px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded font-bold mt-1.5">Diploma</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 items-start border-t border-slate-100 pt-4">
          <span className="text-xs font-bold text-slate-400 col-span-1">2019 - 2020</span>
          <div className="col-span-3">
            <h3 className="text-xs font-bold text-slate-900">Intermediate (12th)</h3>
            <p className="text-slate-500 text-[11px] mt-0.5">Rawat Public School, Jaipur</p>
            <span className="inline-block text-[9px] bg-amber-50 text-amber-600 px-2 py-0.5 rounded font-bold mt-1.5">Senior Secondary</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 items-start border-t border-slate-100 pt-4">
          <span className="text-xs font-bold text-slate-400 col-span-1">2017 - 2018</span>
          <div className="col-span-3">
            <h3 className="text-xs font-bold text-slate-900">High School (10th)</h3>
            <p className="text-slate-500 text-[11px] mt-0.5">Uday Public School, Tundla, Firozabad</p>
            <span className="inline-block text-[9px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-bold mt-1.5">Secondary</span>
          </div>
        </div>
      </div>
    </section>
  );
}