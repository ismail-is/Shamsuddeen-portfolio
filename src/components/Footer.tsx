"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FaLinkedinIn, FaInstagram, FaPinterest, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-transparent pt-20 lg:pt-32 overflow-hidden border-t border-white/5 mt-10 lg:mt-20">
      
      {/* ----------------- MASSIVE MARQUEE BACKGROUND ----------------- */}
      <div className="absolute top-10 w-full overflow-hidden whitespace-nowrap pointer-events-none opacity-[0.03] select-none flex z-0">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex font-black text-[20vw] lg:text-[15vw] leading-none tracking-tighter"
        >
          <span>LET&apos;S CREATE MAGIC • DIGITAL EXCELLENCE • CYBER SECURITY • LET&apos;S CREATE MAGIC • DIGITAL EXCELLENCE • CYBER SECURITY • </span>
        </motion.div>
      </div>

      {/* ----------------- AMBIENT BACKGROUND GLOWS ----------------- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] lg:w-[800px] h-[200px] lg:h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent blur-[60px] lg:blur-[100px]" />
        
        {/* Animated Grid Floor */}
        <div className="absolute bottom-0 left-0 w-full h-[200px] lg:h-[300px] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] lg:bg-[size:40px_40px] [mask-image:perspective(500px)_rotateX(60deg)] opacity-40 lg:opacity-50 origin-bottom" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* ----------------- SEPARATOR ----------------- */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12 lg:mb-16" />

        {/* ----------------- FOOTER DETAILS ----------------- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 mb-12 lg:mb-16">
          
          {/* Brand & Location */}
          <div className="md:col-span-5 space-y-6 lg:space-y-8 text-center md:text-left">
            <div>
              <Link href="#home" className="text-3xl lg:text-4xl font-bold font-space text-white inline-block mb-4 hover:scale-105 transition-transform">
                Shamsuddeen<span className="text-purple-500">.</span>
              </Link>
              <p className="text-gray-400 text-base lg:text-lg max-w-sm leading-relaxed mx-auto md:mx-0">
                Elevating brands through data-driven digital marketing and securing them with elite cyber defense.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-6 text-center md:text-left">
            <h3 className="text-lg lg:text-xl font-bold text-white mb-4 lg:mb-6 uppercase tracking-widest text-xs opacity-50">Explore</h3>
            <ul className="space-y-3 lg:space-y-4">
              {["Home", "About", "Experience", "Skills", "Education", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="group relative inline-flex items-center text-gray-400 hover:text-white transition-colors text-base lg:text-lg font-medium overflow-hidden"
                  >
                    <span className="relative z-10">{item}</span>
                    <span className="absolute bottom-0 left-0 w-full h-[1px] lg:h-[2px] bg-purple-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-4 space-y-6 text-center md:text-left">
            <h3 className="text-lg lg:text-xl font-bold text-white mb-4 lg:mb-6 uppercase tracking-widest text-xs opacity-50">Socials</h3>
            <div className="flex flex-col gap-3 lg:gap-4 max-w-xs mx-auto md:mx-0">
              {[
                { name: "LinkedIn", icon: <FaLinkedinIn size={18} />, href: "https://www.linkedin.com/in/mahammad-shamsuddeen-6785913b9?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
                { name: "Instagram", icon: <FaInstagram size={18} />, href: "https://www.instagram.com/sh4msu_?igsh=MWhmZjZ4cWw3ZTY0dg%3D%3D&utm_source=qr" },
                { name: "Pinterest", icon: <FaPinterest size={18} />, href: "https://pin.it/5N810kfMO" },
                { name: "WhatsApp", icon: <FaWhatsapp size={18} />, href: "https://wa.me/918317329671?text=Hello%20Shamsuddeen,%20I'm%20interested%20in%20your%20services!" },
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3 lg:p-4 rounded-xl lg:rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300 active:scale-95"
                >
                  <div className="flex items-center gap-3 lg:gap-4 text-gray-300 group-hover:text-white transition-colors">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#110720] flex items-center justify-center border border-white/10 group-hover:border-purple-500/50 transition-colors">
                      {social.icon}
                    </div>
                    <span className="font-medium text-base lg:text-lg">{social.name}</span>
                  </div>
                  <ArrowUp size={18} className="text-gray-500 group-hover:text-purple-400 rotate-45 group-hover:scale-125 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
      
      {/* ----------------- BOTTOM COPYRIGHT BAR ----------------- */}
      <div className="relative z-10 w-full bg-black/20 backdrop-blur-xl border-t border-white/5 py-6 mt-8 lg:mt-12">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-center items-center gap-4 text-center">
          <p className="text-gray-500 text-xs lg:text-sm font-medium">
            © {currentYear} Mahammad Shamsuddeen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
