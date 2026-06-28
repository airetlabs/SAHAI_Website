// // import { motion } from "framer-motion";
// // import { useEffect, useState } from "react";

// // type Domain = {
// //   id: string;
// //   label: string;
// //   short: string;
// //   ring: 0 | 1; // inner / outer orbit
// //   angle: number; // degrees on orbit
// // };

// // const DOMAINS: Domain[] = [
// //   { id: "ml", label: "Machine Learning", short: "ML", ring: 0, angle: 0 },
// //   { id: "dl", label: "Deep Learning", short: "DL", ring: 0, angle: 72 },
// //   { id: "cv", label: "Computer Vision", short: "CV", ring: 0, angle: 144 },
// //   { id: "nlp", label: "Natural Language", short: "NLP", ring: 0, angle: 216 },
// //   { id: "gen", label: "Generative AI", short: "GenAI", ring: 0, angle: 288 },
// //   { id: "hai", label: "Healthcare AI", short: "HAI", ring: 1, angle: 36 },
// //   { id: "kg", label: "Knowledge Systems", short: "KG", ring: 1, angle: 108 },
// //   { id: "xai", label: "Explainable AI", short: "XAI", ring: 1, angle: 180 },
// //   { id: "edge", label: "Edge AI", short: "Edge", ring: 1, angle: 252 },
// //   { id: "rob", label: "Robotics", short: "Rob", ring: 1, angle: 324 },
// // ];

// // export function ResearchEcosystemSphere() {
// //   // size in px for inner box; uses CSS coords centered at (0,0)
// //   const inner = 38; // % radius of inner orbit
// //   const outer = 46; // % of outer orbit (kept inside container)
// //   const [tick, setTick] = useState(0);

// //   // global slow rotation tick — drives subtle counter-rotation of labels
// //   useEffect(() => {
// //     let raf = 0;
// //     let last = performance.now();
// //     const loop = (t: number) => {
// //       if (t - last > 50) {
// //         setTick((v) => (v + 1) % 36000);
// //         last = t;
// //       }
// //       raf = requestAnimationFrame(loop);
// //     };
// //     raf = requestAnimationFrame(loop);
// //     return () => cancelAnimationFrame(raf);
// //   }, []);

// //   const innerRotation = (tick * 0.6) % 360; // very slow
// //   const outerRotation = -(tick * 0.4) % 360;

// //   const position = (d: Domain) => {
// //     const rot = d.ring === 0 ? innerRotation : outerRotation;
// //     const angle = ((d.angle + rot) * Math.PI) / 180;
// //     const r = d.ring === 0 ? inner : outer;
// //     const x = 50 + Math.cos(angle) * r;
// //     const y = 50 + Math.sin(angle) * r;
// //     return { x, y };
// //   };

// //   return (
// //     <div className="relative w-full aspect-square">
// //       {/* ambient gradient */}
// //       <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,oklch(0.68_0.165_55/0.18),transparent_65%)]" />
// //       <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_30%_30%,oklch(1_0_0/0.6),transparent_60%)] mix-blend-overlay" />

// //       {/* concentric guides */}
// //       {[28, 38, 46].map((r, i) => (
// //         <motion.div
// //           key={r}
// //           className="absolute rounded-full border border-ink/10"
// //           style={{
// //             inset: `${50 - r}%`,
// //           }}
// //           initial={{ opacity: 0, scale: 0.85 }}
// //           animate={{ opacity: 1, scale: 1 }}
// //           transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
// //         />
// //       ))}

// //       {/* sweep pulses */}
// //       {[0, 1.6, 3.2].map((d) => (
// //         <motion.div
// //           key={d}
// //           className="absolute inset-[22%] rounded-full border border-accent/40"
// //           initial={{ scale: 0.5, opacity: 0 }}
// //           animate={{ scale: [0.5, 1.4], opacity: [0, 0.35, 0] }}
// //           transition={{ duration: 4.8, delay: d, repeat: Infinity, ease: "easeOut" }}
// //         />
// //       ))}

