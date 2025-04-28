
import React from 'react';
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
import { useToast } from '@/components/ui/use-toast';

const Join = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would submit this data to a server
    toast({
      title: "Application received!",
      description: "We'll contact you soon about joining Ascend.",
    });
  };

  return (
    <section id="join" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-ascend-dark mb-6">
              Ready to <span className="text-ascend-purple">Join</span> Our Community?
            </h2>
            <p className="text-gray-600 mb-8">
              Become a part of Ascend and gain access to workshops, events, mentorship, 
              and a community of like-minded tech enthusiasts. Fill out the form to start 
              your journey with us.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-ascend-dark mb-3">Why Join Ascend?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-ascend-purple flex items-center justify-center text-white text-xs mt-0.5">✓</div>
                  <span className="ml-2 text-gray-600">Access to exclusive workshops and events</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-ascend-purple flex items-center justify-center text-white text-xs mt-0.5">✓</div>
                  <span className="ml-2 text-gray-600">Networking with industry professionals</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-ascend-purple flex items-center justify-center text-white text-xs mt-0.5">✓</div>
                  <span className="ml-2 text-gray-600">Mentorship from senior students and faculty</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-ascend-purple flex items-center justify-center text-white text-xs mt-0.5">✓</div>
                  <span className="ml-2 text-gray-600">Hands-on project experience for your resume</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-ascend-purple flex items-center justify-center text-white text-xs mt-0.5">✓</div>
                  <span className="ml-2 text-gray-600">Leadership opportunities within the club</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-ascend-dark mb-6">Join Ascend</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <Input id="email" type="email" placeholder="john.doe@example.com" required />
              </div>
              
              <div>
                <label htmlFor="major" className="block text-sm font-medium text-gray-700 mb-1">Major</label>
                <Input id="major" placeholder="Computer Science" required />
              </div>
              
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="freshman">Freshman</SelectItem>
                    <SelectItem value="sophomore">Sophomore</SelectItem>
                    <SelectItem value="junior">Junior</SelectItem>
                    <SelectItem value="senior">Senior</SelectItem>
                    <SelectItem value="grad">Graduate</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-1">Why do you want to join Ascend?</label>
                <Textarea 
                  id="interests" 
                  placeholder="Tell us about your interests and what you hope to gain from joining Ascend..."
                  className="min-h-[100px]"
                />
              </div>
              
              <div className="pt-2">
                <Button type="submit" className="w-full bg-ascend-purple hover:bg-ascend-light-purple">
                  Submit Application
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
