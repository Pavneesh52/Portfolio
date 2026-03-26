'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });
  // =============================================================
  // Compressed distribution: 3 sections within 0.0 → 0.60 scroll
  // Section 1 shorter, Sections 2 & 3 equal. Zero overlap.
  // All opacities explicitly pinned to 0 at scroll end (1.0)
  // =============================================================

  // Section 1: 0.00 → 0.15  (hold 0→0.10, fade out 0.10→0.15, stays hidden)
  const opacity1 = useTransform(scrollYProgress, [0, 0.10, 0.15, 0.16, 1.0], [1, 1, 0, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -60]);

  // Section 2: 0.16 → 0.38  (fade in 0.16→0.20, hold 0.20→0.33, fade out 0.33→0.38, stays hidden)
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.16, 0.20, 0.33, 0.38, 0.39, 1.0], [0, 0, 1, 1, 0, 0, 0]);
  const y2 = useTransform(scrollYProgress, [0.16, 0.38], [60, -60]);

  // Section 3: 0.39 → 0.60  (fade in 0.39→0.43, hold 0.43→0.55, fade out 0.55→0.60, stays hidden)
  const opacity3 = useTransform(scrollYProgress, [0.38, 0.39, 0.43, 0.55, 0.60, 0.61, 1.0], [0, 0, 1, 1, 0, 0, 0]);
  const y3 = useTransform(scrollYProgress, [0.39, 0.60], [60, -60]);

  return (
    <div ref={containerRef} className="absolute inset-0 z-10 pointer-events-none">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-8 md:px-24">

        {/* Section 1: Center */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-x-0 top-[65%] -translate-y-1/2 flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-white mb-4 [text-shadow:0_0_40px_rgba(255,255,255,0.8),0_0_80px_rgba(255,255,255,0.5)]">
            Pavneesh.
          </h1>
          <p className="text-4xl md:text-3xl text-white font-medium tracking-widest uppercase [text-shadow:0_0_30px_rgba(255,255,255,0.6),0_0_60px_rgba(255,255,255,0.4)]">
            Creative Geek.
          </p>
        </motion.div>

        {/* Section 2: Left */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute left-8 md:left-24 max-w-xl"
        >
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
            Building Digital Experiences.
          </h2>
        </motion.div>

        {/* Section 3: Right */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute right-8 md:right-24 max-w-xl text-right"
        >
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
            Bridging design<br />and engineering.
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
