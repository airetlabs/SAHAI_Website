import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Meteors = ({ number = 20, className }: { number?: number; className?: string }) => {
  const [meteors, setMeteors] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    // Generate meteors only on client side to avoid hydration mismatch
    const newMeteors = new Array(number).fill(true).map((_, idx) => ({
      id: idx,
      left: Math.floor(Math.random() * (1000 - -400) + -400),
      delay: Math.random() * (0.6 - 0.1) + 0.1,
      duration: Math.random() * (4 - 1.5) + 1.5,
    }));
    setMeteors(newMeteors);
  }, [number]);

  if (meteors.length === 0) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className || ""}`}>
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="absolute left-1/2 top-1/2 h-[3px] w-[3px] rounded-[9999px] bg-slate-400 shadow-[0_0_0_1px_#ffffff20] rotate-[215deg]"
          style={{
            top: 0,
            left: `${meteor.left}px`,
            animation: `meteor ${meteor.duration}s linear infinite`,
            animationDelay: `${meteor.delay}s`,
          }}
        >
          {/* Meteor Tail */}
          <div className="absolute top-1/2 -z-10 h-[2px] w-[80px] -translate-y-[50%] bg-gradient-to-r from-slate-400/80 to-transparent" />
        </span>
      ))}
      <style>{`
        @keyframes meteor {
          0% { transform: rotate(215deg) translateX(0); opacity: 1; }
          70% { opacity: 1; }
          100% {
            transform: rotate(215deg) translateX(-500px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
