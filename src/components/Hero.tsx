
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-primary font-semibold mb-2">Hi there, I'm</h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Ramji Gupta</h1>
              <h3 className="text-xl sm:text-2xl text-muted-foreground">Full Stack MERN Developer</h3>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              I build modern, responsive web applications using MongoDB, Express.js, 
              React, and Node.js. Passionate about creating seamless user experiences 
              and scalable backend solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
            
            <div className="flex gap-4">
              <a href="https://github.com/ramjigupta2005" target="_blank" rel="noopener noreferrer" 
                className="rounded-full bg-secondary p-3 hover:bg-primary hover:text-primary-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/ramji-gupta-a804a92bb/" target="_blank" rel="noopener noreferrer" 
                className="rounded-full bg-secondary p-3 hover:bg-primary hover:text-primary-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="mailto:ramjigupta2005@gmail.com" 
                className="rounded-full bg-secondary p-3 hover:bg-primary hover:text-primary-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-full blur opacity-75"></div>
              <div className="relative bg-background rounded-full overflow-hidden h-[400px] w-[400px] flex items-center justify-center">
                <img 
                  src="/lovable-uploads/fd6352e6-dbee-4855-917d-37c5f897780b.png" 
                  alt="Ramji Gupta" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
