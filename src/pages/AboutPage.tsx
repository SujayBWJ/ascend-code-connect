
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Hero Section */}
        <div className="bg-ascend-dark text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Ascend</h1>
              <p className="text-gray-300 text-xl mb-8">
                Empowering students to reach new heights in technology and innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Mission */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-ascend-dark mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                Ascend is dedicated to fostering a community of tech-enthusiastic students who collaborate, 
                learn, and grow together. Our mission is to provide opportunities for students to develop 
                technical skills, explore career paths in technology, and build meaningful connections with 
                peers and industry professionals.
              </p>
              <p className="text-gray-600">
                We believe that every student, regardless of their background or prior experience, can 
                excel in technology when given the right resources, mentorship, and community support. 
                Through workshops, hackathons, industry panels, and social events, we create an inclusive 
                environment where innovation thrives.
              </p>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-ascend-dark mb-6">Our History</h2>
              <div className="space-y-10">
                <div className="flex">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-16 h-16 rounded-full bg-ascend-purple flex items-center justify-center text-white font-bold">
                      2020
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-ascend-dark mb-2">Founded with a Vision</h3>
                    <p className="text-gray-600">
                      Ascend was founded by a group of five computer science students who saw a need for a 
                      more inclusive and supportive tech community on campus. What started as informal study 
                      groups quickly grew into an official club with a mission to make technology accessible 
                      to all students.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-16 h-16 rounded-full bg-ascend-purple flex items-center justify-center text-white font-bold">
                      2021
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-ascend-dark mb-2">First Annual Hackathon</h3>
                    <p className="text-gray-600">
                      In 2021, we organized our first annual hackathon, bringing together over 100 students 
                      from various majors to collaborate on innovative projects. This event established 
                      Ascend as a leading tech club on campus and caught the attention of several tech companies.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-16 h-16 rounded-full bg-ascend-purple flex items-center justify-center text-white font-bold">
                      2023
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-ascend-dark mb-2">Industry Partnerships</h3>
                    <p className="text-gray-600">
                      We established partnerships with leading tech companies, creating internship pipelines 
                      and mentorship programs for our members. These relationships have helped dozens of 
                      students secure competitive positions and advance their careers in technology.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-16 h-16 rounded-full bg-ascend-purple flex items-center justify-center text-white font-bold">
                      2024
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-ascend-dark mb-2">Expanding Our Reach</h3>
                    <p className="text-gray-600">
                      Today, Ascend has grown to over 200 active members from various academic disciplines. 
                      We continue to expand our programming to meet the diverse interests and needs of our 
                      community, with a focus on emerging technologies and career development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-ascend-dark mb-8 text-center">Our Values</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-ascend-soft-purple rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ascend-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-ascend-dark mb-3">Innovation</h3>
                  <p className="text-gray-600">
                    We encourage creative thinking and novel approaches to problem-solving, embracing new technologies and methodologies.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-ascend-soft-purple rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ascend-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-ascend-dark mb-3">Inclusion</h3>
                  <p className="text-gray-600">
                    We welcome students of all backgrounds, experience levels, and majors to join our community and contribute their unique perspectives.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-ascend-soft-purple rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ascend-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-ascend-dark mb-3">Collaboration</h3>
                  <p className="text-gray-600">
                    We believe in the power of teamwork and foster an environment where members can learn from each other and grow together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-ascend-purple text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join Our Community Today</h2>
              <p className="text-lg mb-8">
                Be part of a vibrant community that's passionate about technology and innovation.
              </p>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-ascend-purple">
                  Become a Member
                </Button>
                <Button className="bg-white text-ascend-purple hover:bg-gray-100">
                  Contact Us
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

export default AboutPage;