// //       {/* connection lines from center to each node */}
// //       <svg className="absolute inset-0 w-full h-full overflow-visible" aria-hidden>
// //         <defs>
// //           <linearGradient id="connGrad" x1="0%" y1="0%" x2="100%" y2="0%">
// //             <stop offset="0%" stopColor="oklch(0.18 0.012 60)" stopOpacity="0.5" />
// //             <stop offset="100%" stopColor="oklch(0.68 0.165 55)" stopOpacity="0" />
// //           </linearGradient>
// //         </defs>
// //         {DOMAINS.map((d, i) => {
// //           const p = position(d);
// //           return (
// //             <motion.line
// //               key={d.id}
// //               x1="50%"
// //               y1="50%"
// //               x2={`${p.x}%`}
// //               y2={`${p.y}%`}
// //               stroke="url(#connGrad)"
// //               strokeWidth={d.ring === 0 ? 1 : 0.6}
// //               initial={{ pathLength: 0, opacity: 0 }}
// //               animate={{ pathLength: 1, opacity: 1 }}
// //               transition={{ duration: 1.4, delay: 0.6 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
// //             />
// //           );
// //         })}
// //       </svg>

// //       {/* central SAHAI node */}
// //       <motion.div
// //         className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
// //         initial={{ scale: 0.4, opacity: 0 }}
// //         animate={{ scale: 1, opacity: 1 }}
// //         transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
// //       >
// //         <div className="relative">
// //           <motion.div
// //             className="absolute inset-0 rounded-full bg-accent/30 blur-2xl"
// //             animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.8, 0.5] }}
// //             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
// //           />
// //           <div className="relative grid place-items-center size-24 sm:size-28 rounded-full bg-ink text-canvas shadow-[0_20px_60px_-10px_oklch(0.18_0.012_60/0.5)] ring-1 ring-ink/40">
// //             <div className="text-center">
// //               <div className="font-display text-lg font-semibold leading-none">SAHAI</div>
// //               <div className="eyebrow text-[8px] text-accent mt-1">CORE · AI</div>
// //             </div>
// //           </div>
// //         </div>
// //       </motion.div>

// //       {/* orbiting domain nodes */}
// //       {DOMAINS.map((d, i) => {
// //         const p = position(d);
// //         return (
// //           <motion.div
// //             key={d.id}
// //             className="absolute -translate-x-1/2 -translate-y-1/2"
// //             style={{ left: `${p.x}%`, top: `${p.y}%` }}
// //             initial={{ opacity: 0, scale: 0.6 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 0.7, delay: 0.9 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
// //           >
// //             <motion.div
// //               animate={{ y: [0, -6, 0] }}
// //               transition={{
// //                 duration: 3.5 + (i % 3),
// //                 repeat: Infinity,
// //                 ease: "easeInOut",
// //                 delay: i * 0.2,
// //               }}
// //               className="group relative flex items-center gap-2"
// //             >
// //               <div className="relative">
// //                 <span className="absolute inset-0 rounded-full bg-accent/30 blur-md animate-pulse" />
// //                 <span
// //                   className={`relative block rounded-full ${
// //                     d.ring === 0
// //                       ? "size-3 bg-accent ring-4 ring-accent/15"
// //                       : "size-2.5 bg-ink ring-4 ring-ink/10"
// //                   }`}
// //                 />
// //               </div>
// //               <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-surface/90 backdrop-blur ring-1 ring-border px-2.5 py-1 shadow-sm">
// //                 <span className="font-mono text-[9px] text-ink/40">
// //                   {String(i + 1).padStart(2, "0")}
// //                 </span>
// //                 <span className="text-[11px] font-medium text-ink whitespace-nowrap">
// //                   {d.label}
// //                 </span>
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         );
// //       })}
// //     </div>
// //   );
// // }
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// type Domain = {
//   id: string;
//   label: string;
//   short: string;
//   ring: 0 | 1; // inner / outer orbit
//   angle: number; // degrees on orbit
//   size: "sm" | "md" | "lg"; // sphere size — independent of ring
// };

