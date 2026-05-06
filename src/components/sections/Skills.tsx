"use client";

import { motion, Variants } from "framer-motion";
import { Search, Shield, ShoppingCart, User, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Digital Marketing",
    icon: <Search className="text-purple-400" size={24} />,
    color: "purple",
    skills: [
      { name: "SEO & SEM", level: 95 },
      { name: "Social Media Strategy", level: 90 },
      { name: "Google Analytics", level: 85 },
      { name: "Content Marketing", level: 88 },
    ],
  },
  {
    title: "Cyber Security",
    icon: <Shield className="text-indigo-400" size={24} />,
    color: "indigo",
    skills: [
      { name: "Ethical Hacking", level: 85 },
      { name: "Network Security", level: 90 },
      { name: "Vulnerability Assessment", level: 88 },
      { name: "Penetration Testing", level: 82 },
    ],
  },
  {
    title: "E-Commerce",
    icon: <ShoppingCart className="text-white" size={24} />,
    color: "gray",
    skills: [
      { name: "Shopify / WooCommerce", level: 95 },
      { name: "Conversion Optimization", level: 92 },
      { name: "Paid Ads Scaling", level: 88 },
    ],
  },
  {
    title: "Professional",
    icon: <User className="text-purple-300" size={24} />,
    color: "purple",
    skills: [
      { name: "Strategic Leadership", level: 95 },
      { name: "Data Analysis", level: 90 },
      { name: "Problem Solving", level: 92 },
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden bg-transparent">
      
      {/* ================= MASSIVE WATERMARK ================= */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none select-none z-0 opacity-[0.02] mix-blend-screen">
        <h2 className="text-[25vw] lg:text-[15vw] font-black tracking-tighter text-white whitespace-nowrap">
          EXPERTISE
        </h2>
      </div>

      {/* ================= CREATIVE BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Animated Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_30%,transparent_100%)]"></div>
        
        {/* Abstract Floating Hexagons */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] lg:-top-[20%] -left-[10%] w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] border border-white/5 opacity-30 pointer-events-none"
          style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] lg:-bottom-[20%] -right-[10%] w-[400px] lg:w-[800px] h-[400px] lg:h-[800px] border border-purple-500/10 opacity-30 pointer-events-none"
          style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 backdrop-blur-md">
            <Zap size={14} className="text-indigo-400 animate-pulse" />
            <span className="text-indigo-300 font-space font-medium uppercase tracking-widest text-xs">Technical Arsenal</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-space text-white leading-tight">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Competencies.</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="glass-card p-6 lg:p-8 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-purple-500/30 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(168,85,247,0.1)] active:scale-[0.98]"
            >
              {/* Card Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent z-0 pointer-events-none"></div>
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6 lg:mb-8 relative z-10">
                <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-${category.color}-500/10 flex items-center justify-center border border-${category.color}-500/20 shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                  {category.icon}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white font-space tracking-tight">{category.title}</h3>
              </div>

              {/* Skills List with Animated Progress Bars */}
              <div className="space-y-5 lg:space-y-6 relative z-10">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-300 font-medium tracking-wide">{skill.name}</span>
                      <span className={`text-${category.color}-400 font-space font-bold`}>{skill.level}%</span>
                    </div>
                    {/* Progress Bar Track */}
                    <div className="h-1.5 lg:h-2 w-full bg-[#0c120c] rounded-full overflow-hidden border border-white/5 relative">
                      {/* Animated Progress Fill */}
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 + (sIdx * 0.2), ease: "easeOut" }}
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${
                          category.color === 'purple' ? 'from-purple-600 to-purple-400' :
                          category.color === 'indigo' ? 'from-indigo-600 to-indigo-400' :
                          'from-gray-500 to-gray-300'
                        } rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]`}
                      >
                        {/* Shimmer effect inside the bar */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
