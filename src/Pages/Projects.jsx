import React from "react";
import { motion } from "framer-motion";
import MouseGlowTrail from '../components/MouseGlowTrail';

const Projects = () => {
    return (
        <>
            <MouseGlowTrail />

            <section className="min-h-screen bg-white dark:bg-darkBg flex items-center justify-center px-6 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 60, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="bg-white dark:bg-[#1f1f1f] shadow-xl rounded-xl px-8 py-12 text-center max-w-md"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-3xl font-bold mb-4
                    bg-[linear-gradient(91.36deg,#ECA658_0%,#F391A6_13.02%,#E188C3_25.52%,#A58DE3_37.5%,#56ABEC_49.48%,#737EB7_63.02%,#C8638C_72.92%,#DD5D57_84.38%,#DF6C51_97.92%)]
                    bg-[length:300%_300%] animate-gradient bg-clip-text text-transparent"
                    >
                        Projects
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
                    >
                        🚧 Work on the way…<br />
                        I'm currently building some awesome stuff. Stay tuned!
                    </motion.p>
                </motion.div>
            </section>
        </>
    );
};

export default Projects;