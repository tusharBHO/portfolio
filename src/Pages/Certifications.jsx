// src/Pages/Certifications.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MouseGlowTrail from '../components/MouseGlowTrail';

const certifications = [
    {
        id: 1,
        title: "AI Fundamentals",
        issuer: "IBM SkillsBuild",
        date: "Dec 2024",
        description: "Completed IBM SkillsBuild's AI course covering ML basics, neural networks, and AI ethics.",
        link: "https://example.com/certificate",
        logo: "Logos/AIfunda.webp",
        image: "Certificates/AIfund.jpg",
    },
    {
        id: 2,
        title: "AI & Prompt Engineering",
        issuer: "IBM SkillsBuild",
        date: "Dec 2024",
        description: "Advanced training in prompt engineering techniques, AI optimization, and machine learning model interactions.",
        link: "https://example.com/certificate",
        logo: "Logos/PromptEng.png",
        image: "Certificates/PromptEng.jpg",
    },
    {
        id: 3,
        title: "Generative AI in Action",
        issuer: "IBM SkillsBuild",
        date: "Dec 2024",
        description: "Completed IBM SkillsBuild's Generative AI in Action, exploring LLMs, prompt engineering, and content generation.",
        link: "https://example.com/certificate",
        logo: "Logos/GenAI.jpeg",
        image: "Certificates/AIinAct.jpg",
    },
    {
        id: 4,
        title: "Comp Netw & Int Prot",
        issuer: "IIT Kharagpur",
        date: "April 2024",
        description: "Completed NPTEL’s CNIP course with Elite certification from IIT KGP. Core skills in networking and protocols.",
        link: "https://example.com/certificate",
        logo: "/Logos/CNIP.jpeg",
        image: "Certificates/CNIP.jpg",
    },
];

const CARD_WIDTH = 320;
const CARD_HEIGHT = 400;
const GAP = 32;
const VERTICAL_GAP = 20;

function chunkArray(arr, size) {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
    );
}

const CertificationCard = ({ title, issuer, date, description, logo, image }) => (
    <div className="w-full h-[100%] p-3 flex flex-col justify-stretch border-2 rounded-2xl shadow-md border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 transition-colors duration-300">
        <img src={logo} alt="Logo" className="h-32 rounded-xl object-cover mb-3" />
        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">{title}</h2>
        <span className="text-xs text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-950 px-3 py-1 rounded-lg self-start mb-2">
            {issuer}
        </span>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 flex-1">{description}</p>
        <div className="flex justify-between items-center border-t border-gray-300 dark:border-gray-700 pt-2">
            <a href={image} className="text-blue-600 dark:text-blue-400 text-sm">View Certificate →</a>
            <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
        </div>
    </div>
);

