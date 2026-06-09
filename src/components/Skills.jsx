import React from 'react';

export default function Skills() {
  const techSkills = [
    { name: "JavaScript", progress: "w-[90%]" },
    { name: "React", progress: "w-[85%]" },
    { name: "HTML5 & CSS", progress: "w-[95%]" },
    { name: "Bootstrap", progress: "w-[80%]" },
    { name: "PHP", progress: "w-[70%]" },
    { name: "C/C++ OOPs", progress: "w-[75%]" },
    { name: "UI/UX Figma", progress: "w-[80%]" },
    { name: "Git & GitHub", progress: "w-[85%]" }
  ];

  const profSkills = ["Good Learner", "Time Management", "Supportive", "Work Under Pressure", "MS Office"];

  return (
    <section id="skills" className="py-6 border-t border-slate-200/60">
      <h2 className="text-xs font-black text-slate-400 tracking-widest uppercase mb-6">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {techSkills.map((s, i) => (
          <div key={i} className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
            <span className="text-xs font-bold text-slate-800 block mb-2">{s.name}</span>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div className={`bg-blue-600 h-full rounded-full ${s.progress}`}></div>
            </div>
          </div>
        ))}
      </div>
      
      <h3 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mt-10 mb-4">Professional Skills</h3>
      <div className="flex flex-wrap gap-2">
        {profSkills.map((s, i) => (
          <span key={i} className="text-xs bg-white border border-slate-200 px-3 py-1.5 rounded-full font-bold shadow-sm text-slate-600">🧠 {s}</span>
        ))}
      </div>
    </section>
  );
}