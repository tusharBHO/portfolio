import { useEffect, useState, useContext } from "react";
import { ArrowUp } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext"; // Adjust path as needed

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { theme } = useContext(ThemeContext); // 'light' or 'dark'

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Tailwind classes based on theme
    const themeStyles = theme === "dark" ? "bg-white text-black hover:bg-gray-200" : "bg-[#1f1f1f] text-white hover:bg-gray-800";

    return (
        <button onClick={scrollToTop}
            className={`fixed bottom-4 right-4 z-50 p-3 rounded-full shadow-md transition-opacity duration-300 hover:scale-105 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                } ${themeStyles}`}
            aria-label="Scroll to top"
        >
            <ArrowUp size={20} />
        </button>
    );
};

export default ScrollToTopButton;