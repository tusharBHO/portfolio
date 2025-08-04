
import React from "react";
import { motion } from "framer-motion";
import CircularProgress from "../components/CircularProgress";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaFigma, } from "react-icons/fa";
import { SiTailwindcss, SiCplusplus } from "react-icons/si";
import { useInView } from "react-intersection-observer";
import MouseGlowTrail from '../components/MouseGlowTrail';

// ⬇️ Technical skills array (for CircularProgress)
const skills = [
    { label: "HTML", percentage: 90, icon: <FaHtml5 size={34} color="#f16529" /> },
    { label: "CSS", percentage: 80, icon: <FaCss3Alt size={34} color="#2965f1" /> },
    { label: "C++", percentage: 70, icon: <SiCplusplus size={34} color="#00599C" /> },
    { label: "JavaScript", percentage: 60, icon: <FaJs size={34} color="#f0db4f" /> },
    { label: "React.js", percentage: 60, icon: <FaReact size={34} color="#61DBFB" /> },
    { label: "Tailwind CSS", percentage: 60, icon: <SiTailwindcss size={34} color="#38BDF8" /> },
    { label: "Bootstrap", percentage: 50, icon: <FaBootstrap size={34} color="#563d7c" /> },
    { label: "Figma", percentage: 50, icon: <FaFigma size={34} color="#a259ff" /> },
];

// ⬇️ Role-based cards
const roleCards = [
    {
        img: "Skills/designer.png",
        role: "Designer",
        Rdescri: "I favour minimal design and thoughtful interactions.",
        head1: "Work Area",
        cont1: "UX, UI, Web",
        head2: "Design Tools:",
        cont2: ["Wireframe.cc", "Canva", "Figma"],
    },
    {
        img: "Skills/developer.png",
        role: "Web Developer",
        Rdescri: "I love building web experiences that live in the browser.",
        head1: "Frameworks",
        cont1: "React.js, Node.js, Bootstrap, Tailwind",
        head2: "Dev Tools:",
        cont2: ["VS Code", "GitHub", "MongoDB", "Postman", "Vercel", "Terminal"],
    },
    {
        img: "Skills/coder.png",
        role: "Competitive Coding",
        Rdescri: "Solving real-world problems with logic and constraints.",
        head1: "Languages:",
        cont1: "C++, C",
        head2: "Platforms:",
        cont2: ["LeetCode", "HackerRank"],
    },
    {
        img: "Skills/prompt.png",
        role: "Prompt Engineer",
        Rdescri: "Leveraging AI tools to generate content, code, and designs with optimized prompts.",
        head1: "Tools & Models:",
        cont1: "ChatGPT, DALL·E, Midjourney, Claude",
        head2: "Use Cases:",
        cont2: ["Content Generation", "Code Assistance", "AI-driven UI/UX"],
    },
];

// ⬇️ Card animation
const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: (i) => ({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

// ⬇️ Main Component
const Skills = () => {
    const { ref: sectionRef, inView } = useInView({
        threshold: 0.3,
        triggerOnce: false,
    });

    return (
        <>
            <MouseGlowTrail />

            <div
                ref={sectionRef}
                className="min-h-screen bg-gray-100 dark:bg-darkBg text-black dark:text-white transition-colors duration-300 py-10 px-5 flex flex-col items-center"
            >
                <h1 className="mt-10 text-4xl sm:text-5xl font-bold mb-8 p-2
                bg-[linear-gradient(91.36deg,#ECA658_0%,#F391A6_13.02%,#E188C3_25.52%,#A58DE3_37.5%,#56ABEC_49.48%,#737EB7_63.02%,#C8638C_72.92%,#DD5D57_84.38%,#DF6C51_97.92%)]
                bg-[length:300%_300%] animate-gradient bg-clip-text text-transparent">
                    My Skillset
                </h1>

                {/* 🟩 Role Cards Section */}
                <div className="overflow-x-auto w-full">
                    <div className="flex space-x-4 px-2 py-4 w-max">
                        {roleCards.map((card, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={cardVariants}
                                className="min-w-[280px] w-[90vw] sm:w-[30vw] bg-white dark:bg-[#1e293b] p-5 rounded-xl shadow-md text-center transition-all"
                            >
                                <motion.img
                                    src={card.img}
                                    alt={card.role}
                                    className={`w-20 h-20 m-auto mt-5 mb-10 ${card.img.includes('prompt') ? 'dark:invert' : ''} shadow-lg`}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                                    transition={{ delay: i * 0.3 + 0.2, duration: 0.4 }}
                                />

                                <motion.h2
                                    className="text-2xl font-semibold mb-3"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                    transition={{ delay: i * 0.3 + 0.3, duration: 0.4 }}
                                >
                                    {card.role}
                                </motion.h2>

                                <motion.p
                                    className="text-gray-700 dark:text-gray-300 mb-4 text-sm"
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                                    transition={{ delay: i * 0.3 + 0.35, duration: 0.4 }}
                                >
                                    {card.Rdescri}
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ delay: i * 0.3 + 0.4, duration: 0.4 }}
                                >
                                    <p className="text-blue-600 dark:text-blue-400 font-medium mt-6">
                                        {card.head1}
                                    </p>
                                    <p className="mb-2">{card.cont1}</p>

                                    <p className="text-blue-600 dark:text-blue-400 font-medium mt-6">
                                        {card.head2}
                                    </p>
                                    <ul className="text-sm">
                                        {card.cont2.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 🟦 Technical Skills (CircularProgress) */}
                <h2 className="text-2xl font-semibold mt-16 mb-6">Technical Proficiency</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-14">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <CircularProgress
                                label={skill.label}
                                percentage={skill.percentage}
                                icon={skill.icon}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Skills;