// const DOMAINS: Domain[] = [
//   { id: "ml", label: "Machine Learning", short: "ML", ring: 0, angle: 0, size: "lg" },
//   { id: "dl", label: "Deep Learning", short: "DL", ring: 0, angle: 72, size: "md" },
//   { id: "cv", label: "Computer Vision", short: "CV", ring: 0, angle: 144, size: "lg" },
//   { id: "nlp", label: "Natural Language", short: "NLP", ring: 0, angle: 216, size: "md" },
//   { id: "gen", label: "Generative AI", short: "GenAI", ring: 0, angle: 288, size: "lg" },
//   { id: "hai", label: "Healthcare AI", short: "HAI", ring: 1, angle: 36, size: "sm" },
//   { id: "kg", label: "Knowledge Systems", short: "KG", ring: 1, angle: 108, size: "md" },
//   { id: "xai", label: "Explainable AI", short: "XAI", ring: 1, angle: 180, size: "sm" },
//   { id: "edge", label: "Edge AI", short: "Edge", ring: 1, angle: 252, size: "sm" },
//   { id: "rob", label: "Robotics", short: "Rob", ring: 1, angle: 324, size: "md" },
// ];

// // Maps the size tier to dot diameter + ring thickness classes
// const sizeStyles: Record<Domain["size"], string> = {
//   sm: "size-2 ring-[3px]",
//   md: "size-2.5 ring-4",
//   lg: "size-3.5 ring-[5px]",
// };

// export function ResearchEcosystemSphere() {
//   const inner = 38; // % radius of inner orbit
//   const outer = 46; // % of outer orbit (kept inside container)
//   const [tick, setTick] = useState(0);

//   useEffect(() => {
//     let raf = 0;
//     let last = performance.now();
//     const loop = (t: number) => {
//       if (t - last > 50) {
//         setTick((v) => (v + 1) % 36000);
//         last = t;
//       }
//       raf = requestAnimationFrame(loop);
//     };
//     raf = requestAnimationFrame(loop);
//     return () => cancelAnimationFrame(raf);
//   }, []);

//   const innerRotation = (tick * 0.6) % 360;
//   const outerRotation = -(tick * 0.4) % 360;

//   const position = (d: Domain) => {
//     const rot = d.ring === 0 ? innerRotation : outerRotation;
//     const angle = ((d.angle + rot) * Math.PI) / 180;
//     const r = d.ring === 0 ? inner : outer;
//     const x = 50 + Math.cos(angle) * r;
//     const y = 50 + Math.sin(angle) * r;
//     return { x, y };
//   };

//   return (
//     <div className="relative w-full aspect-square">
//       {/* ambient gradient */}
//       <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,oklch(0.68_0.165_55/0.18),transparent_65%)]" />
//       <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_30%_30%,oklch(1_0_0/0.6),transparent_60%)] mix-blend-overlay" />

//       {/* concentric guides */}
//       {[28, 38, 46].map((r, i) => (
//         <motion.div
//           key={r}
//           className="absolute rounded-full border border-ink/10"
//           style={{
//             inset: `${50 - r}%`,
//           }}
//           initial={{ opacity: 0, scale: 0.85 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
//         />
//       ))}

//       {/* sweep pulses */}
//       {[0, 1.6, 3.2].map((d) => (
//         <motion.div
//           key={d}
//           className="absolute inset-[22%] rounded-full border border-accent/40"
//           initial={{ scale: 0.5, opacity: 0 }}
//           animate={{ scale: [0.5, 1.4], opacity: [0, 0.35, 0] }}
//           transition={{ duration: 4.8, delay: d, repeat: Infinity, ease: "easeOut" }}
//         />
//       ))}

