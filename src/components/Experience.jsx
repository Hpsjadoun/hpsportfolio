import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="py-6 border-b border-t border-slate-200/60">
      <h2 className="text-xs font-black text-slate-400 tracking-widest uppercase mb-6">Work Experience</h2>
      <div className="space-y-8">
        
        {/* Omsara Current Block */}
        <div className="grid grid-cols-4 gap-4 items-start">
          <div className="col-span-1">
            <span className="text-xs font-bold text-slate-900 block">May 2026 -</span>
            <span className="text-xs font-bold text-slate-400 block">Present</span>
            <span className="inline-block text-[9px] bg-emerald-100 text-emerald-800 font-extrabold px-2 py-0.5 rounded mt-2 uppercase tracking-wider">Current</span>
          </div>
          <div className="col-span-3">
            <h3 className="text-sm font-bold text-slate-900">Omsara Industries Private Limited</h3>
            <p className="text-xs font-bold text-blue-600 mt-0.5">Research & Development</p>
            <p className="text-[10px] font-medium text-slate-400 mt-0.5">📍 Jaipur, Rajasthan · Onsite</p>
            <ul className="text-xs text-slate-600 mt-3 space-y-1 list-disc list-inside">
              <li>Working in R&D on web technologies and scalable systems.</li>
              <li>Building and optimising full-stack applications.</li>
            </ul>
          </div>
        </div>

        {/* Dogma Soft Intern Block */}
        <div className="grid grid-cols-4 gap-4 items-start border-t border-slate-100 pt-6">
          <div className="col-span-1">
            <span className="text-xs font-bold text-slate-900 block">3 Months</span>
            <span className="text-xs font-bold text-slate-400 block">Internship</span>
            <span className="inline-block text-[9px] bg-slate-200 text-slate-700 font-extrabold px-2 py-0.5 rounded mt-2 uppercase tracking-wider">Completed</span>
          </div>
          <div className="col-span-3">
            <h3 className="text-sm font-bold text-slate-900">Dogma Soft Private Limited</h3>
            <p className="text-xs font-bold text-blue-600 mt-0.5">Web Development Intern</p>
            <p className="text-[10px] font-medium text-slate-400 mt-0.5">📍 Jaipur, Rajasthan · Onsite</p>
            <ul className="text-xs text-slate-600 mt-3 space-y-1 list-disc list-inside">
              <li>3-month onsite internship at Dogma Soft, Jaipur.</li>
              <li>Worked on frontend using HTML, CSS, JavaScript.</li>
              <li>Gained hands-on experience in real-world web projects.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}