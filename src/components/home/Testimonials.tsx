
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Joining Ascend was the best decision I made in college. The workshops and hackathons helped me land my dream internship at Google.",
      name: "Alex Johnson",
      role: "Computer Science, Class of 2024",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 2,
      quote: "The mentorship I received through Ascend gave me the confidence to pursue projects I never thought I could complete on my own.",
      name: "Melissa Chen",
      role: "Data Science, Class of 2025",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 3,
      quote: "Ascend's networking events connected me with industry professionals who guided me through the job application process.",
      name: "Jordan Taylor",
      role: "Software Engineering, Class of 2023",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    },
  ];

  return (
    <section className="py-20 bg-ascend-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our <span className="text-ascend-purple">Members Say</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear from the students whose careers and skills have been transformed 
            through their participation in Ascend.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-gray-800 rounded-xl p-6 relative hover:transform hover:-translate-y-1 transition-transform"
            >
              <div className="absolute top-0 left-10 transform -translate-y-1/2">
                <div className="w-12 h-12 rounded-full overflow-hidden border-4 border-ascend-dark">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-6">
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-medium text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
