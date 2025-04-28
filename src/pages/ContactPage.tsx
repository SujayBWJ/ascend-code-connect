
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Mail, Clock, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would submit this data to a server
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Hero Section */}
        <div className="bg-ascend-dark text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-gray-300 text-lg mb-8">
                Have questions or want to get involved? Reach out to the Ascend team 
                and we'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form & Info */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-ascend-dark mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="events">Events & Workshops</SelectItem>
                        <SelectItem value="projects">Projects</SelectItem>
                        <SelectItem value="membership">Membership</SelectItem>
                        <SelectItem value="sponsorship">Sponsorship & Partnerships</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Type your message here..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                  
                  <div className="pt-2">
                    <Button type="submit" className="w-full bg-ascend-purple hover:bg-ascend-light-purple">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
              
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-ascend-dark mb-6">Contact Information</h2>
                <div className="space-y-8">
                  <Card className="border-none shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-10 h-10 bg-ascend-soft-purple rounded-full flex items-center justify-center">
                            <MapPin className="h-5 w-5 text-ascend-purple" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-ascend-dark mb-1">Visit Us</h3>
                          <p className="text-gray-600">
                            Tech Building, Room 301<br />
                            123 University Avenue<br />
                            College Town, ST 12345
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-none shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-10 h-10 bg-ascend-soft-purple rounded-full flex items-center justify-center">
                            <Mail className="h-5 w-5 text-ascend-purple" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-ascend-dark mb-1">Email Us</h3>
                          <p className="text-gray-600">
                            General Inquiries: <a href="mailto:info@ascendclub.edu" className="text-ascend-purple">info@ascendclub.edu</a><br />
                            Events: <a href="mailto:events@ascendclub.edu" className="text-ascend-purple">events@ascendclub.edu</a><br />
                            Membership: <a href="mailto:join@ascendclub.edu" className="text-ascend-purple">join@ascendclub.edu</a>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-none shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-10 h-10 bg-ascend-soft-purple rounded-full flex items-center justify-center">
                            <Clock className="h-5 w-5 text-ascend-purple" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-ascend-dark mb-1">Meeting Times</h3>
                          <p className="text-gray-600">
                            General Meetings: Every Tuesday, 5-7 PM<br />
                            Executive Board: Fridays, 4-5 PM<br />
                            Open Office Hours: Wednesdays, 2-4 PM
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-none shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-10 h-10 bg-ascend-soft-purple rounded-full flex items-center justify-center">
                            <User className="h-5 w-5 text-ascend-purple" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-ascend-dark mb-1">Club Leadership</h3>
                          <p className="text-gray-600">
                            President: Alex Johnson - <a href="mailto:alex.johnson@example.edu" className="text-ascend-purple">alex.johnson@example.edu</a><br />
                            Vice President: Maya Rodriguez - <a href="mailto:maya.rodriguez@example.edu" className="text-ascend-purple">maya.rodriguez@example.edu</a>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-ascend-dark mb-6 text-center">Find Us on Campus</h2>
            <div className="bg-white rounded-lg shadow-md p-2 h-96 max-w-5xl mx-auto">
              {/* This would be replaced with an actual Google Maps embed in a real site */}
              <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                <p className="text-gray-600">Interactive campus map would be embedded here</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-ascend-dark mb-10 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-ascend-dark mb-2">How can I join Ascend?</h3>
                  <p className="text-gray-600">
                    You can join Ascend by filling out our membership form on the Join page. We welcome 
                    students of all majors and experience levels. Membership is free and gives you access 
                    to all of our events, workshops, and project opportunities.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-ascend-dark mb-2">Do I need to know how to code to join?</h3>
                  <p className="text-gray-600">
                    Not at all! While many of our events focus on coding and technology, we welcome members 
                    with all levels of experience, including complete beginners. We have workshops specifically 
                    designed to help beginners learn programming fundamentals.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-ascend-dark mb-2">How often do you host events?</h3>
                  <p className="text-gray-600">
                    We host weekly general meetings every Tuesday, as well as various workshops, hackathons, 
                    and social events throughout the semester. Check our Events page for the most up-to-date 
                    schedule and details.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-ascend-dark mb-2">Can I propose an event or project idea?</h3>
                  <p className="text-gray-600">
                    Absolutely! We encourage members to propose event and project ideas. You can submit your 
                    ideas using the forms on our Events and Projects pages, or reach out to any of our executive 
                    board members directly.
                  </p>
                </div>
              </div>

              <div className="mt-10 text-center">
                <Button variant="outline" className="border-ascend-purple text-ascend-purple hover:bg-ascend-purple/5">
                  View All FAQs
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

export default ContactPage;
