import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-slate-100/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Proficiency</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl"
            >
              <h3 className="text-xl font-bold mb-6 text-blue-600">{category.category}</h3>
              <div className="space-y-6">
                {category.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        <skill.icon className="text-2xl text-slate-700 dark:text-slate-300" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-tighter">
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level === 'Advanced' ? '90%' : skill.level === 'Intermediate' ? '70%' : '40%' }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-blue-600 to-indigo-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
