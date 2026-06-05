import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaExternalLinkAlt, FaCertificate } from 'react-icons/fa';
import { certifications } from '../data/certifications';
import { achievements } from '../data/achievements';

export const CertsAndAwards = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Certifications */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-cyan-600 rounded-2xl text-white shadow-lg">
                <FaCertificate size={24} />
              </div>
              <h2 className="text-3xl font-bold">Certifications</h2>
            </div>
            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left"
                >
                  <img src={cert.logo} alt={cert.organization} className="w-14 h-14 object-contain bg-slate-50 rounded-xl p-2 shrink-0" />
                  <div className="flex-grow w-full">
                    <h3 className="font-bold text-lg leading-tight mb-1">{cert.name}</h3>
                    <p className="text-sm font-medium text-cyan-600 mb-2">{cert.organization}</p>
                    <div className="flex justify-between items-center mt-4 sm:mt-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">{cert.date}</span>
                      <a href={cert.certificateLink} target="_blank" rel="noreferrer" className="text-blue-600 hover:scale-110 transition-transform p-1">
                        <FaExternalLinkAlt size={14} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-amber-500 rounded-2xl text-white shadow-lg">
                <FaAward size={24} />
              </div>
              <h2 className="text-3xl font-bold">Achievements</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {achievements.map((ach, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-2xl relative overflow-hidden group"
                >
                  <span className="absolute top-4 right-4 text-[10px] font-bold text-amber-600 uppercase tracking-widest bg-amber-100 dark:bg-amber-900/30 px-2 py-1 rounded">
                    {ach.type}
                  </span>
                  <h3 className="font-bold text-lg mb-3 mt-4">{ach.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{ach.description}</p>
                  <p className="text-xs font-bold text-slate-500">{ach.organization} • {ach.date}</p>
                  <div className="absolute -bottom-6 -right-6 text-amber-500/10 group-hover:text-amber-500/20 transition-colors">
                    <FaAward size={80} />
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
