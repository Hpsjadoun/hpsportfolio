import React from 'react';

export default function Projects() {
  const projectsList = [
    { title: "Real-Estate Platform", tech: ["React", "CSS", "JavaScript"], desc: "A modern property listing web interface with a beautiful and fluid UI built entirely on React Frontend.", link: "https://88f330b4.real-state-front.pages.dev/" },
    { title: "Jaipur Visiting Places", tech: ["HTML", "CSS", "JavaScript"], desc: "A website showcasing popular tourist and visiting places in Jaipur with detailed information.", link: "https://hpsjadoun.github.io/VisitedPlaceHPSjadoun/" },
    { title: "Shine App Website", tech: ["React", "CSS", "Bootstrap"], desc: "A modern app landing page for Shine with clean UI and responsive design.", link: "https://hpsjadoun.github.io/ShineAppWeb/" },
    { title: "Restaurant Landing Page", tech: ["HTML", "CSS", "JavaScript"], desc: "Attractive restaurant website with menu display, hero section, and responsive layout.", link: "https://hpsjadoun.github.io/Restaurant-Landing-Page/" }
  ];

  return (
    <section id="projects" className="py-6 border-t border-slate-200/60">
      <h2 className="text-xs font-black text-slate-400 tracking-widest uppercase mb-6">Projects</h2>
      <div className="space-y-4">
        {projectsList.map((p, i) => (
          <div key={i} className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-sm relative flex flex-col justify-between group">
            <div>
              <div className="flex gap-1">
                {p.tech.map((t, idx) => (
                  <span key={idx} className="text-[9px] bg-slate-100 text-slate-500 font-bold px-2 py-0.5 rounded">{t}</span>
                ))}
              </div>
              <h3 className="text-sm font-bold text-slate-900 mt-2">{p.title}</h3>
              <p className="text-xs text-slate-500 mt-1.5">{p.desc}</p>
            </div>
            <a href={p.link} target="_blank" rel="noreferrer" className="absolute top-5 right-5 text-slate-400 group-hover:text-blue-600 font-bold text-xs transition-colors">↗</a>
          </div>
        ))}
      </div>
    </section>
  );
}