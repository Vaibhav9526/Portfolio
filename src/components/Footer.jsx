import React, { useState, useEffect } from 'react';
import { Terminal, Code, Cpu, Database, Globe, Smartphone } from 'lucide-react';

const TypingEffect = ({ text, speed = 50 }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + text[currentIndex]);
          setCurrentIndex((c) => c + 1);
        }, speed);
        return () => clearTimeout(timeout);
      }
    }, [currentIndex, text, speed]);
  
    return (
      <span className="font-mono">
        {displayText}
        <span className="animate-pulse">_</span>
      </span>
    );
  };

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <footer className="relative overflow-hidden bg-gray-900 py-16 mt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-500/20 rounded-full blur-xl"
            style={{
              width: Math.random() * 100 + 50 + 'px',
              height: Math.random() * 100 + 50 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Main footer content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 text-center">
          {/* Animated letters */}
          <div className="inline-flex flex-wrap justify-center gap-1 sm:gap-2">
            {'Vaibhav Sharma'.split('').map((letter, index) => (
              <span
                key={index}
                className={`
                  text-4xl sm:text-5xl font-bold
                  ${letter === ' ' ? 'mx-2' : 'animate-bounce'}
                  hover:text-blue-400 transition-colors duration-300
                  cursor-default
                `}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationDuration: '1s',
                }}
              >
                {letter}
              </span>
            ))}
          </div>

          {/* Animated line */}
          <div className="mt-6 relative">
            <div className="absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent transform -translate-y-1/2 animate-pulse" />
          </div>

          {/* Social links with hover effects */}
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://github.com/vaibhav9526"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-3 font-semibold text-white transition-all duration-500 ease-in-out hover:scale-110"
            >
              <span className="absolute inset-0 h-full w-full -translate-x-2 -translate-y-2 bg-blue-500 opacity-50 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 h-full w-full border-2 border-white transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></span>
              <span className="relative">GitHub</span>
            </a>
            {/* Add more social links with the same styling */}
          </div>

          {/* Copyright text with typing effect */}
          <div className="mt-8 text-sm text-gray-400">
            <TypingEffect text="Made with ☕ and a i3 (basically i upgraded my pc!)" speed={50} />
          </div>
        </div>
      </div>

      {/* Animated corner decorations */}
      <div className="absolute bottom-0 right-0 w-24 h-24 transform translate-x-1/2 translate-y-1/2">
        <div className="absolute inset-0 border-t-2 border-l-2 border-blue-500 animate-spin-slow" />
      </div>
      <div className="absolute top-0 left-0 w-24 h-24 transform -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 border-b-2 border-r-2 border-blue-500 animate-spin-slow" />
      </div>
    </footer>
  );
};
const styles = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  .animate-spin-slow {
    animation: spin 8s linear infinite;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default Footer;