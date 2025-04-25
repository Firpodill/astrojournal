import React from 'react';
import { StarField } from '../../../components/StarField';
import { GlassPanel } from '../../../components/GlassPanel';
import { EtherealButton } from '../../../components/EtherealButton';
import { MoonPhase } from '../../../components/MoonPhase';

export default function NewJournalEntryPage() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      {/* Animated star background */}
      <StarField starCount={150} />
      
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-starlight mb-2">New Journal Entry</h1>
        <p className="text-moon-silver">Record your cosmic journey</p>
      </header>
      
      {/* Main content */}
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Date and Moon Phase */}
        <section className="flex flex-col md:flex-row gap-6 items-center">
          <GlassPanel className="w-full md:w-2/3">
            <div className="space-y-4">
              <div>
                <label htmlFor="date" className="block text-sm text-moon-silver mb-1">Date</label>
                <input
                  id="date"
                  type="date"
                  defaultValue={new Date().toISOString().split('T')[0]}
                  className="w-full bg-deep-space bg-opacity-50 border border-cosmic-purple border-opacity-30 rounded-cosmic p-2 text-starlight"
                />
              </div>
              
              <div>
                <label htmlFor="title" className="block text-sm text-moon-silver mb-1">Title</label>
                <input
                  id="title"
                  type="text"
                  placeholder="Give your entry a title"
                  className="w-full bg-deep-space bg-opacity-50 border border-cosmic-purple border-opacity-30 rounded-cosmic p-2 text-starlight"
                />
              </div>
            </div>
          </GlassPanel>
          
          <div className="w-full md:w-1/3">
            <MoonPhase phase={0.25} size={120} />
            <p className="text-center text-moon-silver mt-2">Waxing Crescent</p>
            <p className="text-center text-xs text-celestial-blue">Moon in Gemini</p>
          </div>
        </section>
        
        {/* Journal Content */}
        <section>
          <GlassPanel>
            <div className="space-y-4">
              <div>
                <label htmlFor="content" className="block text-sm text-moon-silver mb-1">Journal Entry</label>
                <textarea
                  id="content"
                  rows={10}
                  placeholder="Write about your day, thoughts, feelings, and cosmic insights..."
                  className="w-full bg-deep-space bg-opacity-50 border border-cosmic-purple border-opacity-30 rounded-cosmic p-2 text-starlight"
                ></textarea>
              </div>
              
              <div className="flex justify-between">
                <button className="flex items-center text-nebula-pink hover:text-celestial-blue transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <path d="M12 18v-6"></path>
                    <path d="M8 18v-1"></path>
                    <path d="M16 18v-3"></path>
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <path d="M16 8V4"></path>
                    <path d="M8 8V4"></path>
                    <path d="M3 10h18"></path>
                  </svg>
                  Voice to Text
                </button>
                
                <div className="flex gap-2">
                  <button className="text-moon-silver hover:text-celestial-blue transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                  </button>
                  <button className="text-moon-silver hover:text-celestial-blue transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18V5l12-2v13"></path>
                      <circle cx="6" cy="18" r="3"></circle>
                      <circle cx="18" cy="16" r="3"></circle>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </GlassPanel>
        </section>
        
        {/* Mood Selection */}
        <section>
          <h2 className="text-xl font-semibold text-starlight mb-4">How are you feeling today?</h2>
          <GlassPanel>
            <div className="grid grid-cols-5 gap-4">
              {['Happy', 'Calm', 'Inspired', 'Anxious', 'Tired'].map((mood, index) => (
                <button key={index} className="flex flex-col items-center p-3 rounded-cosmic hover:bg-cosmic-purple hover:bg-opacity-20 transition-all">
                  <div className="w-10 h-10 rounded-full bg-cosmic-purple bg-opacity-20 flex items-center justify-center mb-2">
                    {index === 0 && <span className="text-xl">😊</span>}
                    {index === 1 && <span className="text-xl">😌</span>}
                    {index === 2 && <span className="text-xl">✨</span>}
                    {index === 3 && <span className="text-xl">😰</span>}
                    {index === 4 && <span className="text-xl">😴</span>}
                  </div>
                  <span className="text-xs text-moon-silver">{mood}</span>
                </button>
              ))}
            </div>
          </GlassPanel>
        </section>
        
        {/* Tags */}
        <section>
          <GlassPanel>
            <div>
              <label htmlFor="tags" className="block text-sm text-moon-silver mb-1">Tags</label>
              <input
                id="tags"
                type="text"
                placeholder="Add tags separated by commas (e.g., meditation, full moon, dreams)"
                className="w-full bg-deep-space bg-opacity-50 border border-cosmic-purple border-opacity-30 rounded-cosmic p-2 text-starlight"
              />
            </div>
          </GlassPanel>
        </section>
        
        {/* Action Buttons */}
        <section className="flex justify-end gap-4">
          <EtherealButton variant="secondary">Save Draft</EtherealButton>
          <EtherealButton variant="primary">Save Entry</EtherealButton>
        </section>
      </div>
    </main>
  );
}
