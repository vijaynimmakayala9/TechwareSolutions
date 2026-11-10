"use client";
import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import Button from "@/components/shared/Button";
const words = "Transforming Ideas Into Powerful Digital Solutions.".split(" ");
export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 70]);
  const blobY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -90]);
  const blob =
    "absolute rounded-full bg-[radial-gradient(circle,#BBF7D0_0%,transparent_68%)]";
  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-6 pb-24 pt-16 sm:pt-24"
    >
      <motion.div
        aria-hidden="true"
        style={{ y: blobY }}
        className="pointer-events-none absolute inset-0"
      >
        <motion.div
          className={`${blob} -right-24 -top-24 h-[28rem] w-[28rem]`}
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 9, repeat: Infinity }}
        />
        <motion.div
          className={`${blob} -bottom-32 -left-24 h-96 w-96 opacity-70`}
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 11, repeat: Infinity }}
        />
      </motion.div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-5xl lg:text-6xl">
            {words.map((w, i) => (
              <motion.span
                key={i}
                className="mr-[0.25em] inline-block"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.08 * i,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {w}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className="mt-6 max-w-lg text-lg text-ink-soft"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            We help businesses grow through innovative technology, creative
            digital experiences, and scalable IT solutions.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Button href="/services" className="hover:-translate-y-0.5">
              Explore Our Services
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              className="hover:-translate-y-0.5"
            >
              Let’s Discuss Your Project
            </Button>
          </motion.div>
        </div>
        <motion.div style={{ y: imgY }}>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
          >
            <Image
              src="/images/hero.svg"
              alt="Illustration of a website and a mobile app"
              width={640}
              height={480}
              priority
              className="h-auto w-full rounded-3xl shadow-soft"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
