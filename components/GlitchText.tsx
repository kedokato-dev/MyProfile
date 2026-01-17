"use client";

import { clsx } from "clsx";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function GlitchText({ text, className, as: Tag = "span" }: GlitchTextProps) {
  return (
    <Tag
      className={clsx("glitch-text font-bold", className)}
      data-text={text}
    >
      {text}
    </Tag>
  );
}