export default function BurstToLineWithCertCards() {
    const containerRef = useRef(null);
    const [center, setCenter] = useState({ x: 0, y: 0 });
    const [cardsPerRow, setCardsPerRow] = useState(() =>
        typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 2
    );
    const [verticalOffset, setVerticalOffset] = useState(() =>
        typeof window !== "undefined" && window.innerWidth < 768 ? 20 : 50
    );
    const [BverticalOffset, setBVerticalOffset] = useState(() =>
        typeof window !== "undefined" && window.innerWidth < 768 ? 20 : 50
    );
    const [bursting, setBursting] = useState(false);

    // Viewport detection
    const { ref: viewRef, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    // Combine refs (containerRef + viewRef)
    const setRefs = (el) => {
        containerRef.current = el;
        viewRef(el);
    };

    const hasAnimatedRef = useRef(false);
    const BURST_DURATION = 1200; // Or whatever you want

    // Set center for burst origin
    useEffect(() => {
        function updateCenter() {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setCenter({ x: rect.width / 2, y: rect.height / 2 });
            }
        }
        updateCenter();
        window.addEventListener("resize", updateCenter);
        return () => window.removeEventListener("resize", updateCenter);
    }, []);

    // Responsive layout
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
                setCardsPerRow(1);
                setVerticalOffset(70);
                setBVerticalOffset(600);
            } else {
                setCardsPerRow(2);
                setVerticalOffset(70);
                setBVerticalOffset(200);
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Trigger animation on scroll into view only once
    useEffect(() => {
        if (inView && !hasAnimatedRef.current && center.x !== 0 && center.y !== 0) {
            hasAnimatedRef.current = true;
            setBursting(true);

            const timeout = setTimeout(() => {
                setBursting(false);
            }, BURST_DURATION);

            return () => clearTimeout(timeout);
        }
    }, [inView, center]);

    const certRows = chunkArray(certifications, cardsPerRow);
    const rowsCount = certRows.length;
    const paddingBottom = 40;
    const requiredHeight = rowsCount * CARD_HEIGHT + (rowsCount - 1) * VERTICAL_GAP + paddingBottom;

    const getLineOffset = (rowIndex, cardIndex) => {
        const rowLength = certRows[rowIndex].length;
        const rowWidth = rowLength * CARD_WIDTH + (rowLength - 1) * GAP;
        const startX = center.x - rowWidth / 2;
        const x = startX + cardIndex * (CARD_WIDTH + GAP);
        const y = center.y - ((rowsCount * (CARD_HEIGHT + VERTICAL_GAP) - VERTICAL_GAP) / 2) + rowIndex * (CARD_HEIGHT + VERTICAL_GAP);
        return { x, y };
    };

    const getBurstOffset = (rowIndex, cardIndex) => {
        const idx = rowIndex * cardsPerRow + cardIndex;
        const totalCards = certifications.length;
        const angle = Math.PI * (2 / 3) + (Math.PI * (4 / 3)) * (idx / (totalCards - 1));
        const radius = 80;
        const x = center.x + Math.cos(angle) * radius - CARD_WIDTH / 2;
        const y = center.y + Math.sin(angle) * radius - CARD_HEIGHT / 2;
        return { x, y };
    };

    return (
        <>
            <MouseGlowTrail />

            <div className="pt-10">
                <h1 className="mt-10 text-4xl sm:text-5xl font-bold mb-8 p-2
                bg-[linear-gradient(91.36deg,#ECA658_0%,#F391A6_13.02%,#E188C3_25.52%,#A58DE3_37.5%,#56ABEC_49.48%,#737EB7_63.02%,#C8638C_72.92%,#DD5D57_84.38%,#DF6C51_97.92%)]
                bg-[length:300%_300%] animate-gradient bg-clip-text text-transparent w-full text-center z-10">
                    Certifications
                </h1>

                <div
                    ref={setRefs}
                    className="w-full relative"
                    style={{
                        minHeight: requiredHeight,
                        height: bursting ? requiredHeight : 'auto',
                        overflow: "visible",
                        marginTop: 100,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        position: 'relative',
                    }}
                >
                    {certRows.map((cards, rowIdx) =>
                        cards.map((cert, cardIdx) => {
                            const burstPos = getBurstOffset(rowIdx, cardIdx);
                            const linePos = getLineOffset(rowIdx, cardIdx);
                            const idx = rowIdx * cardsPerRow + cardIdx;

                            return (
                                <motion.div
                                    key={cert.id}
                                    initial={{
                                        position: "absolute",
                                        left: center.x - CARD_WIDTH / 2,
                                        top: center.y - CARD_HEIGHT / 2 - verticalOffset,
                                        opacity: 0,
                                        scale: 0.19,
                                    }}
                                    animate={
                                        bursting
                                            ? {
                                                left: burstPos.x,
                                                top: burstPos.y - BverticalOffset,
                                                opacity: 1,
                                                scale: 0.5,
                                            }
                                            : {
                                                left: linePos.x,
                                                top: linePos.y - verticalOffset,
                                                opacity: 1,
                                                scale: 1,
                                            }
                                    }
                                    transition={{
                                        type: "spring",
                                        stiffness: 84,
                                        damping: 15,
                                        delay: bursting ? idx * 0.08 : 0,
                                    }}
                                    style={{
                                        width: CARD_WIDTH,
                                        height: CARD_HEIGHT,
                                        position: "absolute",
                                        zIndex: 2,
                                    }}
                                >
                                    <CertificationCard {...cert} />
                                </motion.div>
                            );
                        })
                    )}
                </div>
            </div>
        </>
    );
}