// import React, { useState, useRef } from 'react';
// import html2canvas from 'html2canvas';
// import { jsPDF } from 'jspdf';

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Education from "./components/Education";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Experience from "./components/Experience";
// import Certifications from "./components/Certifications";
// import Contact from "./components/Contact";
// import ResumeTemplate from "./components/ResumeTemplate";

// export default function App() {
//   const [isDownloading, setIsDownloading] = useState(false);
//   const hiddenPrintRef = useRef(null); 

//   const downloadResume = async () => {
//     setIsDownloading(true);
//     try {
//       const element = hiddenPrintRef.current;
//       if (!element) {
//         alert("Print Engine Layer Missing!");
//         setIsDownloading(false);
//         return;
//       }

//       const canvas = await html2canvas(element, {
//         scale: 2, 
//         useCORS: true,
//         logging: false,
//         backgroundColor: "#ffffff",
//         windowWidth: 794,  
//         windowHeight: 1123 
//       });

//       const imgData = canvas.toDataURL('image/jpeg', 1.0);
//       const pdf = new jsPDF({
//         orientation: 'portrait',
//         unit: 'mm',
//         format: 'a4'
//       });

//       const imgWidth = 210; 
//       const imgHeight = (canvas.height * imgWidth) / canvas.width;

//       pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
//       pdf.save('Himanshu_Pratap_Singh_Resume.pdf');
//     } catch (error) {
//       console.error("PDF Generation Error:", error);
//       alert("Something went wrong while generating PDF!");
//     }
//     setIsDownloading(false);
//   };

//   const sections = ["home", "about", "skills", "experience", "projects", "education", "certifications", "contact"];

//   return (
//     // फोटो जैसा लाइट-थीम बैकग्राउंड और डार्क-स्लेट टेक्स्ट ताकि कंटेंट एकदम साफ़ दिखे
//     <div className="min-h-screen bg-[#f1f3f7] text-[#1e293b] font-sans antialiased selection:bg-[#3b82f6] selection:text-white">
      
//       {/* फोटो जैसी सॉफ्ट पेस्टल बैकग्राउंड लाइट्स और एम्बिएंट शेप्स */}
//       <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
//         <div className="absolute top-[-10%] left-[-5%] w-[45vw] h-[45vw] bg-[radial-gradient(circle,rgba(59,130,246,0.08)_0%,rgba(0,0,0,0)_70%)]"></div>
//         <div className="absolute bottom-[-10%] right-[-5%] w-[45vw] h-[45vw] bg-[radial-gradient(circle,rgba(147,51,234,0.06)_0%,rgba(0,0,0,0)_70%)]"></div>
//       </div>

//       {/* हिडन प्रिंटर ब्लॉक - PDF के लिए हमेशा बैकग्राउंड में रहेगा */}
//       <div className="absolute left-[-9999px] top-[-9999px] pointer-events-none">
//         <div ref={hiddenPrintRef} style={{ width: '210mm', minHeight: '297mm' }}>
//           <ResumeTemplate />
//         </div>
//       </div>

//       <div className="relative z-10">
//         <Navbar 
//           sections={sections}
//           activeSection="home"
//           scrollTo={(id) => {
//             const element = document.getElementById(id);
//             if (element) element.scrollIntoView({ behavior: 'smooth' });
//           }}
//           onDownloadResume={downloadResume}
//         />
        
//         {/* फोटो जैसा स्प्लिट डैशबोर्ड लेआउट */}
//         <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
//           {/* LEFT PANEL: Live Resume Engine (Soft Glassmorphism White) */}
//           <div className="lg:col-span-5 bg-white/75 backdrop-blur-xl border border-white rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex flex-col sticky top-28 h-[calc(100vh-140px)]">
//             <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
//               <div className="flex items-center space-x-2">
//                 <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
//                 <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
//                 <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
//                 <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest ml-2">LIVE RESUME ENGINE</h3>
//               </div>
//               <button 
//                 onClick={downloadResume}
//                 disabled={isDownloading}
//                 className="px-4 py-2 rounded-xl bg-blue-600 text-white font-extrabold text-xs uppercase tracking-wider hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-[0_4px_12px_rgba(59,130,246,0.3)] disabled:opacity-50"
//               >
//                 {isDownloading ? "GENERATING..." : "DOWNLOAD PDF 📥"}
//               </button>
//             </div>

