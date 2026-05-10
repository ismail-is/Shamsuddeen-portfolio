"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  { name: "Digital Marketing Certificate", org: "Google / Meta (E26 media pvt ltd)", color: "from-purple-500/20 to-transparent" },
  { name: "Cyber Security Certificate", org: "EYEQ DOT NET PVT LTD", color: "from-indigo-500/20 to-transparent" },
  { name: "Introduction to Human Communication", org: "University Course", color: "from-blue-500/20 to-transparent" },
  { name: "Introduction to Ethical Hacking", org: "Offenso Hackers Academy", color: "from-purple-500/20 to-transparent" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 lg:py-24 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md">
            <Award size={14} className="text-purple-400" />
            <span className="text-purple-300 font-space font-medium uppercase tracking-widest text-xs">Credentials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-space text-white mb-4">
            Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certs.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative active:scale-[0.98] transition-transform"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              
              <div className="relative glass-card p-6 lg:p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 h-full flex items-start gap-4 lg:gap-6 overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${cert.color} rounded-bl-full pointer-events-none opacity-50`}></div>
                
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                  <Award size={24} />
                </div>
                
                <div className="relative z-10 flex-1">
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors leading-tight">{cert.name}</h3>
                  <p className="text-gray-400 text-sm font-medium">{cert.org}</p>
                </div>
                
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 text-purple-400 translate-x-4 group-hover:translate-x-0">
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
