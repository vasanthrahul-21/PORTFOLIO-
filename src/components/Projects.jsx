import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaSearch } from 'react-icons/fa';
import { projects } from '../data/projects';
import { cn } from '../utils/cn';

const categories = ["All", "Frontend", "Full Stack", "Cyber Security", "AI/ML"];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group glass overflow-hidden rounded-3xl flex flex-col h-full"
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-600/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                    <a href={project.github} className="p-3 bg-white rounded-full text-blue-600 hover:scale-110 transition-transform">
                      <FaGithub size={20} />
                    </a>
                    <a href={project.live} className="p-3 bg-white rounded-full text-blue-600 hover:scale-110 transition-transform">
                      <FaExternalLinkAlt size={20} />
                    </a>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{project.name}</h3>
                    <span className="text-[10px] font-bold px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-md uppercase tracking-wider">
                      {project.duration}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-medium px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Key Features</h4>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {project.features.slice(0, 4).map((f, i) => (
                        <li key={i} className="text-[10px] text-slate-500 dark:text-slate-500 flex items-center gap-1.5 font-medium">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No projects found matching your criteria.
          </div>
        )}
      </div>
    </section>
  );
};
