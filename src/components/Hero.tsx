import React from 'react';
import { ArrowDown, Github as GithubIcon, Linkedin as LinkedIcon, Mail } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="h-screen relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-background.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div
        ref={elementRef}
        className={`relative z-10 flex flex-col items-center justify-center h-full px-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6 text-center font-poppins mt-10">
          <span className="relative inline-block">
            <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-50"></span>
            <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-blue-300">
              Nazım ÇALIK
            </span>
          </span>
        </h1>
        <p className="text-1xl md:text-2xl font-bold text-center font-poppins mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400 drop-shadow-[0_0_25px_rgba(6,182,212,0.8)]">
            DATA SCIENTIST|DATA ANALYST|ML ENGINEER|AI ENGINEER 
          </span>
        </p>
         <p className="text-3xl md:text-5xl font-medium text-white dark:text-white mb-8 leading-relaxed">
            Turning Data into{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Actionable Insights
            </span>
          </p>  
          <p className="text-lg md:text-xl text-white dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about leveraging cutting-edge machine learning and AI technologies to solve complex business problems and drive data-driven decision making.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold">
              View My Work
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              Get In Touch
            </button>
          </div>

        {/* Social Media Icons */}
        <div className="flex justify-end space-x-6 w-full">
          <a
            href="https://github.com/nazmclk"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/30 hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          >
            <GithubIcon className="w-6 h-6 text-white" />
          </a>
          <a
            href="https://linkedin.com/in/nazım-çalık-"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/30 hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          >
            <LinkedIcon className="w-6 h-6 text-white" />
          </a>
          <a
            href="mailto:nazimcalik8235@gmail.com"
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/30 hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          >
            <Mail className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
      >
        <ArrowDown className="w-6 h-6 text-white" />
      </button>
    </section>
  );
};

export default Hero;