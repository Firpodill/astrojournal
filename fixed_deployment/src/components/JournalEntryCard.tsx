import React from 'react';

interface JournalEntryCardProps {
  date: string;
  title: string;
  excerpt: string;
  moonPhase: number;
  mood?: string;
  hasMedia?: boolean;
  onClick?: () => void;
  className?: string;
}

export const JournalEntryCard: React.FC<JournalEntryCardProps> = ({
  date,
  title,
  excerpt,
  moonPhase,
  mood,
  hasMedia,
  onClick,
  className = '',
}) => {
  return (
    <div 
      className={`glass-panel cursor-pointer transition-all duration-300 hover:shadow-ethereal ${className}`}
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-lg font-semibold text-starlight">{title}</h3>
          <p className="text-sm text-moon-silver">{date}</p>
        </div>
        <div className="flex items-center space-x-2">
          {mood && (
            <span className="text-sm px-2 py-1 rounded-full bg-cosmic-purple bg-opacity-30 text-starlight">
              {mood}
            </span>
          )}
          {hasMedia && (
            <span className="text-nebula-pink">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </span>
          )}
        </div>
      </div>
      <p className="text-moon-silver line-clamp-2 mb-4">{excerpt}</p>
      <div className="flex justify-between items-center">
        <div className="w-8 h-8">
          {/* Moon phase visualization would go here */}
          <div 
            className="w-8 h-8 rounded-full bg-moon-silver"
            style={{
              boxShadow: '0 0 10px rgba(216, 216, 246, 0.3)'
            }}
          ></div>
        </div>
        <span className="text-xs text-celestial-blue">Read more</span>
      </div>
    </div>
  );
};
