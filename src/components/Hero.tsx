import { useState, useEffect } from 'react';
import { FiArrowRight as ArrowRight, FiDownload as Download } from 'react-icons/fi';
import myPhoto from '../assets/image/myphoto.jpg';

export default function Hero() {
  const phrases = [
    "Full-Stack Developer",
    "UI/UX Designer",
    "AI & Data Analyst",
    "Networking Enthusiast"
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const fullPhrase = phrases[currentPhraseIndex];

      if (isDeleting) {
        setCurrentText(fullPhrase.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullPhrase.substring(0, currentText.length + 1));
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && currentText === fullPhrase) {
        typeSpeed = 2000;
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        typeSpeed = 500;
      }

      timeoutId = setTimeout(tick, typeSpeed);
    };

    timeoutId = setTimeout(tick, 100);
    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, currentPhraseIndex, phrases]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              Hi, I'm Daniel Tadesse
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 h-[80px] md:h-[96px] flex items-center justify-center lg:justify-start">
              <span className="text-gradient">{currentText}</span>
              <span className="w-1 h-10 md:h-12 bg-primary-500 ml-2 animate-pulse"></span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed">
              I am a 5th-year Computer Science and Engineering student. I create beautiful, functional, and user-friendly digital experiences. With a passion for web applications, AI-driven systems, and modern tech, I bring ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="#projects" className="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-primary-500/30">
                View My Work
                <ArrowRight size={20} />
              </a>
              <a href="#contact" className="flex items-center justify-center gap-2 glass px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all transform hover:-translate-y-1">
                Download CV
                <Download size={20} />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-400 to-accent-300 blur-2xl opacity-40 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full border-4 border-white/10 overflow-hidden shadow-2xl glass p-2">
                <img 
                  src={myPhoto} 
                  alt="Daniel Tadesse" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
