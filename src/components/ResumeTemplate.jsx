// import React from 'react';

// export default function ResumeTemplate() {
//   return (
//     <div className="w-[210mm] min-h-[297mm] bg-white text-black p-[15mm] font-serif leading-relaxed box-sizing shadow-2xl mx-auto text-left">
//       {/* Header Section */}
//       <div className="text-center border-b-2 border-black pb-4 mb-6">
//         <h1 className="text-3xl font-bold tracking-wide uppercase mb-1">Himanshu Pratap Singh</h1>
//         <p className="text-sm font-sans text-gray-700 tracking-medium">
//           MERN Stack Developer & Frontend Specialist | Research & Development
//         </p>
//         <p className="text-xs font-sans text-gray-500 mt-1">
//           Jaipur, Rajasthan, India | Email: himanshu@example.com | GitHub: github.com/himanshu
//         </p>
//       </div>

//       {/* Professional Summary */}
//       <div className="mb-6">
//         <h2 className="text-base font-bold uppercase tracking-wider border-b border-gray-400 mb-2">Profile Summary</h2>
//         <p className="text-sm text-gray-800 font-serif">
//           Highly motivated Full Stack Developer with specialized certification in the MERN Stack. Experienced in building responsive frontend architectures using ReactJS and optimizing modern web dependencies. Complemented by professional research and development experience in industrial specialty raw materials.
//         </p>
//       </div>

//       {/* Technical Skills */}
//       <div className="mb-6">
//         <h2 className="text-base font-bold uppercase tracking-wider border-b border-gray-400 mb-2">Technical Skills</h2>
//         <div className="grid grid-cols-2 gap-y-1 text-sm font-sans text-gray-800">
//           <div><strong>Frontend Architectures:</strong> ReactJS, JavaScript (ES6+), HTML5, CSS3</div>
//           <div><strong>Backend & Database:</strong> NodeJS, ExpressJS, MongoDB</div>
//           <div><strong>Tools & Auditing:</strong> Vite, Tailwind CSS, Git, Snyk Security</div>
//           <div><strong>Core Competencies:</strong> RESTful APIs, MERN Infrastructure</div>
//         </div>
//       </div>

//       {/* Professional Experience */}
//       <div className="mb-6">
//         <h2 className="text-base font-bold uppercase tracking-wider border-b border-gray-400 mb-2">Professional Experience</h2>
        
//         <div className="mb-3">
//           <div className="flex justify-between font-sans text-sm font-semibold">
//             <span>Research & Development Associate</span>
//             <span>2025 - Present</span>
//           </div>
//           <div className="italic text-xs font-sans text-gray-600">Omsara Industries Private Limited</div>
//           <ul className="list-disc list-inside text-xs text-gray-800 mt-1 space-y-1">
//             <li>Sourced and evaluated UV Curable Raw Materials (monomers/oligomers) for industrial sheet applications.</li>
//             <li>Conducted specialized laboratory trials analyzing performance matrices of specialty chemical additives.</li>
//           </ul>
//         </div>
//       </div>

//       {/* Core Projects */}
//       <div className="mb-6">
//         <h2 className="text-base font-bold uppercase tracking-wider border-b border-gray-400 mb-2">Key Projects</h2>
        
//         <div className="mb-3">
//           <div className="flex justify-between font-sans text-sm font-semibold">
//             <span>Premium MERN Stack Portfolio Dashboard</span>
//             <span>2026</span>
//           </div>
//           <p className="text-xs text-gray-800 mt-1">
//             Engineered a live-rendering portfolio with a persistent sidebar container hosting a canvas-based client-side PDF export system. Configured using Vite, PostCSS, and Tailwind CSS v4 layers.
//           </p>
//         </div>
//       </div>

//       {/* Professional Certifications */}
//       <div className="mb-6">
//         <h2 className="text-base font-bold uppercase tracking-wider border-b border-gray-400 mb-2">Certifications</h2>
//         <ul className="list-disc list-inside text-xs font-sans text-gray-800 space-y-1">
//           <li>Professional Certification in Web Development (MERN Stack) — EduBridge</li>
//           <li>Advanced Python Programming Specialization — Great Learning Academy</li>
//           <li>Professional Technical Training Modules — Infosys Springboard</li>
//         </ul>
//       </div>

