
import React from 'react';
import Layout from '../components/Layout';

const Profile = () => {
  return (
    <Layout>
      <div className="page-container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-yellowtail text-center mb-12 text-stoner-brown">
            Profile
          </h1>
          
          <div className="vintage-card mb-12 retro-shadow">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 flex justify-center">
                {/* Using the uploaded image instead of the placeholder */}
                <img 
                  src="/lovable-uploads/f5c8f627-28e0-43f6-8ca5-4e6c7d93dc5c.png" 
                  alt="Gabriel Laroya" 
                  className="w-48 h-48 rounded-full object-cover border-4 border-stoner-brown retro-shadow"
                />
              </div>
              
              <div className="md:w-2/3">
                <h2 className="text-4xl font-bebas text-stoner-brown mb-4">Gabriel Laroya</h2>
                <div className="h-1 w-full bg-gradient-to-r from-stoner-brown to-stoner-orange mb-6"></div>
                
                <div className="space-y-4 text-lg">
                  <div className="flex gap-3">
                    <span className="font-bold text-stoner-green">Grade:</span>
                    <span className="text-stoner-brown">10</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-bold text-stoner-green">School:</span>
                    <span className="text-stoner-brown">San Beda College Alabang</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-bold text-stoner-green">Location:</span>
                    <span className="text-stoner-brown">Sa bahay nyo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="vintage-card h-full retro-shadow">
              <h3 className="text-3xl font-bebas text-stoner-orange mb-4">Interests</h3>
              <div className="h-1 w-full bg-stoner-orange mb-6 opacity-50"></div>
              <ul className="list-disc list-inside space-y-2 text-lg text-stoner-brown">
                <li>Basketball</li>
                <li>Taekwondo</li>
                <li>Making people smile</li>
              </ul>
            </div>
            
            <div className="vintage-card h-full retro-shadow">
              <h3 className="text-3xl font-bebas text-stoner-green mb-4">Personality</h3>
              <div className="h-1 w-full bg-stoner-green mb-6 opacity-50"></div>
              <div className="space-y-4 text-lg text-stoner-brown">
                <div>
                  <p className="font-bold text-stoner-orange">Strength:</p>
                  <p>Kiss nya</p>
                </div>
                <div>
                  <p className="font-bold text-stoner-red">Weakness:</p>
                  <p>Pag di nyako chinachat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
