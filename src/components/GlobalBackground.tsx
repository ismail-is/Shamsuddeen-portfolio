"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function GlobalBackground() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#0d0416]">
      {/* Dynamic Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-animated opacity-20 mix-blend-screen" />

      {/* Floating Orbs - Left */}
      <motion.div
        animate={{
          x: ["0%", "20%", "0%", "-20%", "0%"],
          y: ["0%", "10%", "-10%", "20%", "0%"],
          scale: [1, 1.2, 0.8, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen"
      />

      {/* Floating Orbs - Right */}
      <motion.div
        animate={{
          x: ["0%", "-20%", "0%", "10%", "0%"],
          y: ["0%", "-10%", "20%", "-20%", "0%"],
          scale: [1, 0.9, 1.3, 0.9, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[10%] right-[5%] w-[45vw] h-[45vw] max-w-[700px] max-h-[700px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen"
      />

      {/* Floating Orbs - Center */}
      <motion.div
        animate={{
          x: ["0%", "15%", "-15%", "0%"],
          y: ["0%", "15%", "-15%", "0%"],
          scale: [0.8, 1.1, 0.9, 0.8],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute top-[40%] left-[40%] w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] bg-fuchsia-600/10 rounded-full blur-[100px] mix-blend-screen"
      />

      {/* Starfield Particles */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      
      {/* Animated Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_10%,transparent_80%)]"></div>
    </div>
  );
}
