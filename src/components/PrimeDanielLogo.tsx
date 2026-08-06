import React from 'react';

interface PrimeDanielLogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const PrimeDanielLogo: React.FC<PrimeDanielLogoProps> = ({
  className = '',
  showSubtitle = true,
  size = 'md',
}) => {
  // Height & scale controls based on size
  const dimensions = {
    sm: { height: 38 },
    md: { height: 48 },
    lg: { height: 64 },
    xl: { height: 90 },
  }[size];

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none text-white ${className}`}>
      <svg
        viewBox="0 0 320 135"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-full max-h-full"
        style={{ height: `${dimensions.height}px` }}
      >
        {/* Sleek Line Art Car Silhouette with Stylized P & D */}
        <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Main Roofline & Rear/Front Sweeping Contour */}
          <path d="M 40 40 C 60 25, 115 16, 185 16 C 215 16, 235 24, 275 42 C 282 45, 282 50, 272 52 C 255 54, 222 52, 205 52" />
          
          {/* Rear Spoiler / Tail Line */}
          <path d="M 38 40 C 30 38, 22 38, 18 40 C 14 42, 14 48, 22 50 C 30 52, 42 52, 58 52" />
          
          {/* Stylized 'P' integrated into front door / roofline */}
          <path d="M 75 52 L 75 32 C 75 32, 98 28, 118 36 C 128 40, 120 52, 92 52 Z" strokeWidth="2" />
          
          {/* Stylized 'D' integrated into center cabin */}
          <path d="M 132 52 L 132 29 C 132 29, 172 26, 188 38 C 198 46, 172 52, 132 52 Z" strokeWidth="2" />
          
          {/* Rear Wheel Circle Outline */}
          <circle cx="225" cy="52" r="14" strokeWidth="2.2" />
          
          {/* Front Wheel Arch */}
          <path d="M 68 52 C 68 40, 86 40, 86 52" />
        </g>

        {/* PRIME DANIEL Brand Name */}
        <text
          x="160"
          y="95"
          textAnchor="middle"
          fill="currentColor"
          fontSize="25"
          fontWeight="800"
          letterSpacing="0.16em"
          fontFamily="'DM Sans', system-ui, sans-serif"
        >
          PRIME DANIEL
        </text>

        {/* LUXURY CHAUFFEUR Subtitle */}
        {showSubtitle && (
          <text
            x="160"
            y="118"
            textAnchor="middle"
            fill="currentColor"
            opacity="0.82"
            fontSize="11"
            fontWeight="600"
            letterSpacing="0.3em"
            fontFamily="'DM Sans', system-ui, sans-serif"
          >
            LUXURY CHAUFFEUR
          </text>
        )}
      </svg>
    </div>
  );
};