//       {/* Education */}
//       <div>
//         <h2 className="text-base font-bold uppercase tracking-wider border-b border-gray-400 mb-2">Education</h2>
//         <div className="flex justify-between font-sans text-sm font-semibold">
//           <span>Bachelor of Science / Professional Training Studies</span>
//           <span>Graduation: 2024</span>
//         </div>
//         <p className="text-xs text-gray-600 font-sans">Technical Institution Tracker Services</p>
//       </div>
//     </div>
//   );
// }

// --------------------------------------------------------------------------------------

import React from 'react';

export default function ResumeTemplate() {
  return (
    <div className="w-[210mm] min-h-[297mm] bg-white text-black p-[20mm] font-serif leading-relaxed box-sizing text-left mx-auto">
      
      {/* 1. Header Section */}
      <div className="text-center border-b-2 border-black pb-4 mb-6">
        <h1 className="text-3xl font-bold tracking-wide uppercase mb-1">Himanshu Pratap Singh</h1>
        <p className="text-sm font-sans text-gray-700 tracking-medium">
          Full-Stack Developer
        </p>
        <p className="text-xs font-sans text-gray-500 mt-1">
          Jaipur, Rajasthan, India | Email: jadounhimanshu5656@gmail.com |  <a href='https://www.linkedin.com/in/himanshu-pratap-singh-611b24289/'>LinkedIn</a>
        </p>
      </div>

      {/* 2. Profile Summary */}
      <div className="mb-6">
        <h2 className="text-sm font-bold uppercase tracking-wider border-b border-gray-400 mb-2 text-blue-900">Profile Summary</h2>
        <p className="text-xs text-gray-800 font-serif text-justify">
          Highly motivated Full Stack Developer based in Jaipur, Rajasthan, passionate about building scalable web applications using the MERN stack. Currently working in Research & Development (R&D) at Omsara Industries Private Limited, blending clean code, frontend architectures, and industrial specialty raw material evaluations.
        </p>
      </div>

      {/* 3. Technical Skills (हूबहू तुम्हारी वेबसाइट वाले सारे स्किल्स!) */}
      <div className="mb-6">
        <h2 className="text-sm font-bold uppercase tracking-wider border-b border-gray-400 mb-2 text-blue-900">Technical Skills</h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs font-sans text-gray-800">
          <div><strong>Languages & Frontend:</strong> JavaScript, React, HTML5 & CSS, Bootstrap</div>
          <div><strong>Backend & PHP:</strong> PHP, C/C++ OOPs, SQL</div>
          <div><strong>Design & Tools:</strong> UI/UX Figma, Git & GitHub</div>
          <div><strong>Industrial & Research:</strong> UV Curable Raw Materials, Specialty Additives</div>
        </div>
      </div>

      {/* 4. Professional Experience (वही जो तुमने वेबसाइट पर डाला है) */}
      <div className="mb-6">
        <h2 className="text-sm font-bold uppercase tracking-wider border-b border-gray-400 mb-2 text-blue-900">Work Experience</h2>
        
        {/* Experience 1 */}
        <div className="mb-3">
          <div className="flex justify-between font-sans text-xs font-bold text-gray-900">
            <span>Research & Development Associate</span>
            <span>2025 - Present</span>
          </div>
          <div className="italic text-xs font-sans text-blue-700">Omsara Industries Private Limited — Onsite</div>
          <ul className="list-disc list-inside text-xs text-gray-800 mt-1 space-y-1 pl-2">
            <li>Working in R&D on web technologies and building scalable applications using the MERN stack.</li>
            <li>Sourcing and evaluating UV Curable Raw Materials (monomers and oligomers) for industrial sheets.</li>
            <li>Conducting specialized laboratory trials to analyze the performance of specialty chemical additives.</li>
          </ul>
        </div>

        {/* Experience 2 */}
        <div className="mb-3">
          <div className="flex justify-between font-sans text-xs font-bold text-gray-900">
            <span>Web Development Intern</span>
            <span>3-Month Onsite</span>
          </div>
          <div className="italic text-xs font-sans text-blue-700">Dogma Soft, Jaipur</div>
          <ul className="list-disc list-inside text-xs text-gray-800 mt-1 space-y-1 pl-2">
            <li>Worked on frontend development utilizing HTML, CSS, and JavaScript.</li>
            <li>Gained hands-on experience in building responsive layouts and real-world web projects.</li>
          </ul>
        </div>
      </div>

      {/* 5. Key Projects (तुम्हारी वेबसाइट के चारों असली प्रोजेक्ट्स!) */}
      <div className="mb-6">
        <h2 className="text-sm font-bold uppercase tracking-wider border-b border-gray-400 mb-2 text-blue-900">Key Projects</h2>
        
        <div className="grid grid-cols-1 gap-3 text-xs">
          <div>
            <div className="flex justify-between font-sans font-bold text-gray-900">
              <span>Real-Estate Platform</span>
              <span>React, CSS, JavaScript</span>
            </div>
            <p className="text-gray-700 pl-2">A real estate web application built entirely on React Frontend with a beautiful and fluid UI.</p>
          </div>

          <div>
            <div className="flex justify-between font-sans font-bold text-gray-900">
              <span>Jaipur Visiting Places</span>
              <span>HTML, CSS, JavaScript</span>
            </div>
            <p className="text-gray-700 pl-2">A localized tourism guide web application featuring major attraction spots in Jaipur.</p>
          </div>

          <div>
            <div className="flex justify-between font-sans font-bold text-gray-900">
              <span>Shine App Website & Restaurant Landing Page</span>
              <span>Frontend Technologies</span>
            </div>
            <p className="text-gray-700 pl-2">Designed premium and responsive landing pages focused on modern UI/UX design components.</p>
          </div>
        </div>
      </div>

      {/* 6. Certifications (तुम्हारी सभी 8 सर्टिफिकेशन्स लाइन से!) */}
      <div className="mb-6">
        <h2 className="text-sm font-bold uppercase tracking-wider border-b border-gray-400 mb-2 text-blue-900">Licenses & Certifications</h2>
        <div className="grid grid-cols-1 gap-1 text-xs font-sans text-gray-800 pl-2">
          <div>• <strong>Fundamentals of Analytics on AWS - Part 1 & 2</strong> — AWS Training & Certification (May 2026)</div>
          <div>• <strong>Introduction to Data Analytics</strong> — Simplilearn (Issued May 2026 | ID: 10270756)</div>
          <div>• <strong>Leadership Skills and Applied Team Management</strong> — Alison (Issued May 2026 | ID: 58644426)</div>
          <div>• <strong>Full Stack Web Development</strong> — Edureka (Issued Nov 2024)</div>
          <div>• <strong>TATA Crucible Corporate Quiz</strong> — Unstop Participation</div>
          <div>• <strong>Effective Leadership & Basic Python Programming</strong> — Great Learning Academy</div>
          <div>• <strong>OOPs via C++</strong> — Great Learning Academy</div>
        </div>
      </div>

      {/* 7. Education (परफेक्ट टाइमलाइन) */}
      <div>
        <h2 className="text-sm font-bold uppercase tracking-wider border-b border-gray-400 mb-2 text-blue-900">Education & Qualification</h2>
        <div className="space-y-2 text-xs font-sans">
          <div className="flex justify-between font-bold">
            <span>Bachelor of Computer Application (BCA)</span>
            <span>2022 - 2025</span>
          </div>
          <div className="text-gray-600 pl-2">University of Rajasthan — Degree</div>

          <div className="flex justify-between font-bold pt-1">
            <span>Industrial Training Institute (ITI)</span>
            <span>2020 - 2022</span>
          </div>
          <div className="text-gray-600 pl-2">Sanganer, Jaipur — Diploma</div>

          <div className="flex justify-between font-bold pt-1">
            <span>Intermediate (12th) & High School (10th)</span>
            <span>2017 - 2020</span>
          </div>
          <div className="text-gray-600 pl-2">Rawat Public School, Jaipur & Uday Public School, Firozabad</div>
        </div>
      </div>

    </div>
  );
}