
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const Home = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <div className="page-container flex flex-col items-center justify-center min-h-[80vh] bg-stoner-cream/10">
        <div className={`transition-all duration-1000 ease-out transform ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-6xl md:text-8xl font-yellowtail text-center mb-6 animate-float psychedelic-text">
            Far Out, Man!
          </h1>
          
          <div className="vintage-card max-w-3xl mx-auto my-8 retro-shadow">
            <h2 className="text-4xl font-bebas text-stoner-brown mb-4 tracking-wide">Welcome to My Groovy Space</h2>
            <div className="h-1 w-full bg-gradient-to-r from-stoner-green via-stoner-orange to-stoner-brown mb-6"></div>
            <p className="text-xl text-stoner-brown mb-8 leading-relaxed">
              Hey there! I'm Gabriel Laroya, cruising through 10th grade at San Beda College Alabang.
              Take a trip through my vintage-inspired digital pad and get to know me better!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <button 
                onClick={() => navigate('/profile')}
                className="vintage-button bg-stoner-green animate-pulse-slow"
              >
                Check My Profile
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="vintage-button bg-stoner-orange animate-pulse-slow"
              >
                Reach Out
              </button>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-xl font-groovy text-stoner-brown animate-wiggle">
              ☮️ Good Vibes Only ☮️
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
