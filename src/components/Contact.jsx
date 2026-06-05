import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { PERSONAL_INFO } from '../data/constants';

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    const text = `Hello Vasanth,\n\nYou have a new message from your portfolio:\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n\n*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/917708139041?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-100/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {[
              { icon: FaPhoneAlt, title: "Phone", value: PERSONAL_INFO.socials.phone, color: "bg-blue-500" },
              { icon: FaEnvelope, title: "Email", value: PERSONAL_INFO.socials.email, color: "bg-indigo-500" },
              { icon: FaMapMarkerAlt, title: "Location", value: PERSONAL_INFO.socials.location, color: "bg-cyan-500" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-6 p-6 glass rounded-2xl">
                <div className={`${item.color} p-4 rounded-xl text-white shadow-lg`}>
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{item.title}</p>
                  <p className="text-lg font-bold">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 glass p-8 md:p-12 rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600 dark:text-slate-400 ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600 dark:text-slate-400 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600 dark:text-slate-400 ml-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                  placeholder="Inquiry about project"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600 dark:text-slate-400 ml-1">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-blue-500/30 hover:bg-blue-700 transition-colors"
                type="submit"
              >
                <FaPaperPlane /> Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
