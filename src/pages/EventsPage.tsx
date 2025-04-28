
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, MapPin } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const events = [
  {
    id: 1,
    title: "Spring Hackathon 2025",
    date: "May 15-17, 2025",
    location: "Tech Building, Main Hall",
    description: "Join us for 48 hours of coding, collaboration, and innovation. Build projects that solve real-world problems.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
    category: "Hackathon",
    attendees: 120,
    isFeatured: true,
  },
  {
    id: 2,
    title: "AI Workshop Series",
    date: "Every Tuesday, Apr 5-26",
    location: "Room 301, CS Building",
    description: "Learn the fundamentals of artificial intelligence and machine learning through hands-on projects.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
    category: "Workshop",
    attendees: 45,
    isFeatured: false,
  },
  {
    id: 3,
    title: "Tech Industry Panel",
    date: "April 10, 2025",
    location: "Virtual Event",
    description: "Connect with industry professionals from top tech companies and get insights into the hiring process.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
    category: "Career",
    attendees: 75,
    isFeatured: false,
  },
  {
    id: 4,
    title: "Web Development Bootcamp",
    date: "June 1-15, 2025",
    location: "Tech Building, Lab 202",
    description: "Intensive two-week program covering HTML, CSS, JavaScript, and modern frameworks.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
    category: "Workshop",
    attendees: 35,
    isFeatured: false,
  },
  {
    id: 5,
    title: "Game Jam Weekend",
    date: "July 22-24, 2025",
    location: "Student Union Building",
    description: "Design and build a game in 48 hours with our community of student developers.",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
    category: "Hackathon",
    attendees: 60,
    isFeatured: false,
  },
  {
    id: 6,
    title: "Open Source Contribution Day",
    date: "August 5, 2025",
    location: "CS Building, Room 401",
    description: "Learn how to contribute to open source projects and make your first pull request.",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
    category: "Workshop",
    attendees: 30,
    isFeatured: false,
  },
];

const EventsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Hero Section */}
        <div className="bg-ascend-dark text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Upcoming Events</h1>
              <p className="text-gray-300 text-lg mb-8">
                Join us for workshops, hackathons, and networking opportunities. 
                Find the perfect event to enhance your skills and expand your network.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-ascend-purple hover:bg-ascend-light-purple text-white px-8">
                  Submit Event Idea
                </Button>
                <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                  Subscribe to Calendar
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Events Filter Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-ascend-dark">Browse Events</h2>
                <TabsList className="bg-white border border-gray-200">
                  <TabsTrigger value="all">All Events</TabsTrigger>
                  <TabsTrigger value="hackathon">Hackathons</TabsTrigger>
                  <TabsTrigger value="workshop">Workshops</TabsTrigger>
                  <TabsTrigger value="career">Career</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-0">
                <EventsList events={events} />
              </TabsContent>
              
              <TabsContent value="hackathon" className="mt-0">
                <EventsList events={events.filter(event => event.category === "Hackathon")} />
              </TabsContent>
              
              <TabsContent value="workshop" className="mt-0">
                <EventsList events={events.filter(event => event.category === "Workshop")} />
              </TabsContent>
              
              <TabsContent value="career" className="mt-0">
                <EventsList events={events.filter(event => event.category === "Career")} />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Submit Event CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-ascend-purple/10 to-ascend-light-purple/10 rounded-xl p-8 max-w-4xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 code-pattern opacity-5"></div>
              <div className="relative z-10 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-ascend-dark mb-4">Have an idea for an event?</h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  We welcome event suggestions from our members. If you have an idea for a workshop, 
                  hackathon, or any other tech-related event, let us know!
                </p>
                <Button className="bg-ascend-purple hover:bg-ascend-light-purple text-white px-8">
                  Submit Your Idea
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

const EventsList = ({ events }: { events: typeof events }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <Card key={event.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
          <div className="relative h-48">
            <img 
              src={event.image} 
              alt={event.title} 
              className="h-full w-full object-cover"
            />
            <div className="absolute top-4 right-4">
              <Badge className="bg-ascend-purple hover:bg-ascend-light-purple">
                {event.category}
              </Badge>
            </div>
          </div>
          <CardContent className="p-6 flex-grow flex flex-col">
            <h3 className="text-xl font-bold text-ascend-dark mb-2">{event.title}</h3>
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{event.location}</span>
              </div>
            </div>
            <p className="text-gray-600 mb-4 flex-grow">{event.description}</p>
            <div className="flex justify-between items-center mt-auto">
              <div className="flex items-center text-gray-500 text-sm">
                <Users className="h-4 w-4 mr-1" />
                <span>{event.attendees} attending</span>
              </div>
              <Button variant="link" className="text-ascend-purple p-0">
                Register →
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default EventsPage;