//             {/* लाइव प्रीव्यू कंटेनर (लाइट मोड के साथ) */}
//             <div className="flex-1 overflow-y-auto rounded-xl border border-slate-100 bg-slate-50/50 p-4 custom-scrollbar flex justify-center items-start shadow-inner">
//               <div className="origin-top scale-[0.55] sm:scale-[0.7] md:scale-[0.8] lg:scale-[0.52] xl:scale-[0.65] transform transition-transform duration-300 bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100">
//                 <ResumeTemplate />
//               </div>
//             </div>
//           </div>

//           {/* RIGHT PANEL: साफ़ और ब्राइट पोर्टफोलियो फ़ीड */}
//           <div className="lg:col-span-7 space-y-12 h-[calc(100vh-140px)] overflow-y-auto pr-2 custom-scrollbar">
//             <div id="home" className="bg-white/60 backdrop-blur-md rounded-2xl border border-white p-2 shadow-sm"><Hero onDownloadClick={downloadResume} /></div>
//             <div id="about" className="bg-white/60 backdrop-blur-md rounded-2xl border border-white p-2 shadow-sm"><About /></div>
//             <div id="skills" className="bg-white/60 backdrop-blur-md rounded-2xl border border-white p-2 shadow-sm"><Skills /></div>
//             <div id="experience" className="bg-white/60 backdrop-blur-md rounded-2xl border border-white p-2 shadow-sm"><Experience /></div>
//             <div id="projects" className="bg-white/60 backdrop-blur-md rounded-2xl border border-white p-2 shadow-sm"><Projects /></div>
//             <div id="education" className="bg-white/60 backdrop-blur-md rounded-2xl border border-white p-2 shadow-sm"><Education /></div>
//             <div id="certifications" className="bg-white/60 backdrop-blur-md rounded-2xl border border-white p-2 shadow-sm"><Certifications /></div>
//             <div id="contact" className="bg-white/60 backdrop-blur-md rounded-2xl border border-white p-2 shadow-sm"><Contact /></div>
//           </div>

//         </main>
//       </div>
//     </div>
//   );
// }

// -----------------------------------------------------------------------------

// import React, { useState, useRef } from 'react';
// import html2canvas from 'html2canvas';
// import { jsPDF } from 'jspdf';

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Education from "./components/Education";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Experience from "./components/Experience";
// import Certifications from "./components/Certifications";
// import Contact from "./components/Contact";
// import ResumeTemplate from "./components/ResumeTemplate";

// export default function App() {
//   const [isDownloading, setIsDownloading] = useState(false);
//   const hiddenPrintRef = useRef(null); 

//   const downloadResume = async () => {
//     setIsDownloading(true);
//     try {
//       const element = hiddenPrintRef.current;
//       if (!element) return;

//       const canvas = await html2canvas(element, {
//         scale: 2, 
//         useCORS: true,
//         logging: false,
//         backgroundColor: "#ffffff",
//         windowWidth: 794,  
//         windowHeight: 1123 
//       });

//       const imgData = canvas.toDataURL('image/jpeg', 1.0);
//       const pdf = new jsPDF({
//         orientation: 'portrait',
//         unit: 'mm',
//         format: 'a4'
//       });

//       pdf.addImage(imgData, 'JPEG', 0, 0, 210, (canvas.height * 210) / canvas.width);
//       pdf.save('Himanshu_Pratap_Singh_Resume.pdf');
//     } catch (error) {
//       console.error(error);
//     }
//     setIsDownloading(false);
//   };

//   const sections = ["home", "about", "skills", "experience", "projects", "education", "certifications", "contact"];

//   return (
//     <div className="min-h-screen relative overflow-hidden">
      
