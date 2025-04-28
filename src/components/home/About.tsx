
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Calendar, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ascend-dark mb-4">What is <span className="text-ascend-purple">Ascend?</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are a forward-thinking college club dedicated to helping students develop technical skills, 
            collaborate on innovative projects, and connect with industry professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-ascend-soft-purple rounded-lg flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-ascend-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-ascend-dark">Coding Workshops</h3>
              <p className="text-gray-600">
                Weekly coding sessions covering web development, mobile apps, data science, 
                artificial intelligence, and more cutting-edge technologies.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-ascend-purple mr-2"></div>
                  Hands-on project experience
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-ascend-purple mr-2"></div>
                  Beginner to advanced tracks
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-ascend-purple mr-2"></div>
                  Peer mentorship opportunities
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-ascend-soft-purple rounded-lg flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-ascend-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-ascend-dark">Tech Events</h3>
              <p className="text-gray-600">
                Regular hackathons, code challenges, guest speaker sessions, and networking events 
                to build your portfolio and professional network.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-ascend-purple mr-2"></div>
                  Semesterly hackathon competitions
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-ascend-purple mr-2"></div>
                  Industry expert talks
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-ascend-purple mr-2"></div>
                  Tech company tours
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-ascend-soft-purple rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-ascend-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-ascend-dark">Career Development</h3>
              <p className="text-gray-600">
                Resources and opportunities to prepare for internships and full-time roles 
                in the tech industry through resume workshops and interview prep.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-ascend-purple mr-2"></div>
                  Resume and portfolio reviews
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-ascend-purple mr-2"></div>
                  Mock technical interviews
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-ascend-purple mr-2"></div>
                  Internship connections
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-gradient-to-r from-ascend-purple/10 to-ascend-light-purple/10 rounded-xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 code-pattern opacity-5"></div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-ascend-dark mb-2">Ready to level up your tech skills?</h3>
                <p className="text-gray-600">Join us at our next event and become part of our community.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-ascend-purple text-white font-medium rounded-lg hover:bg-ascend-light-purple transition-colors">
                  Join Ascend Now
                </button>
                <button className="px-6 py-3 border border-ascend-purple text-ascend-purple font-medium rounded-lg hover:bg-ascend-purple/5 transition-colors">
                  View Calendar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
