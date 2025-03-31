
import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="page-container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-yellowtail text-center mb-12 text-stoner-brown">
            About Me
          </h1>
          
          <div className="vintage-card mb-12 retro-shadow">
            <h2 className="text-4xl font-bebas text-stoner-brown mb-4">Who Am I?</h2>
            <div className="h-1 w-full bg-gradient-to-r from-stoner-brown via-stoner-orange to-stoner-green mb-6"></div>
            
            <p className="text-lg text-stoner-brown mb-6 leading-relaxed">
              Hey there! I'm Gabriel, a 10th grader navigating the cosmic adventure of high school at San Beda College Alabang. 
              I'm all about good vibes, making connections, and finding joy in the simple things.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="p-6 bg-stoner-green/20 rounded-md border-2 border-stoner-green text-center">
                <h3 className="text-2xl font-bebas text-stoner-green mb-3">Passion</h3>
                <p className="text-stoner-brown">Making people smile and spreading positive energy wherever I go!</p>
              </div>
              
              <div className="p-6 bg-stoner-orange/20 rounded-md border-2 border-stoner-orange text-center">
                <h3 className="text-2xl font-bebas text-stoner-orange mb-3">Philosophy</h3>
                <p className="text-stoner-brown">Live in the moment and appreciate the journey, not just the destination.</p>
              </div>
              
              <div className="p-6 bg-stoner-purple/20 rounded-md border-2 border-stoner-purple text-center">
                <h3 className="text-2xl font-bebas text-stoner-purple mb-3">Vibe</h3>
                <p className="text-stoner-brown">Chill, laid-back, and always looking for the humor in life's situations.</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="vintage-card h-full retro-shadow">
              <h3 className="text-3xl font-bebas text-stoner-green mb-4">Strengths</h3>
              <div className="h-1 w-full bg-stoner-green mb-6 opacity-50"></div>
              
              <div className="space-y-6">
                <div className="bg-stoner-cream/50 p-4 rounded-md border-l-4 border-stoner-green">
                  <p className="text-xl font-groovy text-stoner-brown">Kiss nya</p>
                  <p className="text-stoner-brown mt-2">A magical power that brightens even the darkest days and melts hearts instantly.</p>
                </div>
                
                <div className="bg-stoner-cream/50 p-4 rounded-md border-l-4 border-stoner-green">
                  <p className="text-xl font-groovy text-stoner-brown">Making People Smile</p>
                  <p className="text-stoner-brown mt-2">Finding the perfect joke, gesture, or kind word to bring joy to others.</p>
                </div>
              </div>
            </div>
            
            <div className="vintage-card h-full retro-shadow">
              <h3 className="text-3xl font-bebas text-stoner-red mb-4">Weaknesses</h3>
              <div className="h-1 w-full bg-stoner-red mb-6 opacity-50"></div>
              
              <div className="space-y-6">
                <div className="bg-stoner-cream/50 p-4 rounded-md border-l-4 border-stoner-red">
                  <p className="text-xl font-groovy text-stoner-brown">Pag di nyako chinachat</p>
                  <p className="text-stoner-brown mt-2">The crushing void of an empty notification screen when waiting for that special someone to reach out.</p>
                </div>
                
                <div className="bg-stoner-cream/50 p-4 rounded-md border-l-4 border-stoner-red">
                  <p className="text-xl font-groovy text-stoner-brown">Overthinking</p>
                  <p className="text-stoner-brown mt-2">Sometimes getting lost in a maze of thoughts, especially about relationships and conversations.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-2xl font-yellowtail text-stoner-brown animate-pulse-slow">
              "Life's a trip, enjoy the ride!"
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
