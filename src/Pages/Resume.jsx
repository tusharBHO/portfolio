import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import MouseGlowTrail from "../components/MouseGlowTrail";
import toast from "react-hot-toast";

const Resume = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        setIsDark(root.classList.contains("dark"));

        const observer = new MutationObserver(() => {
            setIsDark(root.classList.contains("dark"));
        });

        observer.observe(root, { attributes: true, attributeFilter: ["class"] });
        return () => observer.disconnect();
    }, []);

    const resumeImage = isDark ? "/resume_dark.png" : "/resume_light.png";

    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const isLeftInView = useInView(leftRef, { once: true, margin: "-100px" });
    const isRightInView = useInView(rightRef, { once: true, margin: "-100px" });

    const handleDownload = () => {
        toast.success("Resume downloaded!");
    };

    return (
        <>
            <MouseGlowTrail />

            <section className="min-h-screen bg-gray-100 dark:bg-darkBg py-10 px-4 flex flex-col items-center">
                {/* <h1 className="mt-6 sm:mt-10 text-4xl sm:text-5xl font-bold p-2
                bg-[linear-gradient(91.36deg,#ECA658_0%,#F391A6_13.02%,#E188C3_25.52%,#A58DE3_37.5%,#56ABEC_49.48%,#737EB7_63.02%,#C8638C_72.92%,#DD5D57_84.38%,#DF6C51_97.92%)]
                bg-[length:300%_300%] animate-gradient bg-clip-text text-transparent">
                    Resume
                </h1> */}

                {/* <div className="flex flex-col lg:flex-row items-center justify-center pt-2 sm:pt-10 gap-6 sm:gap-12">
                    <motion.div
                        ref={leftRef}
                        initial={{ y: -200, opacity: 0 }}
                        animate={isLeftInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="w-5/6 md:w-2/5 sm:p-6 p-4 text-center"
                    >
                        <p className="text-sm text-gray-900 dark:text-gray-200 mb-6">
                            Take a look at my resume snapshot. Download the full version to explore all details.
                        </p>
                        <a
                            href="/resume.pdf"
                            download
                            onClick={handleDownload}
                            className="font-semibold px-6 py-2 rounded text-center transition border border-red-300 dark:border-gray-600 hover:bg-[#b2d3ff] hover:text-black dark:hover:bg-[#90bfff] dark:hover:text-black
                        bg-[linear-gradient(91.36deg,#ECA658_0%,#F391A6_13.02%,#E188C3_25.52%,#A58DE3_37.5%,#56ABEC_49.48%,#737EB7_63.02%,#C8638C_72.92%,#DD5D57_84.38%,#DF6C51_97.92%)]
                        bg-[length:300%_300%] animate-gradient bg-clip-text text-transparent"
                        >
                            Download
                        </a>
                    </motion.div>

                    <motion.div
                        ref={rightRef}
                        initial={{ y: 200, opacity: 0 }}
                        animate={isRightInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="w-full md:w-2/3 max-h-[70vh] overflow-auto rounded-lg border border-gray-300 dark:border-gray-600 shadow-md sm:p-3 bg-gray-300 dark:bg-[#2c2c2c]"
                    >
                        <img
                            src={resumeImage}
                            alt="Resume Preview"
                            className="w-full object-contain"
                        />
                    </motion.div>
                </div> */}

                <h1 className="mt-6 sm:mt-10 text-4xl sm:text-5xl font-bold p-2
                bg-[linear-gradient(91.36deg,#ECA658_0%,#F391A6_13.02%,#E188C3_25.52%,#A58DE3_37.5%,#56ABEC_49.48%,#737EB7_63.02%,#C8638C_72.92%,#DD5D57_84.38%,#DF6C51_97.92%)]
                bg-[length:300%_300%] animate-gradient bg-clip-text text-transparent">
                    Resume
                </h1>

                <div className="h-[60vh] w-full flex flex-col lg:flex-row items-center justify-center pt-2 sm:pt-10 gap-6 sm:gap-12">
                    <motion.div
                        ref={leftRef}
                        initial={{ y: -200, opacity: 0 }}
                        animate={isLeftInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="w-5/5 md:w-3/5 sm:p-6 p-4 text-center"
                    >
                        <p className="text-sm text-gray-900 dark:text-gray-200 mb-6">
                            Take a look at my resume. Hit the download button!.
                        </p>
                        <a
                            href="/resume.pdf"
                            download
                            onClick={handleDownload}
                            className="font-semibold px-6 py-2 rounded text-center transition border border-red-300 dark:border-gray-600 hover:bg-[#b2d3ff] hover:text-black dark:hover:bg-[#90bfff] dark:hover:text-black
                        bg-[linear-gradient(91.36deg,#ECA658_0%,#F391A6_13.02%,#E188C3_25.52%,#A58DE3_37.5%,#56ABEC_49.48%,#737EB7_63.02%,#C8638C_72.92%,#DD5D57_84.38%,#DF6C51_97.92%)]
                        bg-[length:300%_300%] animate-gradient bg-clip-text text-transparent"
                        >
                            Download
                        </a>
                    </motion.div>

                    {/* <motion.div
                        ref={rightRef}
                        initial={{ y: 200, opacity: 0 }}
                        animate={isRightInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="w-full md:w-2/3 max-h-[70vh] overflow-auto rounded-lg border border-gray-300 dark:border-gray-600 shadow-md sm:p-3 bg-gray-300 dark:bg-[#2c2c2c]"
                    >
                        <img
                            src={resumeImage}
                            alt="Resume Preview"
                            className="w-full object-contain"
                        />
                    </motion.div> */}
                </div>
            </section>
        </>
    );
};

export default Resume;