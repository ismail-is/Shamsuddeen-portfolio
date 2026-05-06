"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, School } from "lucide-react";

const education = [
  {
    period: "2023 - 2024",
    degree: "PUC",
    institution: "G.P.U.C Narsha Maidan",
    icon: <GraduationCap size={24} />,
    color: "from-purple-500",
  },
  {
    period: "2020 - 2022",
    degree: "High School",
    institution: "G.H.S Narsha Maidan",
    icon: <BookOpen size={24} />,
    color: "from-indigo-500",
  },
  {
    period: "2012 - 2019",
    degree: "Primary School",
    institution: "G.H.S Narsha Maidan",
    icon: <School size={24} />,
    color: "from-indigo-500",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-space text-white mb-4">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Background</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="glass-card p-8 rounded-3xl h-full border border-white/5 group-hover:border-purple-500/30 transition-all duration-300 relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${edu.color} to-transparent opacity-10 rounded-bl-full`}></div>
                
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-all duration-300 shadow-lg border border-white/10">
                  {edu.icon}
                </div>
                
                <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-semibold text-purple-300 mb-4 border border-white/5">
                  {edu.period}
                </span>
                
                <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-gray-400 font-medium">{edu.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
