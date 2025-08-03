// src/context/GlowTrailToggle.jsx
import { useState } from 'react';
import { FiMousePointer } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useGlowTrail } from '../context/GlowTrailContext';

const GlowTrailToggle = () => {
    const {
        glowEnabled,
        setGlowEnabled,
        glowColor,
        setGlowColor,
        glowOpacity,
        setGlowOpacity
    } = useGlowTrail();

    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpanded = () => setIsExpanded(prev => !prev);

    return (
        <motion.div
            animate={{ width: isExpanded ? 180 : 40 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative flex items-center justify-start bg-gray-200 dark:bg-[#1f1f1f] rounded-full shadow-inner overflow-hidden"
            style={{ height: 40 }}
        >
            {/* Cursor Icon (Main Toggle) */}
            <motion.button
                onClick={toggleExpanded}
                className="absolute z-10 left-0 top-0 w-10 h-10 flex items-center justify-center text-gray-800 dark:text-white"
            >
                <FiMousePointer size={18} />
            </motion.button>

            {/* Dropdown Content */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        key="expanded"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="flex items-center justify-start w-full h-full ml-[42px] pr-2 gap-2 z-0"
                    >
                        {/* Enable Checkbox */}
                        <input
                            type="checkbox"
                            checked={glowEnabled}
                            onChange={(e) => setGlowEnabled(e.target.checked)}
                            className="w-4 h-4 accent-blue-500 cursor-pointer"
                        />

                        {/* Color Picker */}
                        <input
                            type="color"
                            value={glowColor}
                            onChange={(e) => setGlowColor(e.target.value)}
                            className="w-6 h-6 rounded-full border border-gray-400 dark:border-white bg-transparent cursor-pointer"
                        />

                        {/* Opacity Slider */}
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={glowOpacity}
                            onChange={(e) => setGlowOpacity(parseFloat(e.target.value))}
                            className="w-14 h-1 cursor-pointer appearance-none bg-gray-400 rounded-full"
                            style={{ accentColor: glowColor }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default GlowTrailToggle;