//       {/* फोटो वाले बैकग्राउंड एम्बिएंट कलर्स */}
//       <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
//         <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-glow-purple"></div>
//         <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-glow-blue"></div>
//       </div>

//       {/* बैकएंड प्रिंट इंजन लेयर */}
//       <div className="absolute left-[-9999px] top-[-9999px] pointer-events-none">
//         <div ref={hiddenPrintRef}>
//           <ResumeTemplate />
//         </div>
//       </div>

//       <div className="relative z-10">
//         <Navbar 
//           sections={sections}
//           activeSection="home"
//           scrollTo={(id) => {
//             const element = document.getElementById(id);
//             if (element) element.scrollIntoView({ behavior: 'smooth' });
//           }}
//           onDownloadResume={downloadResume}
//         />
        
//         {/* फोटो जैसा परफेक्ट 2-पैनल स्प्लिट डैशबोर्ड */}
//         <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
//           {/* LEFT PANEL: Live Resume Engine (Frosted Glass Container) */}
//           <div className="lg:col-span-5 glass-card rounded-3xl p-6 flex flex-col sticky top-28 h-[calc(100vh-140px)] transition-all duration-300">
//             <div className="flex items-center justify-between mb-4 border-b border-black/5 pb-3">
//               <div className="flex items-center space-x-2">
//                 <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
//                 <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
//                 <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
//                 <h3 className="text-xs font-black text-slate-700 uppercase tracking-widest ml-2">LIVE RESUME ENGINE</h3>
//               </div>
//               <button 
//                 onClick={downloadResume}
//                 disabled={isDownloading}
//                 className="px-4 py-2 rounded-xl bg-[#1e70e6] hover:bg-[#155cb4] text-white font-extrabold text-xs uppercase tracking-wider active:scale-95 transition-all duration-200 shadow-md shadow-blue-500/20 disabled:opacity-50"
//               >
//                 {isDownloading ? "GENERATING..." : "DOWNLOAD PDF 📥"}
//               </button>
//             </div>

//             {/* रिज़्यूमे लाइव प्रीव्यू कंटेनर */}
//             <div className="flex-1 overflow-y-auto rounded-2xl border border-black/5 bg-white/40 p-4 custom-scrollbar flex justify-center items-start shadow-inner">
//               <div className="origin-top scale-[0.55] sm:scale-[0.7] md:scale-[0.8] lg:scale-[0.52] xl:scale-[0.65] transform transition-transform duration-300 bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100">
//                 <ResumeTemplate />
//               </div>
//             </div>
//           </div>

//           {/* RIGHT PANEL: फोटो जैसी फ्रोस्टेड ग्लास कॉम्पोनेंट स्क्रीन्स */}
//           <div className="lg:col-span-7 space-y-8 h-[calc(100vh-140px)] overflow-y-auto pr-2 custom-scrollbar">
//             <div id="home" className="glass-card rounded-3xl p-4 transition-all duration-300"><Hero onDownloadClick={downloadResume} /></div>
//             <div id="about" className="glass-card rounded-3xl p-4 transition-all duration-300"><About /></div>
//             <div id="skills" className="glass-card rounded-3xl p-4 transition-all duration-300"><Skills /></div>
//             <div id="experience" className="glass-card rounded-3xl p-4 transition-all duration-300"><Experience /></div>
//             <div id="projects" className="glass-card rounded-3xl p-4 transition-all duration-300"><Projects /></div>
//             <div id="education" className="glass-card rounded-3xl p-4 transition-all duration-300"><Education /></div>
//             <div id="certifications" className="glass-card rounded-3xl p-4 transition-all duration-300"><Certifications /></div>
//             <div id="contact" className="glass-card rounded-3xl p-4 transition-all duration-300"><Contact /></div>
//           </div>

//         </main>
//       </div>
//     </div>
//   );
// }

// ---------------------------------------------------------------------------------

import React, { useState, useRef } from 'react';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from './components/contact';
import ResumeTemplate from "./components/ResumeTemplate";

