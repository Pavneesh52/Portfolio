import Link from 'next/link';

function FileText(props: React.SVGProps<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" /></svg>
}
function Github(props: React.SVGProps<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" /><path d="M9 18c-4.5 1-5-2.5-7-3" /></svg>
}
function Linkedin(props: React.SVGProps<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
}

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 w-full">
      {/* Logo */}
      <div className="text-2xl font-black tracking-tighter text-white">
        PAVNEESH.
      </div>

      {/* Center Links */}
      <div className="hidden lg:flex items-center gap-8 text-[13px] font-medium text-gray-400">
        <Link href="#services" className="hover:text-white hover:[text-shadow:0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300">Services</Link>
        <Link href="#work" className="hover:text-white hover:[text-shadow:0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300">Work</Link>
        <Link href="#about" className="hover:text-white hover:[text-shadow:0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300">About</Link>
        <Link href="#experience" className="hover:text-white hover:[text-shadow:0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300">Experience</Link>
        <Link href="#testimonials" className="hover:text-white hover:[text-shadow:0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300">Testimonials</Link>
        <Link href="#contact" className="hover:text-white hover:[text-shadow:0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300">Contact</Link>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-5">
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-5 py-2 bg-white/10 hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] border border-white/5 rounded-full text-[13px] font-medium text-white transition-all duration-300 backdrop-blur-md"
        >
          <FileText className="w-4 h-4" />
          <span>Resume</span>
        </a>
        <div className="flex items-center gap-4 text-gray-400">
          <a href="https://github.com/Pavneesh52" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all duration-300">
            <Github className="w-[18px] h-[18px]" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all duration-300">
            <Linkedin className="w-[18px] h-[18px]" />
          </a>
        </div>
      </div>
    </nav>
  );
}
