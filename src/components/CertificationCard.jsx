// src/components/CertificationCard.jsx
import React from "react";

const CertificationCard = ({ title, image, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full h-full rounded-xl shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700"
    >
      <div className="w-full h-3/4 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover object-center" />
      </div>
      
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          {title}
        </h2>
      </div>
    </a>
  );
};

export default CertificationCard;