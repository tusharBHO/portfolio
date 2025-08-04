import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast"; // ✅ react-hot-toast
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import MouseGlowTrail from '../components/MouseGlowTrail';

const Contact = () => {
    const formRef = useRef();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [loading, setLoading] = useState(false);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
            .then(() => {
                toast.success("Message sent successfully!");
                formRef.current.reset();
                setLoading(false);
            })
            .catch(() => {
                toast.error("❌ Failed to send message. Please try again.");
                setLoading(false);
            });
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut"
            }
        }),
    };

    return (
        <>
            <MouseGlowTrail />

            <section
                ref={sectionRef}
                className="min-h-screen bg-white dark:bg-darkBg py-10 px-4 sm:px-6 lg:px-12 overflow-x-hidden"
            >
                <motion.h1
                    initial={{ opacity: 0, y: -50, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="mt-10 text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 sm:mb-8 p-2
        bg-[linear-gradient(91.36deg,#ECA658_0%,#F391A6_13.02%,#E188C3_25.52%,#A58DE3_37.5%,#56ABEC_49.48%,#737EB7_63.02%,#C8638C_72.92%,#DD5D57_84.38%,#DF6C51_97.92%)]
        bg-[length:300%_300%] animate-gradient bg-clip-text text-transparent"
                >
                    Let's Work Together
                </motion.h1>

                <div className="flex flex-col lg:flex-row items-start justify-center gap-6 lg:gap-16 max-w-7xl mx-auto">
                    {/* Left Info Section */}
                    <div className="w-full lg:w-1/3 space-y-2 sm:space-y-6">
                        {[
                            {
                                icon: <FaEnvelope />,
                                title: "Email",
                                content: "tbhoyar079@gmail.com",
                            },
                            {
                                icon: <FaPhone />,
                                title: "Phone",
                                content: "+91 9302497195",
                            },
                            {
                                icon: null,
                                title: "Connect with me",
                                content: (
                                    <div className="flex gap-5 text-xl sm:text-2xl text-[#202523] dark:text-[#ffffff] mt-2">
                                        <a href="https://www.linkedin.com/in/tushar-bhoyar-a7049a250" target="_blank" rel="noreferrer">
                                            <FaLinkedin className="hover:text-[#0077b5]" />
                                        </a>
                                        <a href="https://github.com/tusharBHO" target="_blank" rel="noreferrer">
                                            <FaGithub className="hover:text-white" />
                                        </a>
                                    </div>
                                )
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={cardVariants}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                custom={i}
                                className="bg-white dark:bg-[#2c2c2c] p-3 sm:p-4  rounded-xl shadow-lg"
                            >
                                <h3 className="text-xs sm:text-lg font-semibold text-gray-800 dark:text-gray-400 mb-1 sm:mb-2 flex items-center gap-2">
                                    {item.icon} {item.title}
                                </h3>
                                <div className="text-gray-600 dark:text-[#ffffff] text-xs sm:text-base">
                                    {item.content}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Form Section */}
                    <motion.div
                        initial={{ x: 200, rotateZ: 8, opacity: 0 }}
                        animate={isInView ? { x: 0, rotateZ: 0, opacity: 1 } : {}}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="w-full lg:w-2/3 bg-white dark:bg-[#2c2c2c] px-4 sm:px-8 py-4 sm:py-6 rounded-xl shadow-xl"
                    >
                        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                            Let's get in touch
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm sm:text-base">
                            Feel free to reach out for collaborations, projects, or just to say hi!
                        </p>

                        <form ref={formRef} onSubmit={sendEmail} className="space-y-2 sm:space-y-5">
                            <div>
                                <input
                                    name="user_name"
                                    required
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full sm:mt-1 px-4 py-1 sm:py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-md bg-white dark:bg-[#1f1f1f] text-gray-900 dark:text-gray-100 focus:ring-[#00ffa0] focus:border-[#00ffa0] outline-none"
                                />
                            </div>

                            <div>
                                <input
                                    name="user_email"
                                    required
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full sm:mt-1 px-4 py-1 sm:py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-md bg-white dark:bg-[#1f1f1f] text-gray-900 dark:text-gray-100 focus:ring-[#00ffa0] focus:border-[#00ffa0] outline-none"
                                />
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    rows="4"
                                    required
                                    placeholder="Write your message..."
                                    className="w-full sm:mt-1 px-4 py-1 sm:py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-md bg-white dark:bg-[#1f1f1f] text-gray-900 dark:text-gray-100 focus:ring-[#00ffa0] focus:border-[#00ffa0] outline-none resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-[#ffffff] hover:bg-[#ced3d1] dark:bg-[#dbd9d9] dark:hover:bg-white border-2 border-gray-300 transition text-black font-semibold px-4 sm:px-6 py-1 sm:py-2 rounded shadow-xl"
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Contact;