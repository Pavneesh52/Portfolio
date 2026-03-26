'use client';

import { motion } from 'framer-motion';

function BuildingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
      <path d="M9 22v-4h6v4"/>
      <path d="M8 6h.01"/>
      <path d="M16 6h.01"/>
      <path d="M12 6h.01"/>
      <path d="M12 10h.01"/>
      <path d="M12 14h.01"/>
      <path d="M16 10h.01"/>
      <path d="M16 14h.01"/>
      <path d="M8 10h.01"/>
      <path d="M8 14h.01"/>
    </svg>
  );
}

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
      <line x1="16" x2="16" y1="2" y2="6"/>
      <line x1="8" x2="8" y1="2" y2="6"/>
      <line x1="3" x2="21" y1="10" y2="10"/>
    </svg>
  );
}

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer | Team Lead",
      company: "Smart India Hackathon Project",
      location: "On-site",
      date: "Oct 2024 – Dec 2025",
      points: [
        "Designed and developed a scalable full-stack application using React.js, Node.js, Express, and MongoDB, ensuring efficient data handling and system performance.",
        "Built secure RESTful APIs with authentication and role-based access control for managing student, faculty, and admin workflows.",
        "Implemented real-time data synchronization using Axios and WebSocket-based communication for seamless client-server interaction.",
        "Collaborated across frontend and backend teams to align API structures, data models, and UI components for smooth integration.",
        "Led a team of developers, driving architecture decisions, task distribution, and timely project delivery."
      ]
    },
    {
      title: "Frontend Developer Intern",
      company: "Spineor Web Services",
      location: "Remote",
      date: "Aug 2025",
      points: [
        "Developed and optimized responsive UI components using React.js, improving user engagement and overall interface performance.",
        "Enhanced SEO and accessibility through semantic HTML and React Helmet, increasing organic reach.",
        "Integrated RESTful APIs with frontend systems, ensuring consistent data flow and state management.",
        "Worked closely with backend developers to ensure seamless feature implementation and UI consistency."
      ]
    }
  ];

  return (
    <section id="experience" className="relative z-20 bg-[#0a0a0a] py-32 md:py-48 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-24 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-white text-center">
            My <span className="font-bold">Experience</span>
          </h2>
          <span className="text-gray-500 text-[11px] font-bold tracking-[0.25em] uppercase border border-white/10 px-6 py-3 rounded-full shadow-sm bg-white/5 backdrop-blur-md">
            My Career Journey
          </span>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 pl-8 md:pl-16 ml-4 md:ml-0 space-y-24">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              {/* Glowing Timeline Dot */}
              <div className="absolute -left-[40.5px] md:-left-[72.5px] top-10 w-4 h-4 rounded-full bg-[#0a0a0a] border-[3px] border-[#3b82f6] shadow-[0_0_15px_rgba(59,130,246,0.6)]" />

              {/* Card */}
              <div className="bg-[#111] border border-white/5 rounded-3xl p-8 md:p-12 hover:border-white/10 hover:bg-[#141414] transition-colors shadow-2xl">
                
                {/* Card Header (Title & Date) */}
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs font-medium tracking-widest whitespace-nowrap w-max">
                    <CalendarIcon className="w-3.5 h-3.5 text-gray-400" />
                    {exp.date}
                  </div>
                </div>

                {/* Subtitle (Company & Location) */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 mb-10 border-b border-white/5 pb-8">
                  <div className="flex items-center gap-3 text-gray-300 font-medium">
                    <BuildingIcon className="w-4 h-4 text-blue-400" />
                    {exp.company}
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 font-medium">
                    <MapPinIcon className="w-4 h-4 text-emerald-400" />
                    {exp.location}
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-4">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-4 group">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500/50 mt-2.5 group-hover:bg-blue-400 transition-colors" />
                      <span className="text-gray-400 text-[15px] md:text-[17px] leading-relaxed font-light">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
