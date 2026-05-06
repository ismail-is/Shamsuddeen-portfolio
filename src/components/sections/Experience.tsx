"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Calendar, ChevronRight, Shield, Target } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    title: "Digital Marketing Specialist",
    company: "Freelance",
    period: "2022 - Present",
    description: "Architecting full-funnel digital marketing strategies. Scaling brands through high-ROI SEO, advanced SEM, and data-driven social media campaigns.",
    skills: ["SEO", "Growth Hacking", "Google Analytics", "Content Strategy"],
    icon: <Target className="text-purple-400" size={24} />,
    color: "from-purple-500 to-purple-800"
  },
  {
    title: "Cyber Security Trainee",
    company: "Tech Academy",
    period: "2023 - 2024",
    description: "Executed intensive hands-on vulnerability assessments. Mastered ethical hacking techniques, network security protocols, and threat mitigation.",
    skills: ["Penetration Testing", "Network Security", "Risk Assessment"],
    icon: <Shield className="text-indigo-400" size={24} />,
    color: "from-indigo-500 to-indigo-800"
  },
  {
    title: "E-Commerce Manager",
    company: "Local Retailer",
    period: "2021 - 2022",
    description: "Engineered digital storefronts for maximum conversion. Optimized UI/UX product pipelines and increased gross sales by 40% via hyper-targeted ad scaling.",
    skills: ["Shopify", "Facebook Ads", "Conversion Optimization"],
    icon: <Briefcase className="text-white" size={24} />,
    color: "from-gray-300 to-gray-600"
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax scroll effect for background
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.5, 0.1]);

  return (
    <section id="experience" ref={containerRef} className="py-32 relative overflow-hidden bg-[#110720]">
      
      {/* ================= MASSIVE WATERMARK ================= */}
      <div className="absolute top-40 right-0 pointer-events-none select-none z-0 opacity-[0.02] mix-blend-screen">
        <h2 className="text-[12vw] font-black tracking-tighter text-white whitespace-nowrap" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
          JOURNEY
        </h2>
      </div>

      {/* ================= BEST BG ANIMATION MOTIONS LOOP ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        
        {/* Animated Grid that moves with scroll */}
        <motion.div 
          style={{ y: yBg, opacity: opacityBg }}
          className="absolute inset-0 w-full h-[150%] bg-[linear-gradient(rgba(168,85,247,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
        />

        {/* Floating Geometric Particles */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: ["0%", "-100%"], 
              x: Math.sin(i) * 50,
              rotate: [0, 360],
              opacity: [0, 0.3, 0]
            }}
            transition={{ 
              duration: 15 + (i * 2), 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 3
            }}
            className={`absolute bottom-[-10%] ${i % 2 === 0 ? 'border-purple-500/20' : 'border-indigo-500/20'} border w-16 h-16 rounded-lg backdrop-blur-sm`}
            style={{ left: `${15 + (i * 15)}%` }}
          />
        ))}

        {/* Ambient Glows */}
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-800/20 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            <span className="text-purple-300 font-space font-medium uppercase tracking-widest text-xs">Experience</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold font-space text-white leading-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Journey.</span>
          </h2>
        </motion.div>

        {/* ================= CREATIVE TIMELINE LAYOUT ================= */}
        <div className="max-w-5xl mx-auto relative">
          
          {/* Advanced Central Glowing Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2 bg-white/5">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute top-0 w-full bg-gradient-to-b from-purple-500 via-indigo-500 to-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]"
            />
            {/* Travelling energy pulse on the line */}
            <motion.div 
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 -translate-x-1/2 w-1 h-20 bg-white shadow-[0_0_20px_#ffffff] rounded-full z-20"
            />
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Center Node (Holographic Design) */}
                <div className="absolute left-[12px] md:left-1/2 w-8 h-8 md:-translate-x-1/2 z-20 flex items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 + (index * 0.2), type: "spring" }}
                    className="absolute inset-0 bg-[#0a0414] border-2 border-purple-500 rounded-full"
                  />
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }} transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 border border-purple-400 rounded-full"
                  />
                  <div className="w-2 h-2 bg-white rounded-full z-10 shadow-[0_0_10px_#ffffff]" />
                </div>

                {/* Content Card container */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-16" : "md:pr-16"} w-full relative group`}>
                  
                  {/* Connecting dashed line from node to card (desktop only) */}
                  <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-16 border-t border-dashed border-purple-500/30 ${index % 2 === 0 ? "left-0" : "right-0"}`}></div>

                  {/* The Glass Card */}
                  <div className="glass-card p-8 rounded-3xl border border-white/5 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)] bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-xl">
                    
                    {/* Background glow on hover inside card */}
                    <div className="absolute -inset-20 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"></div>
                    
                    {/* Top row: Icon & Date */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6 relative z-10">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${exp.color} p-[1px] shadow-lg`}>
                        <div className="w-full h-full bg-[#110720] rounded-2xl flex items-center justify-center">
                          {exp.icon}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                        <Calendar size={14} className="text-purple-400" />
                        <span className="text-sm font-medium text-gray-300">{exp.period}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2 relative z-10 tracking-tight">{exp.title}</h3>
                    
                    <div className="flex items-center gap-2 mb-6 relative z-10">
                      <span className="text-purple-400 font-medium">{exp.company}</span>
                    </div>
                    
                    <p className="text-gray-400 mb-8 relative z-10 leading-relaxed text-sm md:text-base">
                      {exp.description}
                    </p>
                    
                    {/* Skills pills */}
                    <div className="flex flex-wrap gap-2 relative z-10">
                      {exp.skills.map((skill, sIndex) => (
                        <span
                          key={sIndex}
                          className="px-3 py-1 bg-[#110720]/80 text-gray-300 rounded-lg text-xs font-medium border border-white/10 flex items-center gap-1 group-hover:border-purple-500/30 transition-colors"
                        >
                          <ChevronRight size={12} className="text-purple-500" />
                          {skill}
                        </span>
                      ))}
                    </div>
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
