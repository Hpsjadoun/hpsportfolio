import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-6 space-y-6">
      <h2 className="text-xs font-black text-slate-400 tracking-widest uppercase mb-6">Contact Me</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center flex flex-col items-center justify-center shadow-sm">
          <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm mb-3">in</div>
          <h3 className="text-xs font-bold text-slate-900">LinkedIn</h3>
          <p className="text-[10px] text-slate-400 mt-0.5">Click to open profile</p>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="mt-4 px-4 py-1.5 bg-blue-50 text-blue-600 border border-blue-100 rounded-xl text-[10px] font-bold block text-center">Connect with me</a>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center flex flex-col items-center justify-center shadow-sm">
          <div className="w-10 h-10 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center text-sm mb-3">✉️</div>
          <h3 className="text-xs font-bold text-slate-900">Email</h3>
          <p className="text-[10px] text-slate-400 mt-0.5">jadounhimanshu5656@gmail.com</p>
          <a href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=CllgCJqSvjPkQQDXqPxLKMqJPBkxnLvnhXLDSRtFpmRvGPGBBHzxLQXDrSXtPSKvNNbjgtlSLsq" target="_blank" rel="noreferrer" className="mt-4 px-4 py-1.5 bg-slate-50 text-slate-700 border border-slate-200 rounded-xl text-[10px] font-bold block text-center">Send a mail</a>
        </div>
      </div>
      
      {/* Lower Profile Box Widget */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-4 flex items-center gap-4 mt-8 shadow-sm">
        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-xs font-black">HPS</div>
        <div>
          <h4 className="text-xs font-bold text-slate-900">Himanshu Pratap Singh</h4>
          <p className="text-[10px] text-slate-500 font-medium mt-0.5">Full-Stack Developer · Jaipur, Rajasthan</p>
          <span className="text-[9px] text-emerald-600 font-bold flex items-center gap-1 mt-1">✓ Open to opportunities</span>
        </div>
      </div>
    </section>
  );
}