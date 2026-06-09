import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-6 border-t border-slate-200/60">
      <h2 className="text-xs font-black text-slate-400 tracking-widest uppercase mb-4">About Me</h2>
      <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium max-w-4xl">
        I'm Himanshu Pratap Singh, a Full-Stack Developer based in Jaipur, Rajasthan. I'm passionate about building scalable web applications using the MERN stack. Currently working in R&D at Omsara Industries Private Limited, I love turning ideas into real, working products with clean code and great user experience.
      </p>
      
      {/* 4 Cards Grid View */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <div className="text-blue-500 font-bold mb-1">⚛️</div>
          <h3 className="text-xs font-bold text-slate-900">Frontend</h3>
          <p className="text-[10px] text-slate-400 mt-1">React, JS, HTML, CSS, Bootstrap</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <div className="text-emerald-500 font-bold mb-1">🗄️</div>
          <h3 className="text-xs font-bold text-slate-900">Backend</h3>
          <p className="text-[10px] text-slate-400 mt-1">Node.js, Express, PHP, REST APIs</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <div className="text-pink-500 font-bold mb-1">🎨</div>
          <h3 className="text-xs font-bold text-slate-900">UI/UX</h3>
          <p className="text-[10px] text-slate-400 mt-1">Figma, Responsive Design</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <div className="text-amber-500 font-bold mb-1">🛠️</div>
          <h3 className="text-xs font-bold text-slate-900">Tools</h3>
          <p className="text-[10px] text-slate-400 mt-1">Git, GitHub, MS Office</p>
        </div>
      </div>
    </section>
  );
}