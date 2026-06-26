import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
};

export function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "0px 0px -50px 0px" }}
      transition={{ type: "spring", stiffness: 85, damping: 18, mass: 1.2, delay }}
      style={{ willChange: "transform, opacity, filter" }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  delay = 0,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div 
      className={className} 
      variants={defaultVariants} 
      transition={{ type: "spring", stiffness: 85, damping: 18, mass: 1.2 }}
      style={{ willChange: "transform, opacity, filter" }}
    >
      {children}
    </motion.div>
  );
}

/** Character-by-character reveal */
export function RevealChars({
  text,
  className,
  delay = 0,
  charDelay = 0.025,
}: {
  text: string;
  className?: string;
  delay?: number;
  charDelay?: number;
}) {
  return (
    <span className={className} aria-label={text}>
      {Array.from(text).map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block"
          initial={{ opacity: 0, y: "0.5em", filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          style={{ willChange: "transform, opacity, filter" }}
          transition={{
            type: "spring",
            stiffness: 90,
            damping: 20,
            mass: 1,
            delay: delay + i * charDelay,
          }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
}

/** Word-by-word reveal */
export function RevealWords({
  text,
  className,
  delay = 0,
  wordDelay = 0.05,
}: {
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
}) {
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: "0.4em", filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          style={{ willChange: "transform, opacity, filter" }}
          transition={{
            type: "spring",
            stiffness: 85,
            damping: 18,
            mass: 1.1,
            delay: delay + i * wordDelay,
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
