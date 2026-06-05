import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/constants';
import aboutImg from '../assets/image2.png';

export const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              {PERSONAL_INFO.about}
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              I specialize in creating interactive and dynamic user interfaces with a focus on performance and accessibility. My journey in tech is driven by curiosity and a commitment to continuous learning.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { label: 'Projects', value: PERSONAL_INFO.stats.projects },
                { label: 'Certs', value: PERSONAL_INFO.stats.certifications },
                { label: 'Interns', value: PERSONAL_INFO.stats.internships },
                { label: 'Skills', value: PERSONAL_INFO.stats.skills },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass p-4 rounded-2xl text-center"
                >
                  <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square glass rounded-3xl overflow-hidden p-3 transform -rotate-3">
              <img
                src={aboutImg}
                alt="Tech Stack"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl z-[-1]" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl z-[-1]" />
          </div>
        </div>
      </div>
    </section>
  );
};
