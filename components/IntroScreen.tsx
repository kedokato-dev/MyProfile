"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlitchText from "./GlitchText";

export default function IntroScreen() {
  const [isVisible, setIsVisible] = useState(true);

  const handleEnter = () => {
    // Trigger music start if available
    if ((window as any).startMusic) {
        (window as any).startMusic();
    }
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center cursor-pointer"
          onClick={handleEnter}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8 }}
        >
            <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
            
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center relative z-10"
            >
                <div className="mb-8">
                    <GlitchText 
                        text="SYSTEM_OFFLINE" 
                        className="text-4xl md:text-6xl text-gray-500 tracking-widest block mb-2" 
                    />
                    <p className="text-neon-blue font-mono text-sm md:text-base animate-pulse">
                        TOUCH_TERMINAL_TO_INITIALIZE
                    </p>
                </div>

                <div className="w-64 h-64 border border-neon-blue/30 rounded-full flex items-center justify-center mx-auto relative group">
                     <div className="absolute inset-0 rounded-full border border-neon-blue/20 animate-ping" />
                     <div className="w-56 h-56 rounded-full bg-neon-blue/5 flex items-center justify-center group-hover:bg-neon-blue/10 transition-colors">
                        <span className="text-2xl font-bold text-white tracking-widest">ENTER</span>
                     </div>
                </div>
            </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
