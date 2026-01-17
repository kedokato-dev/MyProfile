"use client";

import { ReactNode } from "react";
import { clsx } from "clsx";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  title?: string;
}

export default function Section({ id, children, className, title }: SectionProps) {
  return (
    <section id={id} className={clsx("py-20 px-4 md:px-8 max-w-7xl mx-auto", className)}>
      {title && (
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter">
            <span className="text-neon-purple mr-2">&lt;</span>
            {title}
            <span className="text-neon-purple ml-2">/&gt;</span>
          </h2>
          <div className="h-px bg-gray-800 flex-grow max-w-xs" />
        </div>
      )}
      {children}
    </section>
  );
}
