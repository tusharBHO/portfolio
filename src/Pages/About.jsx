import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import LightOn from '/public/LightON.svg';
import LightOff from '/public/LightOFF.svg';
import PowerButton from '/public/Button1.png';
import PressedButton from '/public/Button2.png';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import MouseGlowTrail from '../components/MouseGlowTrail';

const About = () => {
    const { theme } = useContext(ThemeContext);
    const [lampOn, setLampOn] = useState(false);
    const [leftLampOn, setLeftLampOn] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    const [hoverPopup, setHoverPopup] = useState(false);
    const [hoverTimer, setHoverTimer] = useState(null);
    const [clickPopup, setClickPopup] = useState(false);

    const shouldShowLamp = theme === 'dark';
    const lightsOff = shouldShowLamp && (!lampOn || !leftLampOn);

    const toggleBothLamps = () => {
        const newState = !(lampOn && leftLampOn);
        setLampOn(newState);
        setLeftLampOn(newState);
        setIsPressed(true);
        setTimeout(() => setIsPressed(false), 250);
    };

    // Scroll-triggered animation control
    const controlsLeft = useAnimation();
    const controlsRight = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controlsLeft.start({ x: 0, y: 0, rotate: 0, opacity: 1 });
            controlsRight.start({ x: 0, y: 0, rotate: 0, opacity: 1 });
        }
    }, [inView]);

    return (
        <>
            <MouseGlowTrail />

            <section ref={ref} className="bg-gray-100 dark:bg-dark-background pt-20 px-3 min-h-screen flex flex-col items-center justify-center">
                <div
                    className={`relative bg-gradient-to-br from-[#28466d] via-[#a0b6d7] to-[#353f4e] dark:from-[#1e293b] dark:via-[#334155] dark:to-[#0f172a] 
        rounded-3xl shadow-lg max-w-6xl w-full py-8 p-4 md:p-16 flex flex-col md:flex-row items-center gap-10 overflow-hidden 
        transition-all duration-500 ${theme === 'dark' && lampOn && leftLampOn ? 'animate-ambient-glow' : ''}`}
                >
                    {lightsOff && (
                        <div className="absolute inset-0 bg-black/60 transition-all duration-500 z-30 pointer-events-none" />
                    )}

                    {/* Right and Left Lamps */}
                    {shouldShowLamp && (
                        <>
                            <div className="absolute top-[-18px] right-4 sm:right-20 z-10">
                                <img src={lampOn ? LightOn : LightOff} className="w-20 h-20 transition-all duration-300" />
                            </div>
                            <div className="absolute top-[-18px] left-4 sm:left-20 z-10">
                                <img src={leftLampOn ? LightOn : LightOff} className="w-20 h-20 transition-all duration-300" />
                            </div>
                        </>
                    )}

                    {/* Left Section */}
                    <motion.div
                        initial={{ x: -200, y: -50, rotate: -5, opacity: 0 }}
                        animate={controlsLeft}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className="sm:w-[80vw] md:w-1/3 flex flex-col items-center gap-4 relative z-10"
                    >
                        <div className="sm:w-[90vw] md:w-2/3 flex flex-col items-center gap-4 relative z-10">
                            <div className="relative"
                                onMouseEnter={() => {
                                    const timer = setTimeout(() => {
                                        setHoverPopup(true);
                                        setClickPopup(false);
                                    }, 1000);
                                    setHoverTimer(timer);
                                }}

                                onMouseLeave={() => {
                                    clearTimeout(hoverTimer);
                                    setHoverPopup(false);
                                }}

                                onClick={() => {
                                    setClickPopup(true);
                                    setHoverPopup(false);
                                    setTimeout(() => setClickPopup(false), 2500);
                                }}
                            >
                                <img src="goku.png" alt="Tushar illustration"
                                    className="w-60 md:w-60 object-contain drop-shadow-xl rounded-md cursor-pointer"
                                />
                                {hoverPopup && (
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 z-50">
                                        <div className="relative bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-2 text-[0.6rem] rounded-xl border border-gray-300 dark:border-gray-600 shadow-md max-w-[160px] text-center">
                                            👀 Focus on the portfolio!
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-t-[6px] border-t-white dark:border-t-gray-800 border-x-[6px] border-x-transparent"></div>
                                        </div>
                                    </div>
                                )}
                                {clickPopup && (
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 z-50">
                                        <div className="relative bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-2 text-[0.6rem] rounded-xl border border-gray-300 dark:border-gray-600 shadow-md max-w-[160px] text-center">
                                            😅 Told you already!
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-t-[6px] border-t-white dark:border-t-gray-800 border-x-[6px] border-x-transparent"></div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Power Button */}
                            {shouldShowLamp && (
                                <button onClick={toggleBothLamps} className="mt-2">
                                    <img src={isPressed ? PressedButton : PowerButton}
                                        className={`w-14 h-14 hover:scale-105 transition-transform absolute left-1 sm:left-0 ${isPressed ? 'bottom-1' : 'bottom-2'}`}
                                    />
                                </button>
                            )}
                        </div>
                    </motion.div>

                    {/* Right Section */}
                    <motion.div
                        initial={{ x: 200, y: 50, rotate: 5, opacity: 0 }}
                        animate={controlsRight}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                        className="md:w-full text-center md:text-left z-10"
                    >
                        <div>
                            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-snug hidden sm:block
              bg-[linear-gradient(91.36deg,#ECA658_0%,#F391A6_13.02%,#E188C3_25.52%,#A58DE3_37.5%,#56ABEC_49.48%,#737EB7_63.02%,#C8638C_72.92%,#DD5D57_84.38%,#DF6C51_97.92%)]
              bg-[length:300%_300%] animate-gradient bg-clip-text text-transparent">
                                A little <br /> about me.
                            </h2>

                            <p className="sm:text-base text-gray-800 dark:text-gray-300 leading-relaxed">
                                I am Tushar Bhoyar, currently pursuing a B.Tech in Computer Science and Engineering at G. H. Raisoni University (GHRU). I’m an aspiring full-stack developer, actively honing my development skills and building a strong foundation in software engineering.
                            </p>
                            <p className="sm:text-base text-gray-800 dark:text-gray-300 leading-relaxed mt-4">
                                With an intermediate grasp of competitive programming in C++, I continuously challenge myself to improve problem-solving abilities. Keeping up with current trends, I actively explore and integrate the latest AI tools into my workflow — enhancing productivity, efficiency, and creativity in my projects.
                            </p>
                            <p className="sm:text-base text-gray-800 dark:text-gray-300 leading-relaxed mt-4">
                                Still growing — not an expert, but skilled enough to build things that work and look good.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {shouldShowLamp && (
                    <p className="text-sm text-gray-500 dark:text-gray-300 mt-3 italic flex items-center gap-1">
                        <img src={PowerButton} className='w-7' />
                        <span>If it’s dark, switch on the light.</span>
                    </p>
                )}
                {theme === 'light' && (
                    <p className="text-sm text-gray-900 mt-3 italic flex items-center gap-1 animate-pulse">
                        <span className="text-lg">💡</span>
                        <span>Switch to dark mode to see the magic.</span>
                    </p>
                )}
            </section>
        </>
    );
};

export default About;