//       {/* central SAHAI node */}
//       <motion.div
//         className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
//         initial={{ scale: 0.4, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
//       >
//         <div className="relative">
//           <motion.div
//             className="absolute inset-0 rounded-full bg-accent/30 blur-2xl"
//             animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.8, 0.5] }}
//             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//           />
//           <div className="relative grid place-items-center size-24 sm:size-28 rounded-full bg-ink text-canvas shadow-[0_20px_60px_-10px_oklch(0.18_0.012_60/0.5)] ring-1 ring-ink/40">
//             <div className="text-center">
//               <div className="font-display text-lg font-semibold leading-none">SAHAI</div>
//               <div className="eyebrow text-[8px] text-accent mt-1">CORE · AI</div>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {/* orbiting domain nodes */}
//       {DOMAINS.map((d, i) => {
//         const p = position(d);
//         return (
//           <motion.div
//             key={d.id}
//             className="absolute -translate-x-1/2 -translate-y-1/2"
//             style={{ left: `${p.x}%`, top: `${p.y}%` }}
//             initial={{ opacity: 0, scale: 0.6 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.7, delay: 0.9 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
//           >
//             <motion.div
//               animate={{ y: [0, -6, 0] }}
//               transition={{
//                 duration: 3.5 + (i % 3),
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: i * 0.2,
//               }}
//               className="group relative flex items-center gap-2"
//             >
//               <div className="relative">
//                 <span className="absolute inset-0 rounded-full bg-accent/30 blur-md animate-pulse" />
//                 <span
//                   className={`relative block rounded-full ${sizeStyles[d.size]} ${
//                     d.ring === 0
//                       ? "bg-accent ring-accent/15"
//                       : "bg-ink ring-ink/10"
//                   }`}
//                 />
//               </div>
//               <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-surface/90 backdrop-blur ring-1 ring-border px-2.5 py-1 shadow-sm">
//                 <span className="font-mono text-[9px] text-ink/40">
//                   {String(i + 1).padStart(2, "0")}
//                 </span>
//                 <span className="text-[11px] font-medium text-ink whitespace-nowrap">
//                   {d.label}
//                 </span>
//               </div>
//             </motion.div>
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// }
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Domain = {
  id: string;
  label: string;
  short: string;
  ring: 0 | 1;
  angle: number;
  size: "sm" | "md" | "lg";
};

// Ring 0 (inner, 4 nodes) evenly spaced at 90° apart.
// Ring 1 (outer, 3 nodes) staggered at 45/165/285 so they sit
// between the inner nodes instead of clumping near them.
const DOMAINS: Domain[] = [
  { id: "dl", label: "Deep Learning", short: "DL", ring: 0, angle: 0, size: "lg" },
  { id: "nlp", label: "Natural Language Processing", short: "NLP", ring: 0, angle: 90, size: "lg" },
  { id: "gen", label: "Generative AI", short: "GenAI", ring: 0, angle: 180, size: "md" },
  { id: "csg", label: "Computational Science for Social Good", short: "CSG", ring: 0, angle: 270, size: "lg" },
  { id: "kg", label: "Data Mining", short: "DM", ring: 1, angle: 45, size: "md" },
  { id: "hai", label: "Data Compression", short: "DC", ring: 1, angle: 165, size: "sm" },
  { id: "hci", label: "Human Computer Interaction", short: "HCI", ring: 1, angle: 285, size: "md" },
];

const sizeConfig: Record<Domain["size"], { ball: string; glow: string; shine: string }> = {
  sm: { ball: "size-3", glow: "size-6", shine: "size-1" },
  md: { ball: "size-4.5", glow: "size-8", shine: "size-1.5" },
  lg: { ball: "size-6", glow: "size-10", shine: "size-2" },
};

