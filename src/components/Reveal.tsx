import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export function Reveal({
  children,
  delay = 0,
  y = 24,
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
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "0px 0px -50px 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ willChange: "transform, opacity" }}
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
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{ willChange: "transform, opacity" }}
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
          initial={{ opacity: 0, y: "0.5em" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          style={{ willChange: "transform, opacity" }}
          transition={{
            duration: 0.6,
            delay: delay + i * charDelay,
            ease: [0.16, 1, 0.3, 1],
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
  wordDelay = 0.06,
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
          initial={{ opacity: 0, y: "0.4em" }}
          animate={{ opacity: 1, y: 0 }}
          style={{ willChange: "transform, opacity" }}
          transition={{
            duration: 0.7,
            delay: delay + i * wordDelay,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
