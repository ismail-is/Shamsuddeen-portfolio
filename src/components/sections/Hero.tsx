"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles, ShieldCheck, Activity } from "lucide-react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-transparent">
      
      {/* 1. MASSIVE BACKGROUND WATERMARK TEXT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none select-none z-0 opacity-[0.03]">
        <h1 className="text-[15vw] font-black tracking-tighter text-white whitespace-nowrap">
          SHAMSUDDEEN
        </h1>
      </div>

      {/* 2. CREATIVE VECTOR & GLOW BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>
        
        {/* Glowing Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }} 
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-600/30 rounded-full blur-[150px] mix-blend-screen"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ================= TEXT CONTENT ================= */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Animated Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(168,85,247,0.15)]"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span>
              </span>
              <span className="text-purple-100 text-sm font-medium tracking-wide uppercase">
                Available for worldwide projects
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="space-y-4"
            >
              <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold font-space leading-[1.1] text-white tracking-tight">
                Architecting <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-white">
                    Digital Futures
                  </span>
                  {/* Decorative underline */}
                  <motion.svg className="absolute -bottom-4 left-0 w-full" viewBox="0 0 300 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                  >
                    <path d="M5 15Q100 -5 295 15" stroke="url(#paint0_linear)" strokeWidth="4" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="paint0_linear" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#a855f7" />
                        <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </span>
              </h2>
              
              {/* Type Animation Box */}
              <div className="h-12 mt-6">
                <h3 className="text-2xl md:text-3xl font-light text-gray-300 flex items-center gap-2">
                  <span className="text-white font-medium">I am a</span>
                  <span className="text-purple-400 font-medium">
                    <TypeAnimation
                      sequence={[
                        "Digital Marketing Specialist", 2000,
                        "Cyber Security Analyst", 2000,
                        "Growth Strategist", 2000,
                        "SEO Expert", 2000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />
                  </span>
                </h3>
              </div>
              
              <p className="text-lg text-gray-400 max-w-xl leading-relaxed mt-4">
                Fusing data-driven marketing with impenetrable cyber defense to build brands that not only scale, but remain secure in a volatile digital landscape.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-5 pt-6"
            >
              <a 
                href="#contact" 
                className="group relative px-8 py-4 bg-white text-[#110720] rounded-full font-bold transition-all flex items-center gap-3 overflow-hidden hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start a Project
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="group px-8 py-4 bg-[#110720] border border-purple-500/30 hover:border-purple-400 text-white rounded-full font-medium transition-all flex items-center gap-3 hover:bg-purple-900/20"
              >
                View Resume
                <Download size={18} className="group-hover:-translate-y-1 transition-transform text-purple-400" />
              </a>
            </motion.div>
          </div>

          {/* ================= HIGH-END VISUAL/IMAGE CONTENT ================= */}
          <div className="lg:col-span-5 relative mt-16 lg:mt-0 flex justify-center lg:justify-end perspective-1000">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.3, type: "spring" }}
              className="relative w-full max-w-[400px]"
            >
              
              {/* Animated Orbital Rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-10 border border-white/5 border-dashed rounded-full pointer-events-none"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-20 border border-purple-500/10 rounded-full pointer-events-none"
              >
                {/* Orbiting dots */}
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_#a855f7]" />
                <div className="absolute bottom-1/4 right-0 w-2 h-2 bg-indigo-400 rounded-full shadow-[0_0_10px_#818cf8]" />
              </motion.div>

              {/* Advanced Image Container (Tall Arch / Pill Shape) */}
              <div className="relative aspect-[3/4] rounded-t-full rounded-b-[3rem] p-3 glass-card border border-white/10 shadow-2xl group overflow-visible">
                
                {/* Image Glow Behind */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-indigo-600/30 blur-2xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="w-full h-full rounded-t-full rounded-b-[2.5rem] overflow-hidden relative border border-white/5 bg-[#0a0414]">
                  {/* The Image */}
                  <Image 
                    src="/profile.jpg" 
                    alt="Mahammad Shamsuddeen"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  
                  {/* Overlays for aesthetic depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#110720] via-[#110720]/20 to-transparent opacity-80 z-10"></div>
                  <div className="absolute inset-0 bg-purple-900/10 mix-blend-overlay z-10"></div>
                </div>

                {/* Floating Aesthetic Badges (Glassmorphism) */}
                <motion.div 
                  animate={{ y: [-10, 10, -10] }} 
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/4 -right-12 glass-card px-4 py-3 rounded-2xl flex items-center gap-3 border border-purple-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl z-20"
                >
                  <div className="bg-purple-500/20 p-2 rounded-lg">
                    <Sparkles size={18} className="text-purple-300" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold leading-tight">Digital<br/>Marketing</p>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [10, -10, 10] }} 
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-1/4 -left-10 glass-card px-4 py-3 rounded-2xl flex items-center gap-3 border border-indigo-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl z-20"
                >
                  <div className="bg-indigo-500/20 p-2 rounded-lg">
                    <ShieldCheck size={18} className="text-indigo-300" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold leading-tight">Cyber<br/>Security</p>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [-5, 5, -5], x: [0, 5, 0] }} 
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute -bottom-6 right-4 glass-card p-3 rounded-full border border-white/20 shadow-xl z-20"
                >
                  <Activity size={24} className="text-white" />
                </motion.div>
                
              </div>
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="text-xs text-gray-500 uppercase tracking-[0.2em]">Scroll</p>
        <div className="w-6 h-10 border border-gray-600 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-purple-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