export default function App() {
  // यह स्टेट तय करेगी कि प्रिंट मोड एक्टिव है या नहीं
  const [isPrintingMode, setIsPrintingMode] = useState(false);

  const downloadResume = () => {
    // स्टेप 1: पहले प्रिंट मोड को ऑन करो (ताकि बाकी सब गायब हो जाए)
    setIsPrintingMode(true);
    
    // स्टेप 2: React को डोम (DOM) अपडेट करने के लिए एक छोटा सा मिलीसेकंड का टाइमआउट दो
    setTimeout(() => {
      window.print();
      // स्टेप 3: प्रिंट डायलॉग बंद होते ही सब कुछ वापस नॉर्मल कर दो
      setIsPrintingMode(false);
    }, 100);
  };

  const sections = ["home", "about", "skills", "experience", "projects", "education", "certifications", "contact"];

  // 🖨️ अगर प्रिंट मोड ऑन है, तो स्क्रीन पर सिर्फ़ और सिर्फ़ प्योर रिज़्यूमे दिखेगा, पूरी वेबसाइट गायब!
  if (isPrintingMode) {
    return (
      <div className="bg-white min-h-screen w-full flex justify-center items-start p-0 m-0">
        <ResumeTemplate />
      </div>
    );
  }

  // 🌐 यह आपकी नॉर्मल वेबसाइट है जो यूज़र को दिखेगी
  return (
    <div className="min-h-screen relative overflow-hidden">
      
      {/* बैकग्राउंड एम्बिएंट कलर्स */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-glow-purple"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-glow-blue"></div>
      </div>

      <div className="relative z-10">
        <Navbar 
          sections={sections}
          activeSection="home"
          scrollTo={(id) => {
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}
          onDownloadResume={downloadResume}
        />
        
        {/* 2-पैनल स्प्लिट डैशबोर्ड */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT PANEL: Live Resume Engine */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-6 flex flex-col sticky top-28 h-[calc(100vh-140px)]">
            <div className="flex items-center justify-between mb-4 border-b border-black/5 pb-3">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
                <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
                <h3 className="text-xs font-black text-slate-700 uppercase tracking-widest ml-2">LIVE RESUME ENGINE</h3>
              </div>
              <button 
                onClick={downloadResume}
                className="px-4 py-2 rounded-xl bg-[#1e70e6] hover:bg-[#155cb4] text-white font-extrabold text-xs uppercase tracking-wider active:scale-95 transition-all duration-200 shadow-md shadow-blue-500/20"
              >
                DOWNLOAD PDF 📥
              </button>
            </div>

            {/* रिज़्यूमे लाइव प्रीव्यू कंटेनर */}
            <div className="flex-1 overflow-y-auto rounded-2xl border border-black/5 bg-white/40 p-4 custom-scrollbar flex justify-center items-start shadow-inner">
              <div className="origin-top scale-[0.55] sm:scale-[0.7] md:scale-[0.8] lg:scale-[0.52] xl:scale-[0.65] transform transition-transform duration-300 bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100">
                <ResumeTemplate />
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: पोर्टफोलियो फ़ीड */}
          <div className="lg:col-span-7 space-y-8 h-[calc(100vh-140px)] overflow-y-auto pr-2 custom-scrollbar">
            <div id="home" className="glass-card rounded-3xl p-4"><Hero onDownloadClick={downloadResume} /></div>
            <div id="about" className="glass-card rounded-3xl p-4"><About /></div>
            <div id="skills" className="glass-card rounded-3xl p-4"><Skills /></div>
            <div id="experience" className="glass-card rounded-3xl p-4"><Experience /></div>
            <div id="projects" className="glass-card rounded-3xl p-4"><Projects /></div>
            <div id="education" className="glass-card rounded-3xl p-4"><Education /></div>
            <div id="certifications" className="glass-card rounded-3xl p-4"><Certifications /></div>
            <div id="contact" className="glass-card rounded-3xl p-4"><Contact /></div>
          </div>

        </main>
      </div>
    </div>
  );
}