import React from 'react';
import { StarField } from '../../components/StarField';
import { GlassPanel } from '../../components/GlassPanel';
import { EtherealButton } from '../../components/EtherealButton';

export default function MediaGalleryPage() {
  // Sample data for demonstration
  const mediaItems = [
    { type: 'image', date: 'April 24, 2025', title: 'Sunset Meditation', thumbnail: '/placeholder-image.jpg' },
    { type: 'audio', date: 'April 23, 2025', title: 'Evening Ambient Sounds', duration: '3:42' },
    { type: 'image', date: 'April 22, 2025', title: 'Morning Sky', thumbnail: '/placeholder-image.jpg' },
    { type: 'video', date: 'April 21, 2025', title: 'Daily Reflection', duration: '1:15' },
    { type: 'image', date: 'April 20, 2025', title: 'Full Moon Night', thumbnail: '/placeholder-image.jpg' },
    { type: 'audio', date: 'April 19, 2025', title: 'Relaxation Music', duration: '5:30' },
  ];

  return (
    <main className="min-h-screen p-4 md:p-8">
      {/* Animated star background */}
      <StarField starCount={150} />
      
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-starlight mb-2">Media Gallery</h1>
        <p className="text-moon-silver">Your collection of cosmic memories</p>
      </header>
      
      {/* Main content */}
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Media Filters */}
        <section>
          <GlassPanel>
            <div className="flex flex-wrap gap-4 justify-between items-center">
              <div className="flex gap-2">
                <button className="text-sm px-3 py-1 rounded-full bg-cosmic-purple text-starlight">All</button>
                <button className="text-sm px-3 py-1 rounded-full bg-cosmic-purple bg-opacity-30 text-starlight hover:bg-opacity-50">Images</button>
                <button className="text-sm px-3 py-1 rounded-full bg-cosmic-purple bg-opacity-30 text-starlight hover:bg-opacity-50">Audio</button>
                <button className="text-sm px-3 py-1 rounded-full bg-cosmic-purple bg-opacity-30 text-starlight hover:bg-opacity-50">Videos</button>
              </div>
              <div>
                <EtherealButton variant="secondary" size="sm">
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="17 8 12 3 7 8"></polyline>
                      <line x1="12" y1="3" x2="12" y2="15"></line>
                    </svg>
                    Add New Media
                  </span>
                </EtherealButton>
              </div>
            </div>
          </GlassPanel>
        </section>
        
        {/* Media Grid */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {mediaItems.map((item, index) => (
              <GlassPanel key={index} className="hover:shadow-ethereal transition-all duration-300 cursor-pointer">
                <div className="relative aspect-square mb-3 bg-deep-space rounded-cosmic overflow-hidden">
                  {item.type === 'image' && (
                    <div className="w-full h-full bg-cosmic-purple bg-opacity-20 flex items-center justify-center">
                      <span className="text-5xl text-nebula-pink opacity-50">✧</span>
                    </div>
                  )}
                  {item.type === 'audio' && (
                    <div className="w-full h-full bg-celestial-blue bg-opacity-20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-celestial-blue opacity-50">
                        <path d="M9 18V5l12-2v13"></path>
                        <circle cx="6" cy="18" r="3"></circle>
                        <circle cx="18" cy="16" r="3"></circle>
                      </svg>
                    </div>
                  )}
                  {item.type === 'video' && (
                    <div className="w-full h-full bg-nebula-pink bg-opacity-20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-nebula-pink opacity-50">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  )}
                  {(item.type === 'audio' || item.type === 'video') && (
                    <div className="absolute bottom-2 right-2 text-xs text-starlight bg-deep-space bg-opacity-70 px-2 py-1 rounded-full">
                      {item.duration}
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-medium text-starlight">{item.title}</h3>
                <p className="text-sm text-moon-silver">{item.date}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-celestial-blue capitalize">{item.type}</span>
                  <button className="text-nebula-pink">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </button>
                </div>
              </GlassPanel>
            ))}
          </div>
        </section>
        
        {/* Video Compilation Section */}
        <section>
          <h2 className="text-2xl font-semibold text-starlight mb-4">Surreal Video Compilations</h2>
          <GlassPanel className="ethereal-glow">
            <p className="text-moon-silver mb-4">Transform your daily journal entries, photos, and music into surreal video compilations that capture the essence of your cosmic journey.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-video bg-deep-space rounded-cosmic overflow-hidden flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-nebula-pink opacity-50">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-starlight mb-2">April Full Moon Reflection</h3>
                <p className="text-sm text-moon-silver mb-4">A surreal compilation of your journal entries, photos, and music from the April full moon period.</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-celestial-blue">Created on April 20, 2025</span>
                    <span className="text-moon-silver">Duration: 1:45</span>
                  </div>
                  <EtherealButton variant="primary" size="sm" className="w-full">
                    <span className="flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                      Play Compilation
                    </span>
                  </EtherealButton>
                  <EtherealButton variant="secondary" size="sm" className="w-full">
                    <span className="flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                      Download
                    </span>
                  </EtherealButton>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <EtherealButton variant="accent">Create New Video Compilation</EtherealButton>
            </div>
          </GlassPanel>
        </section>
      </div>
    </main>
  );
}
