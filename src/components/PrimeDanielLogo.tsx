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
    sm: { height: 60 },
    md: { height: 80 },
    lg: { height: 110 },
    xl: { height: 150 },
  }[size];

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
      <img
        src="https://res.cloudinary.com/dirfcqs1f/image/upload/v1786022393/Gemini_Generated_Image_bcywjcbcywjcbcyw-removebg-preview_nfuafo.png"
        alt="Prime Daniel Logo"
        className="w-auto h-full max-h-full object-contain"
        style={{ height: `${dimensions.height}px` }}
      />
    </div>
  );
};
