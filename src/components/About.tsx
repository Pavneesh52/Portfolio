'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative z-20 bg-[#0a0a0a] py-32 md:py-48 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-24 items-center">
          
          {/* Left: Featured Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-square md:aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#111] mx-auto max-w-2xl xl:max-w-none"
          >
            {/* Using a reliable dark aesthetic Unsplash placeholder for the retro/coding setup */}
            <img 
              src="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Macintosh Retro Workspace"
              className="w-full h-full object-cover opacity-70 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 ease-out hover:scale-105 cursor-pointer" 
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80 pointer-events-none" />

            {/* The Floating Aesthetic Badge */}
            <div className="absolute bottom-8 -right-6 md:-right-8 xl:-right-12 w-32 h-32 md:w-36 md:h-36 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl z-10">
              <span className="text-white text-xs md:text-sm tracking-[0.3em] font-medium uppercase rotate-90 opacity-70">
                Design
              </span>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center max-w-2xl mx-auto xl:max-w-none"
          >
            <h2 className="text-5xl md:text-7xl font-light text-white tracking-tighter mb-10">
              About <span className="font-bold">Me</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg md:text-[19px] font-light leading-relaxed">
              <p>
                As a Computer Science undergraduate, I specialize in full-stack web development, building scalable applications using React, Node.js, and databases like MongoDB and PostgreSQL. I focus strongly on creating responsive, efficient, and user-friendly modern interfaces.
              </p>
              <p>
                I am proficient in C++, Java, and Python with a deep interest in data structures and core algorithms. My technical toolkit includes Git, GitHub, Postman, and Vite, allowing me to write clean, maintainable code while constantly refining my problem-solving abilities.
              </p>
              <p>
                Beyond the code, I bring strong collaboration, leadership, and adaptability to every team environment. I am driven by the desire to quickly learn emerging technologies and build highly impactful, reliable digital solutions.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
