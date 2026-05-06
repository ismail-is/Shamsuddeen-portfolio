"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  { name: "Digital Marketing Certificate", org: "Google / Meta", color: "from-purple-500/20 to-transparent" },
  { name: "Cyber Security Certificate", org: "Cisco / CompTIA", color: "from-indigo-500/20 to-transparent" },
  { name: "Introduction to Human Communication", org: "University Course", color: "from-blue-500/20 to-transparent" },
  { name: "Introduction to Ethical Hacking", org: "Cyber Academy", color: "from-emerald-500/20 to-transparent" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#110720]/50">
      <div className="container mx-auto px-6 md:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-space text-white mb-4">
            Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certs.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              <div className="relative glass-card p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-colors h-full flex items-start gap-4 overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${cert.color} rounded-bl-full pointer-events-none`}></div>
                
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                  <Award size={24} />
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">{cert.name}</h3>
                  <p className="text-gray-400 text-sm">{cert.org}</p>
                </div>
                
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-purple-400">
                  <ExternalLink size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
