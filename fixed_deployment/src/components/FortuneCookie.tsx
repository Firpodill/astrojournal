import React, { useState, useEffect } from 'react';

interface FortuneCookieProps {
  messages?: string[];
}

export const FortuneCookie: React.FC<FortuneCookieProps> = ({ 
  messages = [
    "The cosmos aligns to illuminate your true path; trust the journey even when stars seem distant.",
    "Within the vastness of the universe, your unique light has purpose and profound meaning.",
    "As the moon cycles through phases, remember that change is the only constant in your spiritual evolution.",
    "The wisdom of ancient celestial bodies flows through you; you are more connected than you realize.",
    "Your consciousness is a reflection of the stars—infinite, expansive, and filled with possibility.",
    "The universe conspires to fulfill your deepest purpose when you align with your authentic truth.",
    "Like distant galaxies, your dreams may seem far away, yet they are already unfolding in cosmic time.",
    "The same elements that form stars flow through your veins; you are literally made of stardust and magic.",
    "In moments of darkness, remember that stars can only be seen when we embrace the night.",
    "Your journey is written in the stars, but you hold the pen that interprets their meaning.",
    "The universe speaks in synchronicities; pay attention to the cosmic whispers guiding you home.",
    "As planets orbit in perfect harmony, trust that all elements of your life are finding their balance.",
    "Your thoughts create ripples across the cosmos; choose those that elevate your spiritual vibration.",
    "The most profound wisdom often emerges from the quiet spaces between celestial movements.",
    "Like the phoenix constellation, you have the power to rise renewed from any challenge you face."
  ]
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [stars, setStars] = useState<{id: number, tx: number, ty: number}[]>([]);

  const openCookie = () => {
    if (!isOpen) {
      setIsOpen(true);
      setMessage(messages[Math.floor(Math.random() * messages.length)]);
      
      // Create stars animation
      const newStars = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        tx: (Math.random() - 0.5) * 200,
        ty: (Math.random() - 0.5) * 200
      }));
      setStars(newStars);
      
      // Reset after animation
      setTimeout(() => {
        setIsOpen(false);
        setStars([]);
      }, 8000);
    }
  };

  return (
    <div className="glass p-8 rounded-cosmic flex flex-col items-center">
      <div className="fortune-cookie" onClick={openCookie}>
        {!isOpen ? (
          <div className="fortune-cookie-closed"></div>
        ) : (
          <div className="fortune-cookie-open">
            <div className="fortune-cookie-half fortune-cookie-top"></div>
            <div className="fortune-paper">{message}</div>
            <div className="fortune-cookie-half fortune-cookie-bottom"></div>
            <div className="fortune-stars">
              {stars.map((star) => (
                <div 
                  key={star.id}
                  className="fortune-star animate"
                  style={{
                    '--tx': `${star.tx}px`,
                    '--ty': `${star.ty}px`,
                    left: '50%',
                    top: '50%',
                    animationDelay: `${star.id * 0.1}s`
                  } as React.CSSProperties}
                ></div>
              ))}
            </div>
          </div>
        )}
      </div>
      <p className="mt-4 text-center text-moon-silver">
        {!isOpen ? "Click the cookie to reveal your cosmic wisdom" : "✨ Cosmic wisdom revealed ✨"}
      </p>
    </div>
  );
};
