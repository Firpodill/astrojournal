import React, { useEffect, useState } from 'react';

interface StarFieldProps {
  starCount?: number;
  includeConstellations?: boolean;
  includePlanets?: boolean;
}

export const StarField: React.FC<StarFieldProps> = ({
  starCount = 100,
  includeConstellations = true,
  includePlanets = true
}) => {
  const [stars, setStars] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    twinkle: boolean;
    delay: number;
  }>>([]);
  
  const [constellations, setConstellations] = useState<Array<{
    id: number;
    lines: Array<{
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      length: number;
      angle: number;
    }>;
  }>>([]);
  
  const [planets, setPlanets] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    type: string;
  }>>([]);

  useEffect(() => {
    // Generate stars
    const newStars = Array.from({ length: starCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      twinkle: Math.random() > 0.7,
      delay: Math.random() * 4
    }));
    setStars(newStars);
    
    // Generate constellations if enabled
    if (includeConstellations) {
      const constellationCount = Math.floor(Math.random() * 3) + 2;
      const newConstellations = Array.from({ length: constellationCount }, (_, i) => {
        const centerX = Math.random() * 80 + 10;
        const centerY = Math.random() * 80 + 10;
        const pointCount = Math.floor(Math.random() * 4) + 3;
        
        // Generate points around center
        const points = Array.from({ length: pointCount }, (_, j) => ({
          x: centerX + (Math.random() - 0.5) * 20,
          y: centerY + (Math.random() - 0.5) * 20
        }));
        
        // Connect points with lines
        const lines = [];
        for (let j = 0; j < points.length - 1; j++) {
          const x1 = points[j].x;
          const y1 = points[j].y;
          const x2 = points[j + 1].x;
          const y2 = points[j + 1].y;
          
          // Calculate length and angle for transform
          const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
          const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
          
          lines.push({ x1, y1, x2, y2, length, angle });
        }
        
        return { id: i, lines };
      });
      
      setConstellations(newConstellations);
    }
    
    // Generate planets if enabled
    if (includePlanets) {
      const planetTypes = ['jupiter', 'saturn', 'neptune'];
      const planetCount = Math.min(3, Math.floor(Math.random() * 2) + 1);
      
      const newPlanets = Array.from({ length: planetCount }, (_, i) => ({
        id: i,
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
        size: Math.random() * 20 + 30,
        type: planetTypes[i % planetTypes.length]
      }));
      
      setPlanets(newPlanets);
    }
  }, [starCount, includeConstellations, includePlanets]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className={`star ${star.twinkle ? 'twinkle' : ''}`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            '--delay': star.delay
          } as React.CSSProperties}
        />
      ))}
      
      {/* Constellations */}
      {includeConstellations && constellations.map((constellation) => (
        <React.Fragment key={constellation.id}>
          {constellation.lines.map((line, i) => (
            <div
              key={`line-${constellation.id}-${i}`}
              className="constellation-line"
              style={{
                left: `${line.x1}%`,
                top: `${line.y1}%`,
                width: `${line.length}px`,
                transform: `rotate(${line.angle}deg)`
              }}
            />
          ))}
        </React.Fragment>
      ))}
      
      {/* Planets */}
      {includePlanets && planets.map((planet) => (
        <div
          key={planet.id}
          className={`planet planet-${planet.type}`}
          style={{
            left: `${planet.x}%`,
            top: `${planet.y}%`,
            width: `${planet.size}px`,
            height: `${planet.size}px`
          }}
        />
      ))}
    </div>
  );
};
