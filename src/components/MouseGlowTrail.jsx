// src/components/MouseGlowTrail.jsx
import { useEffect } from 'react';
import { useGlowTrail } from '../context/GlowTrailContext';

const MouseGlowTrail = () => {
  const { glowEnabled, glowColor, glowOpacity } = useGlowTrail(); // ✅ include glowOpacity

  useEffect(() => {
    if (!glowEnabled) return;

    const createGlow = (x, y) => {
      const glow = document.createElement('div');
      glow.className = 'mouse-glow';
      glow.style.position = 'fixed';
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
      glow.style.width = '24px';
      glow.style.height = '24px';
      glow.style.borderRadius = '50%';
      glow.style.pointerEvents = 'none';
      glow.style.opacity = glowOpacity; // ✅ set opacity
      glow.style.filter = 'blur(8px)';
      glow.style.transform = 'translate(-50%, -50%)';
      glow.style.zIndex = '9999';
      glow.style.transition = 'opacity 0.3s ease';

      const hexToRgba = (hex, opacity) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
      };

      glow.style.background = hexToRgba(glowColor, glowOpacity);
      document.body.appendChild(glow);

      setTimeout(() => {
        glow.remove();
      }, 1000);
    };

    const handleMouseMove = (e) => {
      createGlow(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [glowEnabled, glowColor, glowOpacity]); // ✅ add glowOpacity dependency

  return null;
};

export default MouseGlowTrail;