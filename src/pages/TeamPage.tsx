
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail } from 'lucide-react';

const team = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "President",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
    bio: "Senior majoring in Computer Science with a focus on AI and Machine Learning. Passionate about building technologies that improve student life.",
    github: "#",
    linkedin: "#",
    email: "alex.johnson@example.edu"
  },
  {
    id: 2,
    name: "Maya Rodriguez",
    role: "Vice President",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
    bio: "Junior studying Software Engineering. Loves web development and organizing hackathons and workshops for the community.",
    github: "#",
    linkedin: "#",
    email: "maya.rodriguez@example.edu"
  },
  {
    id: 3,
    name: "David Chen",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
    bio: "Senior with expertise in full-stack development. Has contributed to several open-source projects and loves mentoring junior developers.",
    github: "#",
    linkedin: "#",
    email: "david.chen@example.edu"
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "Events Coordinator",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
    bio: "Junior studying Computer Science and Business. Skilled at organizing events that bring the tech community together.",
    github: "#",
    linkedin: "#",
    email: "priya.sharma@example.edu"
  },
  {
    id: 5,
    name: "James Wilson",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
    bio: "Senior majoring in Marketing with a minor in Computer Science. Passionate about bridging the gap between tech and effective communication.",
    github: "#",
    linkedin: "#",
    email: "james.wilson@example.edu"
  },
  {
    id: 6,
    name: "Sophia Lee",
    role: "Treasurer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
    bio: "Senior studying Finance and Computer Science. Manages club finances and ensures resources are allocated effectively for projects and events.",
    github: "#",
    linkedin: "#",
    email: "sophia.lee@example.edu"
  },
  {
    id: 7,
    name: "Michael Brown",
    role: "Workshop Coordinator",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
    bio: "Junior focusing on Education Technology. Designs and leads workshops on various programming topics for both beginners and advanced students.",
    github: "#",
    linkedin: "#",
    email: "michael.brown@example.edu"
  },
  {
    id: 8,
    name: "Emma Garcia",
    role: "Community Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
    bio: "Sophomore studying UX Design. Builds and nurtures our inclusive community through member engagement and fostering a supportive environment.",
    github: "#",
    linkedin: "#",
    email: "emma.garcia@example.edu"
  },
];

const advisors = [
  {
    id: 1,
    name: "Dr. Sarah Thompson",
    role: "Faculty Advisor",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
    bio: "Associate Professor of Computer Science specializing in Human-Computer Interaction. Passionate about helping students bridge the gap between academic and industry.",
    linkedin: "#",
    email: "sarah.thompson@example.edu"
  },
  {
    id: 2,
    name: "Prof. Robert Miller",
    role: "Technical Advisor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
    bio: "Professor of Computer Engineering with industry experience at major tech companies. Provides technical guidance for club projects.",
    linkedin: "#",
    email: "robert.miller@example.edu"
  },
];

const TeamPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Hero Section */}
        <div className="bg-ascend-dark text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h1>
              <p className="text-gray-300 text-lg mb-8">
                The dedicated students who make Ascend happen. Our team is passionate about 
                technology, education, and building a thriving community of tech innovators.
              </p>
            </div>
          </div>
        </div>

        {/* Executive Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-ascend-dark mb-10 text-center">Executive Board</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.slice(0, 4).map(member => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* Additional Team */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-ascend-dark mb-10 text-center">Team Members</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.slice(4).map(member => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* Advisors */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-ascend-dark mb-10 text-center">Faculty Advisors</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {advisors.map(advisor => (
                <Card key={advisor.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="h-32 w-32 rounded-full overflow-hidden">
                          <img 
                            src={advisor.image} 
                            alt={advisor.name} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-ascend-dark">{advisor.name}</h3>
                        <p className="text-ascend-purple font-medium mb-2">{advisor.role}</p>
                        <p className="text-gray-600 mb-4 text-sm">{advisor.bio}</p>
                        <div className="flex gap-2">
                          <a href={`mailto:${advisor.email}`} className="text-gray-500 hover:text-ascend-purple">
                            <Mail className="h-5 w-5" />
                          </a>
                          <a href={advisor.linkedin} className="text-gray-500 hover:text-ascend-purple">
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join Team CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-ascend-purple/10 to-ascend-light-purple/10 rounded-xl p-8 max-w-4xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 code-pattern opacity-5"></div>
              <div className="relative z-10 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-ascend-dark mb-4">Interested in joining our team?</h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Ascend is always looking for passionate students to join our team. If you're 
                  interested in leadership, event planning, or technical roles, reach out to us!
                </p>
                <Button className="bg-ascend-purple hover:bg-ascend-light-purple text-white px-8">
                  Join Our Team
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

const TeamMemberCard = ({ member }: { member: typeof team[0] }) => {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
      <div className="h-56 overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name} 
          className="h-full w-full object-cover"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-ascend-dark">{member.name}</h3>
        <p className="text-ascend-purple font-medium mb-2">{member.role}</p>
        <p className="text-gray-600 mb-4 text-sm line-clamp-3">{member.bio}</p>
        <div className="flex gap-2">
          <a href={`mailto:${member.email}`} className="text-gray-500 hover:text-ascend-purple">
            <Mail className="h-5 w-5" />
          </a>
          <a href={member.github} className="text-gray-500 hover:text-ascend-purple">
            <Github className="h-5 w-5" />
          </a>
          <a href={member.linkedin} className="text-gray-500 hover:text-ascend-purple">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamPage;
