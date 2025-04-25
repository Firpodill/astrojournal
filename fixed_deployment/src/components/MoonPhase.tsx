import React from 'react';

interface MoonPhaseProps {
  phase: number; // 0 to 1, where 0 is new moon, 0.5 is full moon, 1 is back to new moon
  size?: number;
  className?: string;
}

export const MoonPhase: React.FC<MoonPhaseProps> = ({ 
  phase, 
  size = 60,
  className = '' 
}) => {
  // Calculate the rotation and visibility of the shadow
  const rotation = phase <= 0.5 
    ? 180 - (phase * 360) // First half of the cycle (new to full)
    : (phase - 0.5) * 360; // Second half of the cycle (full to new)
  
  const shadowWidth = phase <= 0.5 
    ? 50 - (phase * 100) // Shadow shrinks from 50% to 0%
    : (phase - 0.5) * 100; // Shadow grows from 0% to 50%
  
  const shadowSide = phase <= 0.5 ? 'right' : 'left';
  
  return (
    <div 
      className={`moon-phase ${className}`}
      style={{ 
        width: `${size}px`, 
        height: `${size}px` 
      }}
    >
      {shadowWidth > 0 && (
        <div 
          className="moon-phase-shadow"
          style={{ 
            [shadowSide]: 0,
            width: `${shadowWidth}%`,
            transform: `rotate(${rotation}deg)`,
            borderRadius: shadowSide === 'left' ? '50% 0 0 50%' : '0 50% 50% 0'
          }}
        />
      )}
    </div>
  );
};
