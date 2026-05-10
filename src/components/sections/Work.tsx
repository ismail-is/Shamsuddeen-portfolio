"use client";

import { motion } from "framer-motion";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const posters = Array.from({ length: 16 }, (_, i) => `/images/work/poster${i + 1}.webp`);

export default function Work() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = posters.length - itemsToShow;

  const next = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="work" className="py-20 lg:py-32 relative overflow-hidden bg-transparent">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md">
            <Sparkles size={14} className="text-purple-400" />
            <span className="text-purple-300 font-space font-medium uppercase tracking-widest text-xs">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-space text-white mb-4 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-white">Creations</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-transparent mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative group">
          
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-purple-500/50 hover:border-purple-400 backdrop-blur-sm"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-purple-500/50 hover:border-purple-400 backdrop-blur-sm"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slider Window */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * (100 / posters.length)}%` }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              style={{ width: `${(posters.length / itemsToShow) * 100}%` }}
            >
              {posters.map((src, index) => (
                <div
                  key={index}
                  className="px-3"
                  style={{ width: `${100 / posters.length}%` }}
                >
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden glass-card border border-white/10 hover:border-purple-500/50 transition-all duration-500 group/item">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0414] via-transparent to-transparent opacity-60 z-10" />
                    <Image
                      src={src}
                      alt={`Poster ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center group-hover/item:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-purple-900/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 z-15" />
                    
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="text-xs font-space text-purple-300 uppercase tracking-widest font-bold">Project {index + 1}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "w-6 bg-purple-500" : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
