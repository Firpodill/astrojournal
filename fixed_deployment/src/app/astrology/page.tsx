import React from 'react';
import { StarField } from '../../components/StarField';
import { GlassPanel } from '../../components/GlassPanel';
import { MoonPhase } from '../../components/MoonPhase';

export default function AstrologyPage() {
  // Sample data for demonstration
  const moonPhases = [
    { phase: 0, name: 'New Moon', date: 'April 20, 2025', sign: 'Aries' },
    { phase: 0.25, name: 'First Quarter', date: 'April 27, 2025', sign: 'Cancer' },
    { phase: 0.5, name: 'Full Moon', date: 'May 5, 2025', sign: 'Scorpio' },
    { phase: 0.75, name: 'Last Quarter', date: 'May 12, 2025', sign: 'Aquarius' },
  ];

  const zodiacSigns = [
    { name: 'Aries', element: 'Fire', ruling: 'Mars', dates: 'March 21 - April 19' },
    { name: 'Taurus', element: 'Earth', ruling: 'Venus', dates: 'April 20 - May 20' },
    { name: 'Gemini', element: 'Air', ruling: 'Mercury', dates: 'May 21 - June 20' },
    { name: 'Cancer', element: 'Water', ruling: 'Moon', dates: 'June 21 - July 22' },
    { name: 'Leo', element: 'Fire', ruling: 'Sun', dates: 'July 23 - August 22' },
    { name: 'Virgo', element: 'Earth', ruling: 'Mercury', dates: 'August 23 - September 22' },
    { name: 'Libra', element: 'Air', ruling: 'Venus', dates: 'September 23 - October 22' },
    { name: 'Scorpio', element: 'Water', ruling: 'Pluto', dates: 'October 23 - November 21' },
    { name: 'Sagittarius', element: 'Fire', ruling: 'Jupiter', dates: 'November 22 - December 21' },
    { name: 'Capricorn', element: 'Earth', ruling: 'Saturn', dates: 'December 22 - January 19' },
    { name: 'Aquarius', element: 'Air', ruling: 'Uranus', dates: 'January 20 - February 18' },
    { name: 'Pisces', element: 'Water', ruling: 'Neptune', dates: 'February 19 - March 20' },
  ];

  return (
    <main className="min-h-screen p-4 md:p-8">
      {/* Animated star background */}
      <StarField starCount={150} />
      
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-starlight mb-2">Cosmic Guide</h1>
        <p className="text-moon-silver">Explore the celestial influences on your journal</p>
      </header>
      
      {/* Main content */}
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Moon Phases Section */}
        <section>
          <h2 className="text-2xl font-semibold text-starlight mb-4">Moon Phases Calendar</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {moonPhases.map((moon, index) => (
              <GlassPanel key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <MoonPhase phase={moon.phase} size={60} />
                </div>
                <h3 className="text-lg font-medium text-starlight">{moon.name}</h3>
                <p className="text-nebula-pink">{moon.sign}</p>
                <p className="text-sm text-moon-silver">{moon.date}</p>
              </GlassPanel>
            ))}
          </div>
        </section>
        
        {/* Current Cosmic Weather */}
        <section>
          <h2 className="text-2xl font-semibold text-starlight mb-4">Current Cosmic Weather</h2>
          <GlassPanel className="ethereal-glow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-medium text-starlight mb-2">Moon</h3>
                <p className="text-nebula-pink">Waxing Crescent in Taurus</p>
                <p className="text-moon-silver mt-1">Grounding energy, focus on stability and material comfort</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-starlight mb-2">Sun</h3>
                <p className="text-nebula-pink">In Taurus</p>
                <p className="text-moon-silver mt-1">Steady, persistent energy focused on building and creating</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-starlight mb-2">Mercury</h3>
                <p className="text-nebula-pink">In Aries</p>
                <p className="text-moon-silver mt-1">Quick thinking, direct communication, innovative ideas</p>
              </div>
            </div>
          </GlassPanel>
        </section>
        
        {/* Zodiac Signs */}
        <section>
          <h2 className="text-2xl font-semibold text-starlight mb-4">Zodiac Signs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {zodiacSigns.map((sign, index) => (
              <GlassPanel key={index}>
                <h3 className="text-lg font-medium text-starlight">{sign.name}</h3>
                <p className="text-xs text-celestial-blue mb-2">{sign.dates}</p>
                <div className="flex items-center text-sm text-moon-silver mb-1">
                  <span className="w-20">Element:</span>
                  <span className="text-nebula-pink">{sign.element}</span>
                </div>
                <div className="flex items-center text-sm text-moon-silver">
                  <span className="w-20">Ruling Planet:</span>
                  <span className="text-nebula-pink">{sign.ruling}</span>
                </div>
              </GlassPanel>
            ))}
          </div>
        </section>
        
        {/* Astrological Journal Tips */}
        <section>
          <h2 className="text-2xl font-semibold text-starlight mb-4">Astrological Journal Tips</h2>
          <GlassPanel>
            <ul className="space-y-3 text-moon-silver">
              <li className="flex items-start">
                <span className="text-nebula-pink mr-2">✧</span>
                <span>During <strong className="text-starlight">New Moons</strong>, focus your journal entries on setting intentions and beginning new projects.</span>
              </li>
              <li className="flex items-start">
                <span className="text-nebula-pink mr-2">✧</span>
                <span>Use <strong className="text-starlight">Full Moons</strong> for reflection, completion, and releasing what no longer serves you.</span>
              </li>
              <li className="flex items-start">
                <span className="text-nebula-pink mr-2">✧</span>
                <span>Pay attention to which <strong className="text-starlight">zodiac sign</strong> the moon is in, as it influences the emotional tone of your day.</span>
              </li>
              <li className="flex items-start">
                <span className="text-nebula-pink mr-2">✧</span>
                <span>During <strong className="text-starlight">Mercury retrograde</strong>, use your journal to revise, review, and reconsider past decisions.</span>
              </li>
              <li className="flex items-start">
                <span className="text-nebula-pink mr-2">✧</span>
                <span>Track your mood alongside lunar phases to discover personal patterns and cycles.</span>
              </li>
            </ul>
          </GlassPanel>
        </section>
      </div>
    </main>
  );
}
