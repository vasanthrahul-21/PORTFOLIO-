import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEye } from 'react-icons/fa';
import resumePdf from '../assets/Vasanth Rahul_profile.pdf';

export const Resume = () => {
  return (
    <section id="resume" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass p-8 md:p-16 rounded-[3rem] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 blur-[100px] -z-10" />

          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to work <br /><span className="text-blue-600">together?</span></h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-xl">
                I'm currently looking for new opportunities. Feel free to view or download my resume to see if I'm a good fit for your team.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <motion.a
                  href={resumePdf}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center gap-3 shadow-xl shadow-blue-500/30 hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  <FaDownload /> Download Resume
                </motion.a>
              </div>
            </div>

            <div className="flex-1 w-full max-w-md">
              <a 
                href={resumePdf} 
                target="_blank" 
                rel="noreferrer" 
                className="block aspect-[1/1.4] glass rounded-2xl border-2 border-slate-200/50 dark:border-slate-800/50 p-2 shadow-2xl relative group cursor-pointer overflow-hidden"
              >
                <iframe 
                  src={`${resumePdf}#toolbar=0&navpanes=0&scrollbar=0`} 
                  className="w-full h-full rounded-xl border-0 pointer-events-none bg-white" 
                  title="Resume Preview" 
                />
                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white dark:bg-slate-900 p-4 rounded-full shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-300 flex items-center gap-2 font-bold text-blue-600 text-sm">
                    <FaEye size={18} /> View Full Resume
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
