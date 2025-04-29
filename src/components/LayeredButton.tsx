import React, { useState } from 'react';

const LayeredButton = ({
  width = 64,
  height = 16,
  title = 'Build with us',
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative cursor-pointer ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Side layers */}
      <div
        className={`absolute inset-0 bg-white border border-black transition-all duration-500 ease-in-out
          ${isHovered
            ? 'opacity-0 translate-x-0 translate-y-0'
            : 'opacity-100 translate-x-2 translate-y-2'}`}
      />
      <div
        className={`absolute inset-0 bg-white border border-black transition-all duration-500 ease-in-out
          ${isHovered
            ? 'opacity-0 translate-x-0 translate-y-0'
            : 'opacity-100 translate-x-1 translate-y-1'}`}
      />

      {/* Main layer */}
      <div
        className={`absolute inset-0 flex items-center justify-center border border-black
          ${isHovered
            ? 'bg-black text-white'
            : 'bg-white text-black'
          } 
          transition-all duration-500 ease-in-out`}
      >
        <span className="font-bold text-lg">{title}</span>
      </div>
    </div>
  );
};

export default LayeredButton;