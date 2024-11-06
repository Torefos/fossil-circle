import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 rounded-full border-2 border-black flex items-center justify-center">
          <div className="w-4 h-4 transform -translate-y-1">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </div>
        </div>
        <div className="absolute w-1.5 h-1.5 bg-black rounded-full -left-3 top-1/2 transform -translate-y-1/2" />
        <div className="absolute w-1.5 h-1.5 bg-black rounded-full -right-3 top-1/2 transform -translate-y-1/2" />
      </div>
      <span className="text-xl font-semibold ml-4">Fossdl</span>
    </div>
  );
};

export default Logo;