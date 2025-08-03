// components/LoaderFallback.jsx
import React from "react";

const LoaderFallback = ({ height = "200px" }) => {
  return (
    <div
      className="flex items-center justify-center w-full"
      style={{ height }}
    >
      <div className="animate-pulse w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700 opacity-60" />
    </div>
  );
};

export default LoaderFallback;