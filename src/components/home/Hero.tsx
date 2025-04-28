
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Code } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-ascend-dark overflow-hidden">
      <div className="code-pattern absolute inset-0 opacity-5"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <div className="inline-block mb-4 bg-ascend-purple/10 px-4 py-2 rounded-full">
              <span className="text-ascend-light-purple font-medium">College's Premier Tech Community</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Code. Create. <span className="text-ascend-purple">Ascend.</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Join a community of innovative students passionate about coding, 
              technology, and career development. Participate in hackathons, 
              workshops, and networking events.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-ascend-purple hover:bg-ascend-light-purple text-white px-8">
                Join Ascend
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                Learn More
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="w-8 h-8 rounded-full bg-ascend-purple/80 flex items-center justify-center text-white text-xs border-2 border-ascend-dark">
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-400">Join <span className="text-white font-medium">50+</span> members</p>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="w-full h-96 rounded-xl bg-gradient-to-br from-ascend-purple to-ascend-light-purple p-1">
              <div className="w-full h-full rounded-lg bg-ascend-dark flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 code-pattern opacity-20"></div>
                <div className="z-10 p-6 text-center">
                  <div className="text-xl text-ascend-light-purple mb-4 font-mono opacity-80 animate-code-pulse">&lt;AscendCode /&gt;</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-ascend-dark border border-ascend-purple/20 p-4 rounded-lg text-left">
                      <Calendar className="h-6 w-6 text-ascend-purple mb-2" />
                      <h3 className="text-white font-semibold">Upcoming Event</h3>
                      <p className="text-gray-400 text-sm">Hackathon 2025</p>
                      <p className="text-ascend-light-purple text-xs mt-1">May 15-17</p>
                    </div>
                    <div className="bg-ascend-dark border border-ascend-purple/20 p-4 rounded-lg text-left">
                      <Code className="h-6 w-6 text-ascend-purple mb-2" />
                      <h3 className="text-white font-semibold">Latest Project</h3>
                      <p className="text-gray-400 text-sm">AI Assistant</p>
                      <p className="text-ascend-light-purple text-xs mt-1">12 contributors</p>
                    </div>
                  </div>
                  <div className="mt-4 bg-ascend-dark border border-ascend-purple/20 p-4 rounded-lg text-left">
                    <div className="flex justify-between items-center">
                      <h3 className="text-white font-semibold">Weekly Sessions</h3>
                      <span className="text-xs text-ascend-light-purple px-2 py-1 bg-ascend-purple/10 rounded-full">Every Tuesday</span>
                    </div>
                    <div className="h-4"></div>
                    <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-ascend-purple to-ascend-light-purple w-3/4 h-full"></div>
                    </div>
                    <p className="text-gray-400 text-xs mt-2">75% members attending regularly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
