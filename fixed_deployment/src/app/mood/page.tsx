import React from 'react';
import { StarField } from '../../components/StarField';
import { GlassPanel } from '../../components/GlassPanel';
import { EtherealButton } from '../../components/EtherealButton';

export default function MoodTrackingPage() {
  // Sample data for demonstration
  const moodCategories = [
    { name: 'Happy', moods: ['Joyful', 'Content', 'Excited', 'Grateful'], color: 'bg-yellow-500' },
    { name: 'Calm', moods: ['Peaceful', 'Relaxed', 'Serene', 'Tranquil'], color: 'bg-celestial-blue' },
    { name: 'Creative', moods: ['Inspired', 'Imaginative', 'Artistic', 'Innovative'], color: 'bg-nebula-pink' },
    { name: 'Reflective', moods: ['Thoughtful', 'Contemplative', 'Introspective', 'Philosophical'], color: 'bg-cosmic-purple' },
    { name: 'Energetic', moods: ['Motivated', 'Enthusiastic', 'Dynamic', 'Lively'], color: 'bg-orange-500' },
  ];

  const recentMoods = [
    { date: 'April 24, 2025', mood: 'Inspired', moonPhase: 0.3, moonSign: 'Taurus' },
    { date: 'April 23, 2025', mood: 'Peaceful', moonPhase: 0.25, moonSign: 'Taurus' },
    { date: 'April 22, 2025', mood: 'Reflective', moonPhase: 0.2, moonSign: 'Aries' },
    { date: 'April 21, 2025', mood: 'Energetic', moonPhase: 0.15, moonSign: 'Aries' },
    { date: 'April 20, 2025', mood: 'Creative', moonPhase: 0.1, moonSign: 'Pisces' },
  ];

  return (
    <main className="min-h-screen p-4 md:p-8">
      {/* Animated star background */}
      <StarField starCount={150} />
      
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-starlight mb-2">Mood Tracking</h1>
        <p className="text-moon-silver">Track your emotional journey alongside cosmic events</p>
      </header>
      
      {/* Main content */}
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Today's Mood Section */}
        <section>
          <h2 className="text-2xl font-semibold text-starlight mb-4">How are you feeling today?</h2>
          <GlassPanel className="ethereal-glow">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {moodCategories.map((category, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 rounded-full ${category.color} mx-auto mb-3 flex items-center justify-center text-2xl`}>
                    {category.name.charAt(0)}
                  </div>
                  <h3 className="text-lg font-medium text-starlight mb-2">{category.name}</h3>
                  <div className="space-y-2">
                    {category.moods.map((mood, moodIndex) => (
                      <button 
                        key={moodIndex}
                        className="w-full text-sm px-3 py-1 rounded-full bg-cosmic-purple bg-opacity-30 text-starlight hover:bg-opacity-50 transition-all"
                      >
                        {mood}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <EtherealButton variant="primary">Save Today's Mood</EtherealButton>
            </div>
          </GlassPanel>
        </section>
        
        {/* Mood History */}
        <section>
          <h2 className="text-2xl font-semibold text-starlight mb-4">Your Mood History</h2>
          <GlassPanel>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-cosmic-purple border-opacity-30">
                    <th className="text-left py-3 px-4 text-starlight">Date</th>
                    <th className="text-left py-3 px-4 text-starlight">Mood</th>
                    <th className="text-left py-3 px-4 text-starlight">Moon Phase</th>
                    <th className="text-left py-3 px-4 text-starlight">Moon Sign</th>
                  </tr>
                </thead>
                <tbody>
                  {recentMoods.map((entry, index) => (
                    <tr key={index} className="border-b border-cosmic-purple border-opacity-30">
                      <td className="py-3 px-4 text-moon-silver">{entry.date}</td>
                      <td className="py-3 px-4">
                        <span className="text-sm px-3 py-1 rounded-full bg-cosmic-purple bg-opacity-30 text-starlight">
                          {entry.mood}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-moon-silver">
                        {entry.moonPhase < 0.25 ? 'Waxing Crescent' : 
                         entry.moonPhase < 0.5 ? 'First Quarter' : 
                         entry.moonPhase < 0.75 ? 'Waxing Gibbous' : 'Full Moon'}
                      </td>
                      <td className="py-3 px-4 text-nebula-pink">{entry.moonSign}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassPanel>
        </section>
        
        {/* Mood Patterns */}
        <section>
          <h2 className="text-2xl font-semibold text-starlight mb-4">Cosmic Mood Patterns</h2>
          <GlassPanel>
            <p className="text-moon-silver mb-4">Discover how your moods correlate with lunar cycles and astrological events.</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium text-starlight mb-2">Moon Phase Influence</h3>
              <p className="text-moon-silver">Your mood tends to be more <span className="text-nebula-pink">creative and inspired</span> during <span className="text-celestial-blue">waxing crescent</span> phases.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-starlight mb-2">Zodiac Influence</h3>
              <p className="text-moon-silver">When the moon is in <span className="text-nebula-pink">Taurus</span>, you often feel more <span className="text-celestial-blue">peaceful and grounded</span>.</p>
            </div>
          </GlassPanel>
        </section>
      </div>
    </main>
  );
}
