// src/context/GlowTrailContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';

const GlowTrailContext = createContext();

export const GlowTrailProvider = ({ children }) => {
    // Load from localStorage if exists
    const [glowEnabled, setGlowEnabled] = useState(() => {
        const stored = localStorage.getItem('glowEnabled');
        return stored !== null ? JSON.parse(stored) : true;
    });

    const [glowColor, setGlowColor] = useState(() => {
        return localStorage.getItem('glowColor') || '009DFF';
    });

    const [glowOpacity, setGlowOpacity] = useState(() => {
        const stored = localStorage.getItem('glowOpacity');
        return stored !== null ? parseFloat(stored) : 0.2;
    });

    // Sync to localStorage when any value changes
    useEffect(() => {
        localStorage.setItem('glowEnabled', JSON.stringify(glowEnabled));
    }, [glowEnabled]);

    useEffect(() => {
        localStorage.setItem('glowColor', glowColor);
    }, [glowColor]);

    useEffect(() => {
        localStorage.setItem('glowOpacity', glowOpacity);
    }, [glowOpacity]);

    return (
        <GlowTrailContext.Provider
            value={{
                glowEnabled,
                setGlowEnabled,
                glowColor,
                setGlowColor,
                glowOpacity,
                setGlowOpacity,
            }}
        >
            {children}
        </GlowTrailContext.Provider>
    );
};

export const useGlowTrail = () => useContext(GlowTrailContext);