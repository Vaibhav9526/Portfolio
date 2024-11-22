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
const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    const getLanguageColor = (language) => {
      const colors = {
        JavaScript: 'bg-yellow-400',
        TypeScript: 'bg-blue-400',
        HTML: 'bg-orange-500',
        CSS: 'bg-blue-500',
        Python: 'bg-green-500',
        Java: 'bg-red-500',
      };
      return colors[language] || 'bg-gray-400';
    };
  
    return (
      <div
        className="bg-gray-800 rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <Github className="w-5 h-5 mr-2 text-blue-400" />
            <h3 className="text-xl font-bold text-blue-400">{project.name}</h3>
          </div>
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
        
        <p className="text-gray-300 mb-4 h-20 overflow-hidden">
          {project.description || "A mysterious project with no description... 🤔"}
        </p>
  
        <div className="flex flex-wrap gap-2 mb-4">
          {project.topics?.map((topic) => (
            <span
              key={topic}
              className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
            >
              {topic}
            </span>
          ))}
        </div>
  
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {project.language && (
              <div className="flex items-center">
                <span className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)} mr-1`}></span>
                <span className="text-sm text-gray-300">{project.language}</span>
              </div>
            )}
            <div className="flex items-center text-gray-300">
              <Star className="w-4 h-4 mr-1" />
              <span className="text-sm">{project.stargazers_count}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <GitFork className="w-4 h-4 mr-1" />
              <span className="text-sm">{project.forks_count}</span>
            </div>
          </div>
        </div>
  
        <div className={`mt-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-400 hover:text-blue-300"
          >
            View Project <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    );
  };
  
  const ProjectsSection = () => {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState('all');
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchProjects = async () => {
        try {
          const response = await fetch('https://api.github.com/users/vaibhav9526/repos');
          const data = await response.json();
          setProjects(data.sort((a, b) => b.stargazers_count - a.stargazers_count));
          setLoading(false);
        } catch (error) {
          console.error('Error fetching projects:', error);
          setLoading(false);
        }
      };
  
      fetchProjects();
    }, []);
  
    const filteredProjects = projects.filter(project => {
      if (filter === 'all') return true;
      return project.language?.toLowerCase() === filter.toLowerCase();
    });
  
    const languages = ['all', ...new Set(projects.map(project => project.language).filter(Boolean))];
  
    return (
      <div >
        <h2 className="text-3xl font-bold mb-8 text-blue-400 text-center">$ ls ~/projects</h2>
        
        {/* Language filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setFilter(lang)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                filter === lang 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {lang.charAt(0).toUpperCase() + lang.slice(1)}
            </button>
          ))}
        </div>
  
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    );
  };

  export default ProjectsSection