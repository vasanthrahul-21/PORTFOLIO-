import React from 'react';
import { PERSONAL_INFO } from '../data/constants';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          VR.
        </div>
        <p className="text-slate-500 text-sm font-medium">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm font-bold text-slate-600 dark:text-slate-400">
          <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};
