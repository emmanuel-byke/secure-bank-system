import React from 'react';
import { FiHeart } from 'react-icons/fi';


export const NeonIcon = ({ color = "#39ff14", icon: Icon = FiHeart, size = 64, animate = 'animate-pulse',
    stroke1=1.5, stroke2=0.5, color2="#ffffff"
 }) => {
  const computedSize = typeof size === 'number' ? `${size}px` : size;

  return (
    <div className="relative inline-block">
      {/* Neon glow layer */}
      <div className={`absolute inset-0 flex items-center justify-center ${animate}`}>
        <Icon
          style={{
            height: computedSize,
            width: computedSize,
            stroke: color,
            strokeWidth: stroke1,
            filter: `drop-shadow(0 0 8px ${color}) drop-shadow(0 0 16px ${color})`,
          }}
        />
      </div>

      {/* White icon layer (the crisp inner stroke) */}
      <div className="relative flex items-center justify-center">
        <Icon
          style={{
            height: computedSize,
            width: computedSize,
            stroke: color2,
            strokeWidth: stroke2,
          }}
        />
      </div>
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${index * 0.2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};


