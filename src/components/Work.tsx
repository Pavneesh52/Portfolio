'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

function ArrowUpRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

const projects = [
  {
    title: 'Student Hub',
    category: 'MULTIPURPOSE STUDENT PLATFORM',
    link: '#',
    image: '/Student_hub.png', // e.g., '/images/student-hub.jpg'
    placeholder: 'bg-gradient-to-br from-[#1a1c29] via-[#111116] to-black',
  },
  {
    title: 'CodeWars',
    category: 'COMPETITIVE CODING ROOMS',
    link: 'https://code-wars-six.vercel.app/dashboard',
    image: '/codewars.png',
    placeholder: 'bg-gradient-to-br from-[#161a1d] via-[#111111] to-black',
  },
  {
    title: 'Smart Sathi',
    category: 'E-RATION TRACKING FRONTEND',
    link: 'https://smart-saathi-dashboard.vercel.app',
    image: '/SSD1.png',
    placeholder: 'bg-gradient-to-br from-[#1d1a29] via-[#16111a] to-black',
  },
  {
    title: 'GSAP Animations',
    category: 'CREATIVE HOME PAGE SAMPLE',
    link: 'https://pavneesh52.github.io/Animated-Website/',
    image: '/Sidcup.png',
    placeholder: 'bg-gradient-to-br from-[#1a2926] via-[#111614] to-black',
  }
];

export default function Work() {
  return (
    <section id="work" className="relative z-20 bg-[#0a0a0a] py-32 md:py-40 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20 flex flex-col items-start"
        >
          <h3 className="text-gray-500 text-[11px] font-bold tracking-[0.25em] uppercase mb-4">
            Featured Projects
          </h3>
          <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">
            Selected <span className="font-bold">Work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {projects.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group block"
            >
              <div className="bg-[#111] border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-4 md:p-6 hover:bg-[#151515] transition-all duration-500 hover:-translate-y-2 relative h-full flex flex-col shadow-2xl overflow-hidden">

                {/* Hero Asset Container */}
                <div className={`w-full aspect-[4/3] rounded-3xl ${project.placeholder} border border-white/5 mb-8 md:mb-12 relative flex items-center justify-center overflow-hidden`}>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <>
                      {/* Inner soft blur ring to simulate glass UI injection logic later */}
                      <div className="absolute inset-x-8 -bottom-10 h-32 bg-white/5 blur-3xl rounded-full" />
                      <div className="absolute inset-0 bg-black/20" />
                      <p className="text-white/20 font-bold tracking-[0.3em] text-xs uppercase z-10 transition-opacity duration-300 group-hover:opacity-100 opacity-50">Project Image Slot</p>
                    </>
                  )}
                </div>

                {/* Card Footer Content */}
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between px-2 md:px-4 pb-2 mt-auto gap-6 sm:gap-0">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">{project.title}</h3>
                    <p className="text-gray-500 text-xs font-bold tracking-[0.15em] uppercase">{project.category}</p>
                  </div>

                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 text-gray-400 shrink-0">
                    <ArrowUpRightIcon className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>

              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
