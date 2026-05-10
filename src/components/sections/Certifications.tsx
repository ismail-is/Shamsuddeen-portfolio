"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const certs = [
  { 
    name: "Digital Marketing Certificate", 
    org: "Google / Meta (E26 media pvt ltd)", 
    color: "from-purple-500/20 to-transparent",
    message: "Digital Marketing Certificate document is currently being processed and will be available online soon."
  },
  { 
    name: "Cyber Security Certificate", 
    org: "EYEQ DOT NET PVT LTD", 
    color: "from-indigo-500/20 to-transparent",
    file: "/images/Certificate/MAHAMMAD SHAMSUDDIN Certificate_page-0001.jpg"
  },
  { 
    name: "Introduction to Human Communication", 
    org: "University Course", 
    color: "from-blue-500/20 to-transparent",
    message: "This certificate is part of the university academic records. Available upon request."
  },
  { 
    name: "Introduction to Ethical Hacking", 
    org: "Offenso Hackers Academy", 
    color: "from-purple-500/20 to-transparent",
    file: "/images/Certificate/Mohammad shamsuddeen Internship Completion Certificate_page-0001.jpg"
  },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<typeof certs[0] | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedCert]);

  return (
    <section id="certifications" className={`py-20 lg:py-24 relative overflow-hidden bg-transparent ${selectedCert ? 'z-[100]' : 'z-10'}`}>
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
              className="group relative active:scale-[0.98] transition-transform cursor-pointer"
              onClick={() => setSelectedCert(cert)}
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

        {/* Modal / Popup */}
        <AnimatePresence>
          {selectedCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCert(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />

              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative w-full max-w-4xl bg-[#0a0414] border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10"
              >
                {/* Header */}
                <div className="p-6 border-bottom border-white/5 flex justify-between items-center bg-white/5">
                  <div>
                    <h3 className="text-xl font-bold text-white">{selectedCert.name}</h3>
                    <p className="text-sm text-gray-400">{selectedCert.org}</p>
                  </div>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-purple-500 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Body */}
                <div className="p-6 max-h-[70vh] overflow-auto">
                  {selectedCert.file ? (
                    <div className="relative aspect-[3/2] w-full bg-white/5 rounded-xl overflow-hidden">
                      <Image
                        src={selectedCert.file}
                        alt={selectedCert.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="py-12 text-center">
                      <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award size={32} className="text-purple-400" />
                      </div>
                      <p className="text-gray-300 text-lg max-w-md mx-auto">
                        {selectedCert.message}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
