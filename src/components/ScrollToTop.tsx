"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          className="fixed bottom-8 right-8 z-[60]"
        >
          <button
            onClick={scrollToTop}
            className="relative group p-4 rounded-full bg-[#110720]/80 backdrop-blur-xl border border-purple-500/30 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300"
          >
            {/* Circular Progress Ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
              <circle
                cx="50%"
                cy="50%"
                r="46%"
                className="stroke-white/5"
                strokeWidth="2"
                fill="none"
              />
              <motion.circle
                cx="50%"
                cy="50%"
                r="46%"
                className="stroke-purple-500"
                strokeWidth="2"
                fill="none"
                style={{ pathLength: scrollYProgress }}
              />
            </svg>

            <div className="relative z-10 flex items-center justify-center">
              <ArrowUp 
                size={24} 
                className="group-hover:-translate-y-1 transition-transform duration-300" 
              />
            </div>

            {/* Aesthetic Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
