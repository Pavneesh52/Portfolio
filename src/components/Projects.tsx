'use client';

import { motion } from 'framer-motion';

function LayersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
      <polyline points="2 12 12 17 22 12"/>
      <polyline points="2 17 12 22 22 17"/>
    </svg>
  );
}

function ServerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
      <line x1="6" y1="6" x2="6.01" y2="6"/>
      <line x1="6" y1="18" x2="6.01" y2="18"/>
    </svg>
  );
}

function RocketIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  );
}

function MonitorIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="14" x="2" y="3" rx="2"/>
      <line x1="8" x2="16" y1="21" y2="21"/>
      <line x1="12" x2="12" y1="17" y2="21"/>
    </svg>
  );
}

export default function Projects() {
  const capabilities = [
    { 
      title: 'Frontend Architecture', 
      description: 'Designing scalable, maintainable, and high-performance frontend systems for enterprise applications using React, Next.js, and TypeScript.', 
      icon: <LayersIcon className="w-6 h-6 text-blue-400" />,
      color: "border-blue-500/20 bg-blue-500/10"
    },
    { 
      title: 'Full-Stack Development', 
      description: 'Building seamless end-to-end applications with robust Node.js backend services and modern interactive user interfaces.', 
      icon: <ServerIcon className="w-6 h-6 text-emerald-400" />,
      color: "border-emerald-500/20 bg-emerald-500/10"
    },
    { 
      title: 'Performance Optimization', 
      description: 'Auditing and optimizing web applications for maximum speed, SEO, and accessibility to deliver a flawless UX.', 
      icon: <RocketIcon className="w-6 h-6 text-yellow-400" />,
      color: "border-yellow-500/20 bg-yellow-500/10"
    },
    { 
      title: 'UI/UX Engineering', 
      description: 'Translating beautiful designs into pixel-perfect, accessible, and responsive layouts with sophisticated micro-interactions.', 
      icon: <MonitorIcon className="w-6 h-6 text-pink-400" />,
      color: "border-pink-500/20 bg-pink-500/10"
    },
  ];

  return (
    <section id="work" className="relative z-20 bg-[#121212] py-32 md:py-48 px-6 md:px-12 text-white">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">
            What I <span className="font-bold">Do</span>
          </h2>
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-400 shadow-sm">
            Core Capabilities
          </span>
        </motion.div>
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 w-full">
          {capabilities.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              // Math.floor(i / 2) groups items 0,1 into delay 0 and 2,3 into delay 0.2
              transition={{ duration: 0.7, delay: Math.floor(i / 2) * 0.15, ease: "easeOut" }}
              className="group p-10 md:p-12 rounded-[2rem] bg-[#1a1a1a] border border-white/5 hover:border-white/10 transition-all duration-500 cursor-default shadow-lg"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border mb-8 ${item.color}`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
