"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 flex justify-center transition-all duration-500 ${
          scrolled ? "pt-4 px-4" : "pt-6 px-6 md:px-12"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "w-full max-w-5xl bg-[#0c120c]/70 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] rounded-full px-6 py-3"
              : "w-full max-w-7xl bg-transparent border-transparent px-0 py-2"
          }`}
        >
          {/* Logo */}
          <Link href="#home" className="text-2xl font-bold font-space text-white flex items-center gap-1 group">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 group-hover:to-white transition-all">Shamsuddeen</span>
            <span className="w-2 h-2 rounded-full bg-purple-500 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_#10b981]"></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
              >
                <span className="relative z-10">{link.name}</span>
                {/* Hover Pill */}
                <span className="absolute inset-0 bg-white/5 rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out z-0"></span>
              </Link>
            ))}
          </nav>

          {/* Let's Talk Button (Desktop) */}
          <div className="hidden lg:block">
            <a 
              href="mailto:mahammadshamsuddin548@gmail.com"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-white text-sm font-medium transition-all duration-300 overflow-hidden shadow-lg"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">Let&apos;s Talk</span>
              <div className="w-6 h-6 rounded-full bg-white text-[#0c120c] flex items-center justify-center relative z-10 group-hover:-rotate-45 transition-transform duration-300">
                <ArrowRight size={14} />
              </div>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden relative z-[60] w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white backdrop-blur-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[55] bg-[#0a0414]/95 backdrop-blur-2xl flex items-center justify-center lg:hidden"
          >
            {/* Background decorations */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-600/20 rounded-full blur-[80px]"></div>

            <nav className="flex flex-col items-center gap-8 relative z-10 w-full px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="overflow-hidden"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-space font-bold text-white/70 hover:text-white transition-colors flex items-center gap-4 group"
                  >
                    <span className="w-0 h-1 bg-purple-500 rounded-full transition-all duration-300 group-hover:w-8"></span>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: navLinks.length * 0.05 }}
                className="mt-8"
              >
                <a 
                  href="mailto:mahammadshamsuddin548@gmail.com"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0c120c] rounded-full font-bold text-lg"
                >
                  Let&apos;s Talk
                  <ArrowRight size={20} />
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
