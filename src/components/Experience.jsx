import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaExternalLinkAlt } from 'react-icons/fa';
import { internships } from '../data/internships';
import { PERSONAL_INFO } from '../data/constants';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-slate-100/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Internships */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg">
                <FaBriefcase size={24} />
              </div>
              <h2 className="text-3xl font-bold">Work Experience</h2>
            </div>

            <div className="space-y-12">
              {internships.map((job, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-blue-600/20"
                >
                  <div className="absolute top-0 left-[-9px] w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-900" />
                  <div className="glass p-8 rounded-3xl">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <img src={job.logo} alt={job.company} className="w-12 h-12 object-contain rounded-lg p-1 bg-white" />
                        <div>
                          <h3 className="text-xl font-bold">{job.role}</h3>
                          <p className="text-blue-600 font-semibold">{job.company}</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full h-fit">
                        {job.duration}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">{job.description}</p>
                    {job.points && job.points.length > 0 && (
                      <ul className="list-disc pl-5 mb-6 text-slate-600 dark:text-slate-400 text-sm space-y-2">
                        {job.points.map((point, pIdx) => (
                          <li key={pIdx}>{point}</li>
                        ))}
                      </ul>
                    )}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {job.skillsLearned.map((skill) => (
                        <span key={skill} className="text-xs font-medium px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <a
                      href={job.certificateLink}
                      className="text-sm font-bold text-blue-600 flex items-center gap-2 hover:underline"
                    >
                      View Certificate <FaExternalLinkAlt size={12} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-indigo-600 rounded-2xl text-white shadow-lg">
                <FaGraduationCap size={24} />
              </div>
              <h2 className="text-3xl font-bold">Education</h2>
            </div>

            <div className="space-y-12">
              {PERSONAL_INFO.education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-indigo-600/20"
                >
                  <div className="absolute top-0 left-[-9px] w-4 h-4 bg-indigo-600 rounded-full border-4 border-white dark:border-slate-900" />
                  <div className="glass p-8 rounded-3xl">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                        <p className="text-indigo-600 font-semibold">{edu.college}</p>
                        <p className="text-xs text-slate-400 font-medium">{edu.location}</p>
                      </div>
                      <span className="text-xs font-bold px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 rounded-full h-fit">
                        {edu.duration}
                      </span>
                    </div>
                    {edu.cgpa !== 'Completed' && (
                      <div className="mb-6">
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">CGPA: </span>
                        <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">{edu.cgpa}</span>
                      </div>
                    )}
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Core Coursework</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <span key={course} className="text-xs font-medium px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded-full">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
