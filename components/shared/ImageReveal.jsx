"use client";
import { motion } from "framer-motion";
// Clip-path mask reveal with a slow scale-in. Use below the fold only (never on the LCP image).
export default function ImageReveal({ children, className = "" }) {
  return (
    <motion.div
      className={`overflow-hidden rounded-3xl ${className}`}
      initial={{ clipPath: "inset(12% 12% 12% 12% round 24px)", scale: 1.06 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 24px)", scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
