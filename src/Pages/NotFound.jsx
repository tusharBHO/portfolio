// src/pages/NotFound.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player"; // Or use Lottie from 'lottie-react'
import animationData from "../../public/error-404.json"; // Update path if needed

const NotFound = () => {
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

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-500 text-center">
            <div className="max-w-sm w-full">
                <div className="w-72 h-72 mx-auto">
                    <Player
                        autoplay
                        loop
                        src={animationData}
                        className={isDark ? "brightness-100" : "brightness-90"}
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>

                <h1 className="text-4xl font-bold mt-4">404 - Page Not Found</h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    The page you’re looking for doesn’t exist or has been moved.
                </p>

                <Link
                    to="/"
                    className="mt-6 inline-block px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400 text-white transition"
                >
                    ⬅️ Go Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;