
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Github, Users } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Campus AI Assistant",
    description: "An AI chatbot that helps students find resources, schedule appointments, and answer questions about campus services.",
    image: "https://images.unsplash.com/photo-1677442135131-4d7c2cea68fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
    tech: ["Python", "TensorFlow", "React"],
    contributors: 8,
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Study Group Finder",
    description: "A mobile app that helps students find study groups based on their courses, schedule, and learning preferences.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
    tech: ["React Native", "Firebase", "Node.js"],
    contributors: 5,
    githubUrl: "#",
    featured: false,
  },
  {
    id: 3,
    title: "Campus Events Calendar",
    description: "A comprehensive calendar app that aggregates events from all campus organizations and clubs.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
    tech: ["Vue.js", "MongoDB", "Express"],
    contributors: 6,
    githubUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Smart Study Dashboard",
    description: "A productivity dashboard designed specifically for students, with features like pomodoro timer, assignment tracking, and focus analysis.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
    tech: ["React", "TypeScript", "Chart.js"],
    contributors: 4,
    githubUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Academic Resource Hub",
    description: "A centralized platform where students can find, share, and rate study materials for various courses offered at the university.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
    tech: ["Next.js", "PostgreSQL", "Tailwind CSS"],
    contributors: 7,
    githubUrl: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Mentor Connect",
    description: "A platform connecting students with alumni mentors in their field of interest for career guidance and networking opportunities.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
    tech: ["React", "Firebase", "Material UI"],
    contributors: 5,
    githubUrl: "#",
    featured: false,
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Hero Section */}
        <div className="bg-ascend-dark text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
              <p className="text-gray-300 text-lg mb-8">
                Explore the innovative projects developed by our members. These projects 
                showcase our technical skills and our commitment to solving real-world problems.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-ascend-purple hover:bg-ascend-light-purple text-white px-8">
                  <Github className="mr-2 h-5 w-5" /> View GitHub
                </Button>
                <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                  Propose a Project
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Project */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-ascend-dark mb-8 text-center">Featured Project</h2>
            
            {projects.filter(project => project.featured).map(project => (
              <div key={project.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="relative h-64 md:h-80 lg:h-full rounded-xl overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-ascend-dark mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(tech => (
                      <Badge key={tech} variant="outline" className="bg-ascend-soft-purple text-ascend-purple border-none">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{project.contributors} contributors</span>
                  </div>
                  <div className="flex gap-4">
                    <Button className="bg-ascend-purple hover:bg-ascend-light-purple text-white">
                      View Project
                    </Button>
                    <Button variant="outline" className="border-gray-300">
                      <Github className="mr-2 h-4 w-4" /> GitHub Repository
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Projects */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-ascend-dark mb-8">All Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter(project => !project.featured).map(project => (
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
                      {project.tech.map(tech => (
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
                View Archive Projects
              </Button>
            </div>
          </div>
        </section>

        {/* Propose Project CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-ascend-purple/10 to-ascend-light-purple/10 rounded-xl p-8 max-w-4xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 code-pattern opacity-5"></div>
              <div className="relative z-10 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-ascend-dark mb-4">Have a project idea?</h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  We're always looking for new and innovative projects to work on. If you have an idea, 
                  we'd love to hear about it and potentially help bring it to life.
                </p>
                <Button className="bg-ascend-purple hover:bg-ascend-light-purple text-white px-8">
                  Propose a Project
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
