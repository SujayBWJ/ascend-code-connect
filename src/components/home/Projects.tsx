
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Code, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Campus AI Assistant",
      description: "An AI chatbot that helps students find resources, schedule appointments, and answer questions about campus services.",
      image: "https://images.unsplash.com/photo-1677442135131-4d7c2cea68fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
      tech: ["Python", "TensorFlow", "React"],
      contributors: 8,
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Study Group Finder",
      description: "A mobile app that helps students find study groups based on their courses, schedule, and learning preferences.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
      tech: ["React Native", "Firebase", "Node.js"],
      contributors: 5,
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Campus Events Calendar",
      description: "A comprehensive calendar app that aggregates events from all campus organizations and clubs.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
      tech: ["Vue.js", "MongoDB", "Express"],
      contributors: 6,
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ascend-dark mb-4">Our <span className="text-ascend-purple">Projects</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the innovative projects developed by our members. These projects 
            showcase our technical skills and our commitment to solving real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="relative h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6 flex-grow flex flex-col">
                <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-ascend-soft-purple text-ascend-purple border-none">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex items-center text-sm text-gray-500">
                    <Code className="h-4 w-4 mr-1" />
                    <span>{project.contributors} contributors</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-ascend-purple hover:bg-ascend-soft-purple">
                    <Github className="h-4 w-4 mr-1" />
                    View Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-ascend-purple text-ascend-purple hover:bg-ascend-purple/5">
            Explore All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
