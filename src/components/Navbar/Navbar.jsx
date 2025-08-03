// components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import MobileDrawer from './MobileDrawer';
import ThemeSelector from '../ThemeSelector';
import GlowTrailToggle from '../GlowTrailToggle';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/60 dark:bg-black/40 backdrop-blur-md shadow-md py-3 px-6 md:px-8 transition-colors">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* Logo & Appearance Controls */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-gray-900 dark:text-white text-2xl font-bold">Home</Link>

          {/* Show only on md+ screens */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeSelector />
            <GlowTrailToggle />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`hover:text-teal-400 transition ${location.pathname === link.path
                ? 'text-teal-500' : 'text-gray-800 dark:text-gray-200'
                }`}
            > {link.name} </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen(true)}
          aria-label="Open mobile menu"
          className="lg:hidden text-gray-800 dark:text-white"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer open={isMobileOpen} setOpen={setIsMobileOpen} />
    </header>
  );
};

export default Navbar;