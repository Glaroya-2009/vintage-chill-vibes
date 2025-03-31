
import React from 'react';
import Layout from '../components/Layout';

const Hobbies = () => {
  return (
    <Layout>
      <div className="page-container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-yellowtail text-center mb-12 text-stoner-brown">
            My Hobbies
          </h1>
          
          <div className="space-y-16">
            <div className="vintage-card retro-shadow">
              <h2 className="text-4xl font-bebas text-stoner-brown mb-4">Basketball</h2>
              <div className="h-1 w-full bg-gradient-to-r from-stoner-orange to-stoner-brown mb-6"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="h-64 bg-gradient-to-br from-stoner-orange to-stoner-brown rounded-md flex items-center justify-center mb-4 retro-shadow">
                    <div className="w-24 h-24 rounded-full bg-stoner-cream flex items-center justify-center animate-bounce">
                      <div className="w-20 h-20 rounded-full bg-stoner-orange border-4 border-stoner-brown"></div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-lg text-stoner-brown leading-relaxed">
                    Hitting the court is one of my favorite pastimes. There's nothing like the feeling of sinking a perfect shot or executing a smooth play with teammates.
                  </p>
                  <p className="text-lg text-stoner-brown leading-relaxed">
                    Basketball helps me stay active, build teamwork skills, and blow off steam after a long day of classes.
                  </p>
                  <p className="font-groovy text-stoner-orange text-xl">
                    "Ball is life, man!"
                  </p>
                </div>
              </div>
            </div>
            
            <div className="vintage-card retro-shadow">
              <h2 className="text-4xl font-bebas text-stoner-brown mb-4">Taekwondo</h2>
              <div className="h-1 w-full bg-gradient-to-r from-stoner-green to-stoner-brown mb-6"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="order-2 md:order-1 space-y-4">
                  <p className="text-lg text-stoner-brown leading-relaxed">
                    Taekwondo has taught me discipline, focus, and self-defense. The ancient martial art combines powerful kicks, precise strikes, and mindful movement.
                  </p>
                  <p className="text-lg text-stoner-brown leading-relaxed">
                    Each training session pushes me to improve my technique and build mental fortitude. The journey to mastery is long, but rewarding.
                  </p>
                  <p className="font-groovy text-stoner-green text-xl">
                    "Peace and harmony through martial arts!"
                  </p>
                </div>
                
                <div className="order-1 md:order-2">
                  <div className="h-64 bg-gradient-to-br from-stoner-green to-stoner-brown rounded-md flex items-center justify-center mb-4 retro-shadow">
                    <div className="w-40 h-40 flex flex-col items-center justify-center">
                      <div className="w-20 h-4 bg-stoner-cream mb-2"></div>
                      <div className="w-4 h-24 bg-stoner-cream"></div>
                      <div className="w-20 h-4 bg-stoner-cream mt-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hobbies;
