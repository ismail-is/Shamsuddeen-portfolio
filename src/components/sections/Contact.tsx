"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ name: "", email: "", message: "" });
      alert("Message sent successfully!");
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 relative overflow-hidden bg-transparent border-t border-purple-500/10">
      <div className="absolute top-0 right-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-purple-600/10 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-indigo-600/10 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space text-white mb-4">
            Let&apos;s Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Together</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-center lg:text-left"
          >
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-space">Get In Touch</h3>
              <p className="text-gray-400 leading-relaxed max-w-md mx-auto lg:mx-0 text-base md:text-lg">
                Whether you have a question, a project proposal, or just want to say hi, I&apos;ll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6 flex flex-col items-center lg:items-start">
              <div className="flex flex-col md:flex-row items-center gap-4 group text-center md:text-left">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-all shadow-lg">
                  <Phone className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <div>
                  <p className="text-xs lg:text-sm text-gray-500 mb-1 font-medium uppercase tracking-wider">Phone</p>
                  <a href="tel:+918317329671" className="text-base lg:text-lg text-white font-medium hover:text-purple-400 transition-colors">+91 8317329671</a>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-4 group text-center md:text-left">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-all shadow-lg">
                  <Mail className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <div>
                  <p className="text-xs lg:text-sm text-gray-500 mb-1 font-medium uppercase tracking-wider">Email</p>
                  <a href="mailto:mahammadshamsuddin548@gmail.com" className="text-base lg:text-lg text-white font-medium hover:text-purple-400 transition-colors break-all">mahammadshamsuddin548@gmail.com</a>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-4 group text-center md:text-left">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-all shadow-lg">
                  <MapPin className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <div>
                  <p className="text-xs lg:text-sm text-gray-500 mb-1 font-medium uppercase tracking-wider">Location</p>
                  <p className="text-base lg:text-lg text-white font-medium">Thalitthanooji, Vittal Town</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-center lg:justify-start gap-4">
              <a href="#" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full glass flex items-center justify-center text-gray-300 hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all active:scale-90">
                <FaLinkedinIn size={18} />
              </a>
              <a href="#" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full glass flex items-center justify-center text-gray-300 hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all active:scale-90">
                <FaGithub size={18} />
              </a>
              <a href="#" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full glass flex items-center justify-center text-gray-300 hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all active:scale-90">
                <FaInstagram size={18} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-10 rounded-3xl border border-white/10 space-y-5 lg:space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs lg:text-sm font-bold text-gray-400 uppercase tracking-wider">Your Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-600 text-sm lg:text-base"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs lg:text-sm font-bold text-gray-400 uppercase tracking-wider">Your Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-600 text-sm lg:text-base"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs lg:text-sm font-bold text-gray-400 uppercase tracking-wider">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none placeholder:text-gray-600 text-sm lg:text-base"
                  placeholder="Hello, I&apos;d like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 glow-box disabled:opacity-70 active:scale-95"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
