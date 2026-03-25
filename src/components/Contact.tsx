'use client';

import { motion } from 'framer-motion';

function MailIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function FileTextIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  );
}

function ArrowUpIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}

function ArrowRightIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="relative z-20 bg-[#0a0a0a] text-white flex flex-col justify-end pt-32 min-h-[80vh] border-t border-white/5">

      {/* Central CTA */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto px-6 text-center mb-32">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-8xl font-light mb-8 tracking-tight"
        >
          Let&apos;s Work <span className="font-bold">Together</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl leading-relaxed font-light"
        >
          Currently open to all web development roles. Whether you have an enterprise project or a creative vision to bring to life, I&apos;d love to hear from you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a
            href="mailto:pavneesh@example.com"
            className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
          >
            <MailIcon className="w-5 h-5" />
            SEND A MESSAGE
            <ArrowRightIcon className="w-4 h-4" />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="flex items-center justify-center gap-3 bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-white/5 transition-colors duration-300 w-full sm:w-auto"
          >
            <FileTextIcon className="w-5 h-5" />
            DOWNLOAD CV
          </a>
        </motion.div>
      </div>

      {/* Footer Area (Subtle Grid / Borders) */}
      <div className="relative border-t border-white/10 w-full pt-16 pb-8 px-8 md:px-16 overflow-hidden">
        {/* Subtle background grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, backgroundSize: '100px 100px' }}
        />

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-0">
          {/* Left: Branding */}
          <div className="flex flex-col">
            <span className="text-3xl font-black tracking-tighter mb-2">Pavneesh.</span>
            <span className="text-gray-500 tracking-wide text-sm font-medium uppercase">Creative Geek</span>
          </div>

          {/* Right: Contact & Location */}
          <div className="flex flex-col items-start md:items-end text-gray-400 text-sm gap-2">
            {/* <p className="font-medium text-gray-300">Based in India & UAE</p> */}
            <a href="mailto:pavneeshkumar1506@gmail.com" className="hover:text-white transition-colors">pavneeshkumar1506@gmail.com</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 mt-16 flex items-center justify-center text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Pavneesh. All rights reserved.</p>
        </div>

        {/* Floating Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-8 right-8 w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 backdrop-blur-md z-50 group"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
