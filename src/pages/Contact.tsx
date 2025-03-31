
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    toast({
      title: "Far out, man!",
      description: "Your message has been sent to the cosmos. Gabriel will catch it soon!",
    });
    setFormState({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <Layout>
      <div className="page-container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-yellowtail text-center mb-12 text-stoner-brown">
            Get in Touch
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="vintage-card retro-shadow h-full">
              <h2 className="text-4xl font-bebas text-stoner-brown mb-4">My Details</h2>
              <div className="h-1 w-full bg-gradient-to-r from-stoner-brown to-stoner-orange mb-6"></div>
              
              <div className="space-y-6">
                <div className="flex flex-col">
                  <span className="text-xl font-bebas text-stoner-green">Email</span>
                  <a href="mailto:Soferhandsome@.com" className="text-stoner-brown hover:text-stoner-orange transition-colors">
                    Soferhandsome@.com
                  </a>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-xl font-bebas text-stoner-green">Phone</span>
                  <a href="tel:09673779191" className="text-stoner-brown hover:text-stoner-orange transition-colors">
                    09673779191
                  </a>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-xl font-bebas text-stoner-green">Location</span>
                  <span className="text-stoner-brown">Sa bahay nyo</span>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-br from-stoner-green/20 to-stoner-orange/20 rounded-md border-2 border-stoner-brown">
                  <p className="text-center font-groovy text-stoner-brown">
                    "Drop me a line, and let's vibe together!"
                  </p>
                </div>
              </div>
            </div>
            
            <div className="vintage-card retro-shadow">
              <h2 className="text-4xl font-bebas text-stoner-brown mb-4">Send a Message</h2>
              <div className="h-1 w-full bg-gradient-to-r from-stoner-orange to-stoner-brown mb-6"></div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xl font-bebas text-stoner-green mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="vintage-input"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xl font-bebas text-stoner-green mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="vintage-input"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xl font-bebas text-stoner-green mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="vintage-input"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="vintage-button w-full bg-stoner-brown hover:bg-stoner-orange">
                  Send Vibes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
