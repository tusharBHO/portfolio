// src/components/ThemeSelector.jsx
import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const allThemes = [
  { key: 'light', icon: <FiSun size={18} /> },
  { key: 'dark', icon: <FiMoon size={18} /> },
  { key: 'auto', icon: <FiMonitor size={18} /> },
];

const ThemeSelector = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isExpanded, setIsExpanded] = useState(false);
  const [tempTheme, setTempTheme] = useState(theme);

  const handleSelect = (selectedTheme) => {
    setTempTheme(selectedTheme);
    setIsExpanded(false);
    setTimeout(() => setTheme(selectedTheme), 200);
  };

  const current = allThemes.find((t) => t.key === tempTheme);

  // Rearranged theme list: current first, then the rest
  const reorderedThemes = [
    current,
    ...allThemes.filter((t) => t.key !== tempTheme),
  ];

  return (
    <motion.div
      animate={{ width: isExpanded ? 132 : 40 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="relative flex items-center justify-start bg-gray-200 dark:bg-[#1f1f1f] rounded-full shadow-inner overflow-hidden"
      style={{ height: 40 }}
    >
      {/* Always render center icon in absolute layer */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-10 h-10 flex items-center justify-center">
        {!isExpanded && (
          <motion.button onClick={() => setIsExpanded(true)}
            className="w-10 h-10 flex items-center justify-center text-gray-800 dark:text-white"
          > {current.icon} </motion.button>
        )}
      </div>

      {/* Expanded buttons */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div key="expanded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-between w-full px-1 gap-1 z-10"
          >
            {reorderedThemes.map((t) => (
              <motion.button key={t.key} onClick={() => handleSelect(t.key)}
                className={`w-8 h-8 flex items-center justify-center rounded-full text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors ${t.key === tempTheme ? 'bg-gray-400/30 dark:bg-white/20' : ''
                  }`}
                whileTap={{ scale: 0.95 }}
              > {t.icon} </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ThemeSelector;