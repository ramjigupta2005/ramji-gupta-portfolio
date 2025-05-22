
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export type ProjectProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
};

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="mb-4">{project.description}</CardDescription>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="outline">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" size="sm" asChild>
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Code</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
