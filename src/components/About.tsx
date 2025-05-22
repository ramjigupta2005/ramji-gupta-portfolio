import React from 'react';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const skills = [
    // Frontend
    { name: "React.js", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "HTML", category: "frontend" },
    { name: "CSS", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    
    // Backend
    { name: "Node.js", category: "backend" },
    { name: "Express.js", category: "backend" },
    { name: "MongoDB", category: "backend" },
    { name: "Mongoose", category: "backend" },
    { name: "REST API", category: "backend" },
    
    // Other tools
    { name: "GitHub", category: "tools" },
    { name: "Postman", category: "tools" },
    { name: "Vercel", category: "tools" },
    { name: "Render", category: "tools" },
  ];

  const frontend = skills.filter(skill => skill.category === "frontend");
  const backend = skills.filter(skill => skill.category === "backend");
  const tools = skills.filter(skill => skill.category === "tools");

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-lg">
              <p>
                I'm a passionate Full Stack Developer specializing in the MERN stack. I enjoy building 
                efficient, scalable web applications that solve real-world problems.
              </p>
              <p>
                My journey in web development started with creating simple HTML/CSS websites, which evolved 
                into a deep passion for JavaScript and its ecosystem. I've worked on projects like Zentask 
                and UVion, focusing on creating intuitive user experiences.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or learning about the latest web development trends.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Frontend Skills</h3>
              <div className="flex flex-wrap gap-2">
                {frontend.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1 text-sm">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Backend Skills</h3>
              <div className="flex flex-wrap gap-2">
                {backend.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1 text-sm">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Tools & Others</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1 text-sm">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">B.Tech in Computer Science Engineering</h4>
                  <p className="text-muted-foreground">Maharaja Surajmal Institute of Technology, 2023 - 2027</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
