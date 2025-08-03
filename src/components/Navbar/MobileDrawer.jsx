import React, { useState } from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeSelector from '../ThemeSelector';
import GlowTrailToggle from '../GlowTrailToggle';

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
];

const MobileDrawer = ({ open, setOpen }) => {
  const location = useLocation();
  const [themeOpen, setThemeOpen] = useState(false);
  const [glowOpen, setGlowOpen] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-neutral-900/95 backdrop-blur-xl text-white flex flex-col justify-between h-screen p-6 lg:hidden">
      {/* Close Button */}
      <button onClick={() => setOpen(false)} className="absolute top-5 right-5 text-white">
        <X size={28} />
      </button>

      {/* Navigation Links */}
      <nav className="pt-10 space-y-6 text-lg font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setOpen(false)}
            className={`block transition ${location.pathname === link.path ? 'text-teal-400' : 'hover:text-teal-300'
              }`}
          > {link.name} </Link>
        ))}
      </nav>

      {/* Appearance Section */}
      <div className="mt-10 space-y-6">
        <h3 className="text-white/70 text-sm uppercase tracking-widest">Appearance</h3>

        {/* Theme Accordion */}
        <div className="bg-white/5 rounded-md">
          <button onClick={() => setThemeOpen(!themeOpen)}
            className="w-full flex justify-between items-center p-4 text-sm font-medium text-white/80"
          >
            <span>🎨 Theme</span>
            {themeOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>

          {themeOpen && (
            <div className="px-4 pb-4">
              <ThemeSelector />
            </div>
          )}
        </div>

        {/* Cursor Glow Accordion */}
        <div className="bg-white/5 rounded-md">
          <button onClick={() => setGlowOpen(!glowOpen)}
            className="w-full flex justify-between items-center p-4 text-sm font-medium text-white/80"
          >
            <span>✨ Cursor Glow</span>
            {glowOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          
          {glowOpen && (
            <div className="px-4 pb-4">
              <GlowTrailToggle />
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto text-sm text-white/60 pt-10 space-y-2">
        <div className="flex justify-between">
          <span>🌐 English</span>
          <span>© 2025 Tushar.dev</span>
        </div>
        <p className="text-center">🍪 This site uses cookies. Accept?</p>
      </div>
    </div>
  );
};

export default MobileDrawer;