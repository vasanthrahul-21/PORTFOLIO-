import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { PERSONAL_INFO } from '../data/constants';
import profileImg from '../assets/image1.jpg';
import resumePdf from '../assets/Vasanth Rahul_profile.pdf';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-2">Welcome to my portfolio</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{PERSONAL_INFO.name}</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg">
            {PERSONAL_INFO.role}. I build high-performance, beautiful, and accessible web applications.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <motion.a
              href={`tel:${PERSONAL_INFO.socials.phone}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Contact Me
            </motion.a>
            <motion.a
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              <FaDownload size={18} />
              Resume
            </motion.a>
          </div>

          <div className="flex gap-6">
            {[
              { icon: FaGithub, href: PERSONAL_INFO.socials.github },
              { icon: FaLinkedin, href: PERSONAL_INFO.socials.linkedin },
              { icon: FaEnvelope, href: `mailto:${PERSONAL_INFO.socials.email}` },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5 }}
                className="text-2xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="w-64 h-64 md:w-96 md:h-96 mx-auto relative z-10 rounded-3xl overflow-hidden glass p-4 rotate-3 hover:rotate-0 transition-transform duration-500">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover rounded-2xl scale-125 hover:scale-135 transition-transform duration-500"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-104 md:h-104 bg-blue-500/20 blur-3xl rounded-full -z-10 animate-pulse"></div>
        </motion.div>
      </div>
    </section>
  );
};
