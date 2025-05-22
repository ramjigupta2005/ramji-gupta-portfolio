
import React from 'react';
import ProjectCard, { ProjectProps } from './ProjectCard';

const Projects = () => {
  const projects: ProjectProps[] = [
    {
      title: "Zentask",
      description: "A simple and efficient to-do website that helps users manage their daily tasks with ease. Features include adding, deleting, and viewing tasks with a clean UI and persistent local storage.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2670&auto=format&fit=crop",
      tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      demoLink: "https://scheduleonzentask.vercel.app/",
      codeLink: "https://github.com/ramjigupta2005/zentask",
    },
    {
      title: "UVion",
      description: "A web-based application that helps users monitor real-time UV index levels and take appropriate sun safety measures. Features real-time UV data, personalized protection tips, and educational content.",
      image: "/lovable-uploads/76d25e4c-a104-485b-b8ae-dd9d8dcfeaea.png",
      tags: ["HTML", "CSS", "JavaScript", "API Integration", "Geolocation"],
      demoLink: "https://uvion.onrender.com",
      codeLink: "https://github.com/ramjigupta2005/uvion",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing my skills in web development.
            Each project demonstrates different aspects of my technical capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="opacity-0 animate-fade-in" style={{animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards'}}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://github.com/ramjigupta2005" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:underline font-medium"
          >
            See more projects on GitHub
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
