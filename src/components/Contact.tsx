'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function FileTextIcon(props: React.SVGProps<SVGSVGElement>) {
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

function ArrowUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message")
        })
      });
      const data = await res.json();
      if (data.success) {
        setIsSuccess(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Error sending message. Please check your connection.");
    }
    
    setIsSubmitting(false);
  };

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
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
          >
            <MailIcon className="w-5 h-5" />
            SEND A MESSAGE
            <ArrowRightIcon className="w-4 h-4" />
          </button>

          <a
            href="/Resume.pdf"
            download="Pavneesh_Resume.pdf"
            className="flex items-center justify-center gap-3 bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-white/5 transition-colors duration-300 w-full sm:w-auto"
          >
            <FileTextIcon className="w-5 h-5" />
            DOWNLOAD RESUME
          </a>
        </motion.div>
      </div>

      {/* Contact Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-2xl"
            onClick={() => { setIsModalOpen(false); setIsSuccess(false); }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#111] border border-white/10 p-8 md:p-12 rounded-3xl w-full max-w-lg shadow-[0_0_80px_rgba(0,0,0,0.8)] relative overflow-hidden"
            >
              {/* Close Button */}
              <button 
                onClick={() => { setIsModalOpen(false); setIsSuccess(false); }}
                className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full"
                aria-label="Close modal"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>

              <h3 className="text-3xl md:text-4xl font-light text-white mb-2 tracking-tight">Send a <span className="font-bold">Message</span></h3>
              <p className="text-gray-400 text-sm mb-8 font-light">I'll normally respond within 24 hours.</p>

              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">Message Sent!</h4>
                  <p className="text-gray-400 text-base font-light">Thank you for reaching out. I've received your email.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2.5">
                    <label className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Your Name</label>
                    <input 
                      required 
                      name="name" 
                      type="text" 
                      className="bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white text-base focus:outline-none focus:border-white/30 transition-colors placeholder:text-gray-600 font-light" 
                      placeholder="John Doe" 
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2.5">
                    <label className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Email Address</label>
                    <input 
                      required 
                      name="email" 
                      type="email" 
                      className="bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white text-base focus:outline-none focus:border-white/30 transition-colors placeholder:text-gray-600 font-light" 
                      placeholder="john@example.com" 
                    />
                  </div>

                  <div className="flex flex-col gap-2.5">
                    <label className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Message</label>
                    <textarea 
                      required 
                      name="message" 
                      rows={4} 
                      className="bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white text-base focus:outline-none focus:border-white/30 transition-colors resize-none placeholder:text-gray-600 font-light" 
                      placeholder="Tell me about your project..." 
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="mt-4 flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-bold text-[15px] tracking-wide hover:bg-gray-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed group w-full"
                  >
                    {isSubmitting ? 'SENDING...' : (
                      <>
                        SEND MESSAGE
                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
