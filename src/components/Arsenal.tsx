'use client';

import { useRef, useEffect } from 'react';

const techStack = [
  { name: 'Express', icon: <span className="text-gray-300 font-mono font-bold tracking-tighter text-sm">ex</span> },
  { name: 'MongoDB', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 w-5 h-5"><path d="M12 2C8.5 2 6 6 6 12c0 6 2.5 10 6 10s6-4 6-10c0-6-2.5-10-6-10Z"/><path d="M12 2v20"/></svg> },
  { name: 'PostgreSQL', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 w-5 h-5"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><ellipse cx="12" cy="10" rx="3" ry="2"/></svg> },
  { name: 'GraphQL', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500 w-5 h-5"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/><circle cx="12" cy="12" r="3"/></svg> },
  { name: 'Docker', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 w-5 h-5"><path d="M4 14v4h16v-4"/><path d="M4 10h16"/><path d="M8 10V6h8v4"/></svg> },
  { name: 'AWS', icon: <span className="text-yellow-500 font-bold text-sm tracking-tighter">aws</span> },
  { name: 'React', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 w-5 h-5"><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-45 12 12)"/></svg> },
  { name: 'Next.js', icon: <span className="text-white font-black text-sm">N</span> },
  { name: 'Tailwind', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-400 w-5 h-5"><path d="M12 4c-4 0-6 3-6 7s2 7 6 7 6-3 6-7-2-7-6-7Z"/><path d="M12 4c2 0 4 1 4 3 0 2-2 3-4 3"/></svg> },
  { name: 'TypeScript', icon: <span className="text-blue-500 font-bold text-sm bg-blue-500/10 px-1 rounded">TS</span> },
];

export default function Arsenal() {
  // Multiply array to ensure extremely long continuous scroll width
  const list = [...techStack, ...techStack, ...techStack, ...techStack, ...techStack, ...techStack, ...techStack, ...techStack];
  
  const containerRef = useRef<HTMLDivElement>(null);
  const isInteracting = useRef(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;

    const playMarquee = () => {
      // Auto move by 1px every frame when not being actively grabbed/hovered
      if (!isInteracting.current && container) {
        container.scrollLeft += 1;
        
        // Mathematically flawless looping block
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft -= container.scrollWidth / 2;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += container.scrollWidth / 2;
        }
      }
      animationFrameId = requestAnimationFrame(playMarquee);
    };

    animationFrameId = requestAnimationFrame(playMarquee);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleInteractionStart = () => {
    isInteracting.current = true;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isInteracting.current = true;
    isDragging.current = true;
    if (containerRef.current) {
      startX.current = e.pageX - containerRef.current.offsetLeft;
      scrollLeftStart.current = containerRef.current.scrollLeft;
    }
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    isInteracting.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    isInteracting.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Drag speed multiplier
    containerRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  return (
    <section className="relative z-20 bg-[#0a0a0a] py-32 md:py-32 overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-20">
        <h3 className="text-gray-500 text-[11px] font-bold tracking-[0.25em] uppercase mb-4">
          Technologies & Tools
        </h3>
        <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">
          My <span className="font-bold">Arsenal</span>
        </h2>
      </div>

      <div className="relative w-full overflow-hidden py-4 group">
        <div 
          ref={containerRef}
          onMouseEnter={handleInteractionStart}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleInteractionStart}
          onTouchEnd={handleMouseUp}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex overflow-x-auto gap-6 md:gap-8 px-6 md:px-12 pb-8 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {list.map((tech, i) => (
            <div 
              key={i} 
              className="flex items-center gap-5 px-8 py-5 md:px-10 md:py-6 rounded-full border border-white/10 bg-[#111] hover:bg-[#1a1a1a] transition-colors cursor-grab active:cursor-grabbing shadow-lg shrink-0"
            >
              <div className="flex items-center justify-center w-8 h-8 scale-125 pointer-events-none">
                {tech.icon}
              </div>
              <span className="text-gray-200 font-medium tracking-wide text-base md:text-lg whitespace-nowrap pointer-events-none">{tech.name}</span>
            </div>
          ))}
        </div>
        
        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
