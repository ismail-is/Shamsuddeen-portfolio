"use client";

import { motion } from "framer-motion";
import { ArrowUp, Sparkles } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { useEffect } from "react";

export default function Footer() {
  // Removed unused time tracking logic.

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-transparent pt-32 overflow-hidden border-t border-white/5 mt-20">
      
      {/* ----------------- MASSIVE MARQUEE BACKGROUND ----------------- */}
      <div className="absolute top-10 w-full overflow-hidden whitespace-nowrap pointer-events-none opacity-[0.03] select-none flex z-0">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex font-black text-[15vw] leading-none tracking-tighter"
        >
          <span>LET&apos;S CREATE MAGIC • DIGITAL EXCELLENCE • CYBER SECURITY • LET&apos;S CREATE MAGIC • DIGITAL EXCELLENCE • CYBER SECURITY • </span>
        </motion.div>
      </div>

      {/* ----------------- AMBIENT BACKGROUND GLOWS ----------------- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent blur-[100px]" />
        
        {/* Animated Grid Floor */}
        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:perspective(500px)_rotateX(60deg)] opacity-50 origin-bottom" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* ----------------- HERO CTA AREA ----------------- */}
          
          
          
          

        
       

        {/* ----------------- SEPARATOR ----------------- */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-16" />

        {/* ----------------- FOOTER DETAILS ----------------- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand & Location */}
          <div className="md:col-span-5 space-y-8">
            <div>
              <Link href="#home" className="text-4xl font-bold font-space text-white inline-block mb-4">
                Shamsuddeen<span className="text-purple-500">.</span>
              </Link>
              <p className="text-gray-400 text-lg max-w-sm leading-relaxed">
                Elevating brands through data-driven digital marketing and securing them with elite cyber defense.
              </p>
            </div>

          
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-xl font-bold text-white mb-6">Explore</h3>
            <ul className="space-y-4">
              {["Home", "About", "Experience", "Skills", "Education", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="group relative inline-flex items-center text-gray-400 hover:text-white transition-colors text-lg font-medium overflow-hidden"
                  >
                    <span className="relative z-10">{item}</span>
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-xl font-bold text-white mb-6">Socials</h3>
            <div className="flex flex-col gap-4">
              {[
                { name: "LinkedIn", icon: <FaLinkedinIn size={20} />, href: "#" },
                { name: "GitHub", icon: <FaGithub size={20} />, href: "#" },
                { name: "Instagram", icon: <FaInstagram size={20} />, href: "#" },
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  className="group flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 text-gray-300 group-hover:text-white transition-colors">
                    <div className="w-10 h-10 rounded-full bg-[#110720] flex items-center justify-center border border-white/10 group-hover:border-purple-500/50 transition-colors">
                      {social.icon}
                    </div>
                    <span className="font-medium text-lg">{social.name}</span>
                  </div>
                  <ArrowUp size={20} className="text-gray-500 group-hover:text-purple-400 rotate-45 group-hover:scale-125 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
      
      {/* ----------------- BOTTOM COPYRIGHT BAR ----------------- */}
      <div className="relative z-10 w-full bg-black/20 backdrop-blur-xl border-t border-white/5 py-6 mt-12">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-gray-500 text-sm font-medium">
            © {currentYear} Mahammad Shamsuddeen. All rights reserved.
          </p>
        </div>
      </div>

    
    </footer>
  );
}
