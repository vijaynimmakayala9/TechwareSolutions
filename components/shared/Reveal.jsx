"use client";
import { motion } from "framer-motion";
export default function Reveal({
  children,
  delay = 0,
  className = "",
  blur = false,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24, ...(blur && { filter: "blur(6px)" }) }}
      whileInView={{ opacity: 1, y: 0, ...(blur && { filter: "blur(0px)" }) }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
