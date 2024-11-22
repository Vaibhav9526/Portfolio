import React, { useState, useEffect } from 'react';
import {
  Terminal,
  Code,
  Cpu,
  Database,
  Globe,
  Smartphone,
  Github,
  ExternalLink,
  Star,
  GitFork,
} from 'lucide-react';
import Repos from './Repos';
import Footer from './Footer'


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

// Updated PortfolioSite Component
const PortfolioSite = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const terminalCommands = [
    '> investigating skills.json',
    '> loading projects...',
    '> analyzing coffee consumption...',
    '> calculating bugs fixed...',
    '> examining stack overflow visits...'
  ];
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="relative overflow-hidden min-h-screen">
        {/* Animated dots background */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute h-2 w-2 bg-blue-500 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 py-16">
          {/* Terminal Header */}
          <div className="bg-gray-800 rounded-t-lg p-2 flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          {/* Terminal Body */}
          <div className="bg-gray-800 p-6 rounded-b-lg shadow-xl mb-8">
            <TypingEffect text="Welcome to Vaibhav's awesome dev space... 🚀" />
            <div className="mt-4 font-mono text-sm text-green-400">
              {terminalCommands.map((cmd, i) => (
                <div key={i} className="my-2">
                  <TypingEffect text={cmd} speed={30} />
                </div>
              ))}
            </div>
          </div>

          {/* About Section */}
          <div className="mb-12 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-bold mb-4 text-blue-400">$ whoami</h2>
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="mb-4">
                Hey! I'm Vaibhav, a {new Date().getFullYear() - 2006} year old coding veteran who started his
                journey in 2021 with a legendary 2GB DDR3 Pentium PC (yes, it could run VS Code... barely 😅).
              </p>
              <p className="mb-4">
                Currently masquerading as a JEE aspirant while moonlighting as a full-stack developer.
                Because who needs sleep when you have coffee and code, right?
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 mr-2 text-blue-400" />
                <h3 className="text-xl font-bold">Frontend Sorcery</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">→</span> React.js (Because jQuery is so 2010)
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">→</span> Next.js (React on steroids)
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">→</span> Tailwind (Because writing CSS is overrated)
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <Database className="w-6 h-6 mr-2 text-purple-400" />
                <h3 className="text-xl font-bold">Backend Wizardry</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">→</span> Node.js (JavaScript all the things!)
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">→</span> Express.js (Making APIs)
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">→</span> MySQL (Tables upon tables)
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <Smartphone className="w-6 h-6 mr-2 text-yellow-400" />
                <h3 className="text-xl font-bold">Mobile Magic</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">→</span> React Native (When Android Studio says no)
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">→</span> Cross-platform expertise
                </li>
              </ul>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">$ history</h2>
            <div className="space-y-6">
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <div className="w-0.5 h-full bg-blue-500" />
                </div>
                <div className="bg-gray-800 p-6 rounded-lg flex-1 transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">2021</h3>
                  <p>Acquired my trusty Pentium PC and dove headfirst into the coding abyss.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <div className="w-0.5 h-full bg-blue-500" />
                </div>
                <div className="bg-gray-800 p-6 rounded-lg flex-1 transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">2022</h3>
                  <p>Mastered React.js while my PC struggled to run Chrome.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                </div>
                <div className="bg-gray-800 p-6 rounded-lg flex-1 transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">2023-Present</h3>
                  <p>Juggling JEE prep and full-stack development. Sleep is for the weak!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}

        </div>
      </div>

      <div className="container mx-auto px-4 py-10  mb-10 ">
        <Repos />
      </div>
      <div className="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-3xl font-bold mb-4 text-blue-400">$ contact</h2>
        <p className="mb-4">
          Want to collaborate or just chat about how we both survived coding on prehistoric hardware?
        </p>
        <div className="flex space-x-4">
          <a href="https://github.com/vaibhav9526" target="_blank" rel="noopener noreferrer"
            className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300">
            GitHub
          </a>
          {/* Add more social links as needed */}
        </div>
      </div>
      {/* AnimatedFooter or other footer code */}
      <Footer />
    </div>
  );
};

export default PortfolioSite;