export function ResearchEcosystemSphere() {
  const inner = 34;
  const outer = 49;
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const loop = (t: number) => {
      if (t - last > 50) {
        setTick((v) => (v + 1) % 36000);
        last = t;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const innerRotation = (tick * 0.12) % 360;
  const outerRotation = -(tick * 0.08) % 360;

  const position = (d: Domain) => {
    const rot = d.ring === 0 ? innerRotation : outerRotation;
    const angleRad = ((d.angle + rot) * Math.PI) / 180;
    const r = d.ring === 0 ? inner : outer;
    return {
      x: 50 + Math.cos(angleRad) * r,
      y: 50 + Math.sin(angleRad) * r,
    };
  };

  return (
    <div className="relative w-full max-w-[500px] mx-auto aspect-square">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,oklch(0.68_0.165_55/0.18),transparent_65%)]" />
      <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_30%_30%,oklch(1_0_0/0.6),transparent_60%)] mix-blend-overlay" />

      {[28, 34, 49].map((r, i) => (
        <motion.div
          key={r}
          className={`absolute rounded-full border ${i === 2 ? "border-dashed border-ink/15" : "border-ink/10"}`}
          style={{ inset: `${50 - r}%` }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1, rotate: i === 2 ? 360 : 0 }}
          transition={i === 2 ? { duration: 180, repeat: Infinity, ease: "linear" } : { duration: 1.2, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}

      {[0, 1.6, 3.2].map((d) => (
        <motion.div
          key={d}
          className="absolute inset-[22%] rounded-full border-2 border-accent/30 mix-blend-overlay shadow-[0_0_15px_rgba(var(--color-accent),0.3)]"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [0.5, 1.6], opacity: [0, 0.4, 0] }}
          transition={{ duration: 4.8, delay: d, repeat: Infinity, ease: "easeOut" }}
        />
      ))}

      {/* central SAHAI node */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative">
          <motion.div
            className="absolute inset-0 rounded-full bg-accent/30 blur-2xl"
            animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -inset-4 rounded-full border border-dashed border-accent/30"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <div className="relative grid place-items-center size-20 sm:size-24 rounded-full bg-gradient-to-br from-ink-soft to-ink backdrop-blur-xl text-canvas shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6),inset_0_-10px_20px_rgba(0,0,0,0.7),inset_0_4px_12px_rgba(255,255,255,0.25)] ring-1 ring-white/20 overflow-hidden">
            <div className="absolute -top-[10%] left-[15%] w-[70%] h-[45%] rounded-[100%] bg-gradient-to-b from-white/35 to-transparent opacity-90 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/40 to-transparent mix-blend-overlay pointer-events-none" />

            <div className="text-center relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              <div className="font-display text-xl sm:text-2xl font-bold tracking-wider bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent drop-shadow-md">SAHAI</div>
              <div className="eyebrow text-[9px] sm:text-[10px] text-accent font-bold tracking-[0.2em] mt-1.5 uppercase">Ecosystem</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* orbiting domain nodes */}
      {DOMAINS.map((d, i) => {
        const p = position(d);
        const cfg = sizeConfig[d.size];
        const isGold = d.ring === 0;
        return (
          <motion.div
            key={d.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.9 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 3.5 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
              className="group relative flex items-center gap-2"
            >
              {/* sphere — glossy 3D look + spins on its own axis */}
              <div className={`relative shrink-0 ${cfg.ball}`}>
                {/* ambient glow, doesn't spin */}
                <span
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-md ${cfg.glow} ${
                    isGold ? "bg-accent/40" : "bg-slate-500/30"
                  } animate-pulse`}
                />
                {/* base sphere body — gradient + inset shading for 3D depth */}
                <span
                  className={`absolute inset-0 rounded-full ${
                    isGold
                      ? "bg-gradient-to-br from-accent to-accent/70"
                      : "bg-gradient-to-br from-slate-600 to-ink"
                  } shadow-[inset_-3px_-3px_6px_rgba(0,0,0,0.45),inset_2px_2px_4px_rgba(255,255,255,0.15),0_6px_12px_rgba(0,0,0,0.35)] ring-1 ring-white/25`}
                />
                {/* static top-left glare, like the central node */}
                <span className="absolute top-[12%] left-[18%] w-[45%] h-[35%] rounded-[100%] bg-white/40 blur-[1px] pointer-events-none" />
                {/* rotating shine — sells the "spinning globe" effect */}
                <motion.span
                  className="absolute inset-0 rounded-full overflow-hidden mix-blend-overlay"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 5 + (i % 4) * 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <span
                    className={`absolute top-[10%] left-[15%] rounded-full bg-white/90 blur-[1px] ${cfg.shine}`}
                  />
                </motion.span>
              </div>

              {/* label */}
              <div className="hidden sm:flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md ring-1 ring-black/5 px-3 py-1.5 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform cursor-default">
                <div className={`size-1.5 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.3)] ${isGold ? "bg-accent shadow-accent/50" : "bg-ink/70"}`} />
                <span className="text-[13px] font-bold text-ink whitespace-nowrap tracking-tight">
                  {d.label}
                </span>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}