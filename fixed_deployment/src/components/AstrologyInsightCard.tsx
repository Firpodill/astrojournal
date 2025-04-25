import React from 'react';
import { MoonPhase } from './MoonPhase';

interface AstrologyInsightCardProps {
  date: string;
  moonPhase: number;
  moonSign: string;
  insight: string;
  className?: string;
}

export const AstrologyInsightCard: React.FC<AstrologyInsightCardProps> = ({
  date,
  moonPhase,
  moonSign,
  insight,
  className = '',
}) => {
  return (
    <div className={`glass-panel ethereal-glow ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold text-starlight">Cosmic Insight</h3>
          <p className="text-sm text-moon-silver">{date}</p>
        </div>
        <div className="flex items-center">
          <MoonPhase phase={moonPhase} size={40} />
        </div>
      </div>
      
      <div className="mb-4">
        <div className="text-nebula-pink text-sm mb-1">Moon in {moonSign}</div>
        <p className="text-moon-silver italic">{insight}</p>
      </div>
      
      <div className="text-xs text-celestial-blue mt-2">
        ✧ Daily astrological guidance
      </div>
    </div>
  );
};
