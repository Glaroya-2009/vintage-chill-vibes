
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  return (
    <div className="bg-paper-texture min-h-screen flex flex-col">
      <header className="py-4 px-6 border-b-4 border-stoner-brown bg-stoner-cream/70 backdrop-blur-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="font-bebas text-4xl md:text-5xl text-stoner-brown mb-4 md:mb-0">
            Gabriel Laroya
          </h1>
          <nav className="flex flex-wrap justify-center gap-4">
            {[
              { path: '/', label: 'Home' },
              { path: '/profile', label: 'Profile' },
              { path: '/hobbies', label: 'Hobbies' },
              { path: '/about', label: 'About' },
              { path: '/contact', label: 'Contact' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`vintage-button ${
                  location.pathname === link.path
                    ? 'bg-stoner-brown text-stoner-cream'
                    : 'bg-stoner-cream text-stoner-brown hover:bg-stoner-orange hover:text-stoner-cream'
                } transition-all duration-300 text-lg md:text-xl font-bebas tracking-wider px-4 py-2 retro-shadow`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto">{children}</main>
      <footer className="bg-stoner-brown text-stoner-cream py-4 text-center font-bebas tracking-wide">
        <p>© 2024 Gabriel Laroya | Vintage Stoner Aesthetic</p>
      </footer>
    </div>
  );
};

export default Layout;
