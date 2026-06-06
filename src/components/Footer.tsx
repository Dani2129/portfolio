import { FiGithub as Github, FiLinkedin as Linkedin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <a href="#home" className="text-2xl font-bold tracking-tighter text-white inline-block mb-2">
            D<span className="text-primary-500">.</span>T
          </a>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Daniel Tadesse. All Rights Reserved.
          </p>
        </div>

        <div className="flex space-x-6">
          <a 
            href="https://github.com/Dani2129" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/yohana-516130311" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://t.me/MarysSon29" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors"
            aria-label="Telegram"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </a>
        </div>

      </div>
    </footer>
  );
}
