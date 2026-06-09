
import React from 'react';

import awsPdf from '../assets/aws.pdf.pdf';
import simplilearnPdf from '../assets/simplilearn.pdf.pdf';
import teammanagementPdf from '../assets/teammanagement.pdf.pdf';
import edurekaPdf from '../assets/edureka.pdf.pdf';
import tatacruciblePdf from '../assets/tatacrucible.pdf.pdf';
import hpPdf from '../assets/hp.pdf.pdf';
import oopsPdf from '../assets/oops.pdf.pdf';
import pythonPdf from '../assets/python.pdf.pdf';

export default function Certifications() {

  const handleDownload = (fileUrl, downloadName) => {
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = downloadName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const mainCerts = [
    { 
      title: "Fundamentals of Analytics on AWS - Part 1 & 2", 
      issuer: "AWS Training & Certification", 
      date: "Issued May 2026", 
      id: "10270756", 
      file: awsPdf, 
      downloadName: "Himanshu_AWS_Analytics.pdf"
    },
    { 
      title: "Introduction to Data Analytics", 
      issuer: "Simplilearn", 
      date: "Issued May 2026", 
      id: "10270756", 
      file: simplilearnPdf, 
      downloadName: "Himanshu_Simplilearn_Analytics.pdf"
    },
    { 
      title: "Leadership Skills and Applied Team Management", 
      issuer: "Alison", 
      date: "Issued May 2026", 
      id: "58644426", 
      file: teammanagementPdf, 
      downloadName: "Himanshu_Alison_Leadership.pdf"
    },
    { 
      title: "Full Stack Web Development", 
      issuer: "Edureka", 
      date: "Issued Nov 2024", 
      id: "EDR-59642", 
      file: edurekaPdf, 
      downloadName: "Himanshu_Edureka_MERN_Stack.pdf"
    }
  ];

  const subCerts = [
    { 
      title: "TATA Crucible Corporate Quiz", 
      issuer: "Unstop Participation", 
      file: tatacruciblePdf, 
      downloadName: "Himanshu_TATA_Crucible.pdf"
    },
    { 
      title: "Effective Leadership Mastery", 
      issuer: "HP Academy Studies", 
      file: hpPdf, 
      downloadName: "Himanshu_HP_Leadership.pdf"
    },
    { 
      title: "Basic Python Programming Specialization", 
      issuer: "Great Learning Academy", 
      file: pythonPdf,
      downloadName: "Himanshu_Python_Programming.pdf"
    },
    { 
      title: "OOPs via C++ Core Methodology", 
      issuer: "Great Learning Academy", 
      file: oopsPdf, 
      downloadName: "Himanshu_OOPS_C++.pdf"
    }
  ];

  return (
    <section id="certifications" className="text-left py-2">
      <h2 className="text-xl font-bold uppercase tracking-wider text-blue-900 border-b border-gray-200 pb-2 mb-6">
        Licenses & Certifications
      </h2>

      {/* Main Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {mainCerts.map((cert, index) => (
          <div key={index} className="bg-white/80 p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <h3 className="font-bold text-sm text-slate-800 leading-snug">{cert.title}</h3>
              <p className="text-xs text-blue-600 font-semibold mt-1">{cert.issuer}</p>
              <p className="text-[11px] text-slate-400 mt-0.5">{cert.date} {cert.id && `| ID: ${cert.id}`}</p>
            </div>
            <div className="mt-4 flex justify-end">
              <button 
                onClick={() => handleDownload(cert.file, cert.downloadName)}
                className="px-4 py-1.5 bg-[#1e70e6] hover:bg-[#155cb4] text-white rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95"
              >
                Download 📥
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Sub-Certificates List */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Additional Training & Badges</h3>
        {subCerts.map((cert, index) => (
          <div key={index} className="bg-white/60 p-3 rounded-xl border border-slate-100 flex items-center justify-between hover:bg-white transition-all">
            <div className="flex-1">
              <span className="font-semibold text-xs text-slate-700 block sm:inline">{cert.title}</span>
              <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-md sm:ml-2 font-medium mt-1 sm:mt-0 inline-block">{cert.issuer}</span>
            </div>
            <button 
              onClick={() => handleDownload(cert.file, cert.downloadName)}
              className="px-3 py-1 bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-[#1e70e6] rounded-lg text-[11px] font-bold transition-all border border-slate-200/60 shadow-sm active:scale-95 ml-4"
            >
              Download 📥
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
