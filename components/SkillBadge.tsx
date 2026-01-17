"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  delay?: number;
}

export default function SkillBadge({ name, delay = 0 }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ scale: 1.1, color: "#00f3ff", borderColor: "#00f3ff" }}
      className="px-4 py-2 border border-gray-700 bg-black/50 rounded-full text-sm md:text-base cursor-default transition-colors hover:shadow-[0_0_10px_rgba(0,243,255,0.3)]"
    >
      {name}
    </motion.div>
  );
}
