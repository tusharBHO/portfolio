import React, { useEffect, useRef, useState } from "react";

const CircularProgress = ({ percentage, label, icon }) => {
    const radius = 60;
    const stroke = 8;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;

    const circleRef = useRef(null);
    const [offset, setOffset] = useState(circumference);
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible) {
            const targetOffset = circumference - (percentage / 100) * circumference;
            setOffset(targetOffset);
        }
    }, [isVisible, percentage, circumference]);

    return (
        <div ref={containerRef} className="flex flex-col items-center mb-3">
            <div className="relative w-[120px] h-[110px]">
                <svg height={radius * 2} width={radius * 2}>
                    <circle
                        stroke="#e5e7eb"
                        fill="transparent"
                        strokeWidth={stroke}
                        className="dark:stroke-gray-700"
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                    />
                    <circle
                        ref={circleRef}
                        stroke="#3B82F6"
                        fill="transparent"
                        strokeWidth={stroke}
                        strokeLinecap="round"
                        strokeDasharray={`${circumference} ${circumference}`}
                        strokeDashoffset={offset}
                        style={{ transition: "stroke-dashoffset 1s ease-in-out" }}
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                    />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-black dark:text-white">
                    <div className="text-[30px] mb-0">{icon}</div>
                    <div className="text-xs font-bold">{percentage}%</div>
                </div>
            </div>
            <span className="text-sm mt-0 font-medium text-black dark:text-white">{label}</span>
        </div>
    );
};

export default CircularProgress;