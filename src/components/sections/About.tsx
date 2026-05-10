"use client";

import { motion } from "framer-motion";
import { Target, Award, Rocket, ShieldCheck, Zap } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Experience", value: "1 Year", icon: <Award size={20} className="text-purple-400" /> },
    { label: "Projects Delivered", value: "45+", icon: <Rocket size={20} className="text-indigo-400" /> },
    { label: "Cyber Certs", value: "5", icon: <ShieldCheck size={20} className="text-white" /> },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden bg-transparent">
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[400px] lg:w-[800px] h-[400px] lg:h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent opacity-50 pointer-events-none" />
      
      {/* Watermark */}
      <div className="absolute top-20 left-10 pointer-events-none select-none z-0 opacity-[0.02]">
        <h2 className="text-[18vw] lg:text-[10vw] font-black tracking-tighter text-white whitespace-nowrap">
          WHO AM I
        </h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-12 h-[2px] bg-purple-500"></div>
              <span className="text-purple-400 font-space font-bold uppercase tracking-widest text-sm">Discover</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-space text-white leading-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Me.</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-base md:text-lg border-l-2 md:border-l border-purple-500/50 md:border-white/10 pl-6 mx-auto md:mx-0">
            Blending the art of digital growth with the science of secure infrastructures.
          </p>
        </motion.div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto md:auto-rows-[minmax(180px,auto)]">
          
          {/* Main Bio Card (Spans 8 columns, 2 rows) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-8 md:row-span-2 glass-card rounded-[2rem] p-8 md:p-12 border border-white/5 relative overflow-hidden group hover:border-purple-500/30 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <QuoteIcon className="absolute top-4 right-6 md:top-8 md:right-10 w-16 h-16 md:w-24 md:h-24 text-white/5 rotate-12" />
            
            <h3 className="text-2xl md:text-4xl font-space font-bold text-white mb-6 leading-tight relative z-10">
              I don&apos;t just drive traffic. <br className="hidden md:block"/>
              <span className="text-gray-400">I secure the destination.</span>
            </h3>
            
            <div className="space-y-4 md:space-y-6 text-gray-300 text-base md:text-lg leading-relaxed relative z-10">
              <p>
                As a passionate <strong className="text-white">Digital Marketing Specialist</strong> and <strong className="text-white">Cyber Security Analyst</strong>, I sit at a unique intersection of the tech world. Most marketers focus solely on exposure, while security analysts focus solely on defense. I bridge that gap.
              </p>
              <p>
                My approach is deeply analytical. Whether it&apos;s optimizing a web platform for search engines, executing high-conversion ad campaigns, or actively auditing a network for zero-day vulnerabilities, my goal is the same: <span className="text-purple-300">To ensure my clients&apos; digital presence is both dominant and impenetrable.</span>
              </p>
            </div>
          </motion.div>

          {/* Cyber Security Visual Card (Spans 4 columns, 1 row) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-4 glass-card rounded-[2rem] p-8 border border-white/5 relative overflow-hidden flex flex-col justify-between group hover:border-indigo-500/40 transition-all"
          >
            {/* Animated Radar/Shield Background */}
            <div className="absolute -right-10 -top-10 w-48 h-48 border border-indigo-500/20 rounded-full flex items-center justify-center">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="w-32 h-32 border-t-2 border-indigo-400 rounded-full opacity-50" />
            </div>
            
            <div className="relative z-10 mb-8">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck size={24} className="text-indigo-400" />
              </div>
              <h4 className="text-xl font-bold text-white font-space">Cyber Defense</h4>
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-between text-xs text-gray-400 mb-2 font-medium uppercase tracking-wider">
                <span>Threat Mitigation</span>
                <span className="text-indigo-400">99.9%</span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden border border-white/5">
                <motion.div 
                  initial={{ width: 0 }} whileInView={{ width: "99.9%" }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                />
              </div>
            </div>
          </motion.div>

          {/* Marketing Visual Card (Spans 4 columns, 1 row) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:col-span-4 glass-card rounded-[2rem] p-8 border border-white/5 relative overflow-hidden flex flex-col justify-between group hover:border-purple-500/40 transition-all"
          >
            {/* Animated Chart Background */}
            <div className="absolute right-0 bottom-0 w-full h-32 opacity-20 pointer-events-none">
              <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
                <motion.path 
                  d="M0 50 C 20 40, 40 10, 60 30 C 80 50, 90 20, 100 0" 
                  fill="none" stroke="#a855f7" strokeWidth="2"
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2, ease: "easeOut" }}
                />
              </svg>
            </div>

            <div className="relative z-10 mb-8">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                <Target size={24} className="text-purple-400" />
              </div>
              <h4 className="text-xl font-bold text-white font-space">Growth & SEO</h4>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-purple-400 animate-pulse" />
                <span className="text-sm text-gray-300 font-medium">Data-Driven Scaling</span>
              </div>
            </div>
          </motion.div>

          {/* Stats Cards (Span 4 columns each) */}
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
              className="md:col-span-4 glass-card rounded-[2rem] p-8 border border-white/5 flex items-center gap-6 hover:bg-white/[0.04] transition-all group active:scale-95"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#0c120c] border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div>
                <h4 className="text-3xl md:text-4xl font-bold text-white font-space mb-1 tracking-tight">{stat.value}</h4>
                <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider font-bold">{stat.label}</p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

// Helper component for the big background quote mark
function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
    </svg>
  );
}
