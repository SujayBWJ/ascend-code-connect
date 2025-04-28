
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Events = () => {
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
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ascend-dark mb-4">Upcoming <span className="text-ascend-purple">Events</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us for exciting workshops, hackathons, and networking opportunities. 
            Check out our calendar and mark your attendance!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="overflow-hidden border-none shadow-lg">
            <div className="relative h-64">
              <img 
                src={events[0].image} 
                alt={events[0].title} 
                className="h-full w-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-ascend-purple hover:bg-ascend-light-purple">{events[0].category}</Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-ascend-dark">{events[0].title}</h3>
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-sm">{events[0].date}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{events[0].location}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Users className="h-4 w-4 mr-1" />
                  <span className="text-sm">{events[0].attendees} attending</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6">{events[0].description}</p>
              <div className="flex justify-between items-center">
                <Button className="bg-ascend-purple hover:bg-ascend-light-purple">Register Now</Button>
                <Button variant="outline" className="border-gray-300 text-gray-700">Learn More</Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {events.slice(1).map((event) => (
              <Card key={event.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 h-48 md:h-auto">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 md:w-2/3">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-ascend-dark">{event.title}</h3>
                      <Badge className="bg-ascend-purple hover:bg-ascend-light-purple">{event.category}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-3">
                      <div className="flex items-center text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500 flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{event.attendees} attending</span>
                      </div>
                      <Button variant="link" className="text-ascend-purple p-0">Register →</Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button variant="outline" className="border-ascend-purple text-ascend-purple hover:bg-ascend-purple/5">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;
