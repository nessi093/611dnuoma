import React from 'react';

export const SeagullsSVG: React.FC = () => {
  return (
    <div className="absolute inset-x-0 top-6 h-32 pointer-events-none overflow-hidden select-none z-0">
      {/* Seagull 1 (Leader) */}
      <div
        className="absolute top-4 -left-20 animate-seagull"
        style={{ animationDuration: '32s', animationDelay: '0s' }}
      >
        <svg width="48" height="24" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Left Wing */}
          <path
            d="M 50,30 Q 30,5 0,22 Q 25,20 50,30"
            fill="#ffffff"
            stroke="#94a3b8"
            strokeWidth="2"
            className="animate-wing"
          />
          {/* Right Wing */}
          <path
            d="M 50,30 Q 70,5 100,22 Q 75,20 50,30"
            fill="#ffffff"
            stroke="#94a3b8"
            strokeWidth="2"
            className="animate-wing"
          />
          {/* Seagull body */}
          <ellipse cx="50" cy="30" rx="8" ry="4" fill="#f8fafc" />
          {/* Yellow Beak */}
          <polygon points="50,28 54,30 50,32" fill="#eab308" />
        </svg>
      </div>

      {/* Seagull 2 (Follower) */}
      <div
        className="absolute top-14 -left-28 animate-seagull"
        style={{ animationDuration: '36s', animationDelay: '3.5s', transform: 'scale(0.75)' }}
      >
        <svg width="40" height="20" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 50,30 Q 30,5 0,22 Q 25,20 50,30"
            fill="#ffffff"
            stroke="#cbd5e1"
            strokeWidth="2"
            className="animate-wing"
          />
          <path
            d="M 50,30 Q 70,5 100,22 Q 75,20 50,30"
            fill="#ffffff"
            stroke="#cbd5e1"
            strokeWidth="2"
            className="animate-wing"
          />
          <ellipse cx="50" cy="30" rx="7" ry="3.5" fill="#f8fafc" />
        </svg>
      </div>

      {/* Seagull 3 (High in sky) */}
      <div
        className="absolute top-1 -left-36 animate-seagull"
        style={{ animationDuration: '40s', animationDelay: '14s', transform: 'scale(0.6)' }}
      >
        <svg width="34" height="18" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 50,30 Q 30,5 0,22 Q 25,20 50,30"
            fill="#ffffff"
            stroke="#94a3b8"
            strokeWidth="2"
            className="animate-wing"
          />
          <path
            d="M 50,30 Q 70,5 100,22 Q 75,20 50,30"
            fill="#ffffff"
            stroke="#94a3b8"
            strokeWidth="2"
            className="animate-wing"
          />
          <ellipse cx="50" cy="30" rx="6" ry="3" fill="#f8fafc" />
        </svg>
      </div>
    </div>
  );
};
