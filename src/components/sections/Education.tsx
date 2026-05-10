"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, School, Award, Star } from "lucide-react";

const education = [
  {
    period: "2023 - 2024",
    degree: "PUC",
    institution: "G.P.U.C Narsha Maidan",
    description: "Advanced studies focusing on analytical skills and comprehensive understanding of core subjects.",
    icon: <GraduationCap size={24} />,
    color: "from-purple-500",
  },
  {
    period: "2020 - 2022",
    degree: "High School",
    institution: "G.H.S Narsha Maidan",
    description: "Developed a strong foundation in science and mathematics, participating in various technical events.",
    icon: <BookOpen size={24} />,
    color: "from-indigo-500",
  },
  {
    period: "2012 - 2019",
    degree: "Primary School",
    institution: "DKZP GOVT.  School Thalithanooji",
    description: "Early educational background with a focus on holistic learning and extracurricular activities.",
    icon: <School size={24} />,
    color: "from-fuchsia-500",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-32 relative overflow-hidden bg-transparent">
      
      {/* --- SECTION SPECIFIC BACKGROUND ELEMENTS --- */}
      <div className="absolute top-0 right-0 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-purple-900/10 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-indigo-900/10 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none mix-blend-screen" />
      
      {/* Massive Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none select-none z-0 opacity-[0.02] mix-blend-screen">
        <h2 className="text-[25vw] lg:text-[15vw] font-black tracking-tighter text-white whitespace-nowrap">
          ACADEMICS
        </h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md">
            <Star size={14} className="text-purple-400" />
            <span className="text-purple-300 font-space font-medium uppercase tracking-widest text-xs">Knowledge</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-space text-white mb-4 tracking-tight">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-white">Background</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-transparent mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ================= LEFT COL: 3D PERSPECTIVE MODULE ================= */}
          <div className="lg:col-span-5 relative flex justify-center perspective-1000">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.2, type: "spring" }}
              className="relative w-full max-w-[280px] lg:max-w-[380px]"
            >
              {/* Animated Orbital Rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 lg:-inset-10 border border-white/10 border-dashed rounded-full pointer-events-none"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-12 lg:-inset-20 border border-purple-500/20 rounded-full pointer-events-none"
              >
                {/* Orbiting dots */}
                <div className="absolute top-0 left-1/2 w-3 h-3 lg:w-4 lg:h-4 bg-purple-500 rounded-full shadow-[0_0_15px_#a855f7]" />
                <div className="absolute bottom-1/4 right-0 w-2 h-2 lg:w-3 lg:h-3 bg-indigo-400 rounded-full shadow-[0_0_15px_#6366f1]" />
              </motion.div>

              {/* Advanced Container */}
              <div className="relative aspect-[3/4] rounded-t-full rounded-b-[3rem] p-2 lg:p-3 glass-card border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group overflow-visible">
                
                {/* Glow Behind */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/40 to-indigo-600/40 blur-2xl -z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="w-full h-full rounded-t-full rounded-b-[2.5rem] overflow-hidden relative border border-white/10 bg-gradient-to-b from-[#1a0b2e] to-[#0a0414] flex flex-col items-center justify-center">
                  
                  {/* Abstract Graphic / Icon replacing the photo */}
                  <motion.div 
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-20"
                  >
                    <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 lg:mb-6 shadow-[0_0_30px_rgba(168,85,247,0.3)] border border-purple-500/30">
                      <GraduationCap className="w-10 h-10 lg:w-16 lg:h-16 text-purple-300 group-hover:scale-110 transition-transform duration-700" />
                    </div>
                  </motion.div>
                  
                  <div className="text-center px-6 relative z-20">
                    <h3 className="text-xl lg:text-2xl font-bold text-white font-space mb-2">Foundation</h3>
                    <p className="text-purple-300 text-xs lg:text-sm">Building the pillars of knowledge.</p>
                  </div>

                  {/* Vignette & Blend Fade at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c120c] via-[#0c120c]/40 to-transparent opacity-90 z-10 pointer-events-none"></div>
                </div>

                {/* Floating Aesthetic Badges */}
                <motion.div 
                  animate={{ y: [-5, 5, -5] }} 
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/4 -right-4 lg:-right-8 glass-card px-3 lg:px-4 py-2 lg:py-3 rounded-xl lg:rounded-2xl flex items-center gap-2 lg:gap-3 border border-purple-500/30 shadow-xl backdrop-blur-xl z-30"
                >
                  <Award className="w-4 h-4 lg:w-5 lg:h-5 text-purple-300" />
                  <p className="text-white text-[10px] lg:text-xs font-bold uppercase tracking-wider">Excellence</p>
                </motion.div>

              </div>
            </motion.div>
          </div>

          {/* ================= RIGHT COL: TIMELINE CARDS ================= */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.15) }}
                className="relative group"
              >
                <div className="absolute top-0 left-8 bottom-0 w-[2px] bg-white/5 -z-10 hidden md:block"></div>
                
                <div className="glass-card p-6 lg:p-8 rounded-3xl border border-white/5 group-hover:border-purple-500/40 transition-all duration-500 relative overflow-hidden flex flex-col md:flex-row gap-6 items-start md:items-center hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(168,85,247,0.1)] active:scale-[0.98]">
                  
                  {/* Subtle Background Glow */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${edu.color} to-transparent opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500`}></div>
                  
                  {/* Icon Box */}
                  <div className="w-14 h-14 lg:w-16 lg:h-16 shrink-0 bg-[#0c120c] rounded-2xl flex items-center justify-center text-white group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-all duration-500 shadow-inner border border-white/10 relative z-10">
                    {edu.icon}
                  </div>
                  
                  <div className="flex-1 relative z-10">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight">{edu.degree}</h3>
                      <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-[10px] lg:text-xs font-bold text-purple-300 border border-purple-500/20 uppercase tracking-widest">
                        {edu.period}
                      </span>
                    </div>
                    
                    <h4 className="text-base lg:text-lg text-purple-200 font-medium mb-3">{edu.institution}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
