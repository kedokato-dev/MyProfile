"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { clsx } from "clsx";

interface NeonButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "blue" | "purple" | "pink";
}

export default function NeonButton({
  children,
  onClick,
  className,
  variant = "blue",
}: NeonButtonProps) {
  const colors = {
    blue: "border-neon-blue text-neon-blue shadow-[0_0_10px_rgba(0,243,255,0.5)] hover:shadow-[0_0_20px_rgba(0,243,255,0.8)]",
    purple: "border-neon-purple text-neon-purple shadow-[0_0_10px_rgba(188,19,254,0.5)] hover:shadow-[0_0_20px_rgba(188,19,254,0.8)]",
    pink: "border-neon-pink text-neon-pink shadow-[0_0_10px_rgba(255,0,85,0.5)] hover:shadow-[0_0_20px_rgba(255,0,85,0.8)]",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={clsx(
        "px-6 py-2 border-2 bg-transparent font-bold uppercase tracking-wider transition-all duration-300",
        colors[variant],
        className
      )}
    >
      {children}
    </motion.button>
  );
}
