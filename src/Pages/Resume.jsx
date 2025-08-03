// src/pages/Resume.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import MouseGlowTrail from '../components/MouseGlowTrail';

const Resume = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        setIsDark(root.classList.contains("dark"));

        const observer = new MutationObserver(() => {
            setIsDark(root.classList.contains("dark"));
        });

        observer.observe(root, { attributes: true, attributeFilter: ["class"] });
        return () => observer.disconnect();
    }, []);

    const resumeImage = isDark ? "/resume_dark.png" : "/resume_light.png";

    // Refs and inView hook
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const isLeftInView = useInView(leftRef, { once: true, margin: "-100px" });
    const isRightInView = useInView(rightRef, { once: true, margin: "-100px" });

    return (
        <>
            <MouseGlowTrail />
            <section className="min-h-screen bg-gray-100 dark:bg-darkBg flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 pt-0 sm:pt-16 gap-12">
                {/* Left: Info & Download */}
                <motion.div
                    ref={leftRef}
                    initial={{ y: -200, opacity: 0 }}
                    animate={isLeftInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="w-5/6 md:w-2/3 bg-gray-300 dark:bg-[#2c2c2c] shadow-lg rounded-xl sm:p-6 p-4 text-center"
                >
                    <p className="text-sm text-gray-900 dark:text-gray-200 mb-6">
                        Take a look at my resume snapshot. Download the full version to explore all details.
                    </p>
                    <a
                        href="/resume.docx"
                        download
                        className="font-semibold px-6 py-2 rounded text-center transition border border-red-300 dark:border-gray-600 hover:bg-[#b2d3ff] hover:text-black dark:hover:bg-[#90bfff] dark:hover:text-black
                    bg-[linear-gradient(91.36deg,#ECA658_0%,#F391A6_13.02%,#E188C3_25.52%,#A58DE3_37.5%,#56ABEC_49.48%,#737EB7_63.02%,#C8638C_72.92%,#DD5D57_84.38%,#DF6C51_97.92%)]
                    bg-[length:300%_300%] animate-gradient bg-clip-text text-transparent"
                    >
                        Download Word (.docx)
                    </a>
                </motion.div>

                {/* Right: Resume Image */}
                <motion.div
                    ref={rightRef}
                    initial={{ y: 200, opacity: 0 }}
                    animate={isRightInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="w-full md:w-2/3 max-h-[80vh] overflow-auto rounded-lg border border-gray-300 dark:border-gray-600 shadow-md sm:p-3 bg-gray-300 dark:bg-[#2c2c2c]"
                >
                    <img
                        src={resumeImage}
                        alt="Resume Preview"
                        className="w-full object-contain"
                    />
                </motion.div>
            </section>
        </>
    );
};

export default Resume;