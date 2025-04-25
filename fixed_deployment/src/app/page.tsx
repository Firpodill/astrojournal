import { SEO } from '../components/SEO';
import { FortuneCookie } from '../components/FortuneCookie';
import { StarField } from '../components/StarField';
import { GlassPanel } from '../components/GlassPanel';
import { EtherealButton } from '../components/EtherealButton';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <SEO 
        title="AstroJournal - Your Cosmic Daily Journal & Astrology Tracker"
        description="Discover the perfect astrology journal app for tracking your daily journey alongside moon phases, zodiac insights, and cosmic guidance. Start your spiritual self-reflection today."
        keywords={[
          'astrology journal app',
          'daily astrology journal',
          'moon phase tracker',
          'zodiac journal',
          'cosmic diary',
          'spiritual journal',
          'daily horoscope journal',
          'astrology tracking',
          'moon cycle journal',
          'celestial journaling'
        ]}
      />
      
      <main className="min-h-screen">
        {/* Animated star background */}
        <StarField starCount={200} />
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-12 px-4 md:pt-32 md:pb-24">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-starlight mb-6 tracking-tight">
              Your <span className="text-nebula-pink">Cosmic</span> Journey Awaits
            </h1>
            <p className="text-xl md:text-2xl text-moon-silver max-w-3xl mx-auto mb-10">
              Track your daily reflections alongside moon phases, astrological insights, and cosmic guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth">
                <EtherealButton variant="primary" size="lg">
                  Begin Your Journey
                </EtherealButton>
              </Link>
              <Link href="/astrology">
                <EtherealButton variant="secondary" size="lg">
                  Explore Cosmic Insights
                </EtherealButton>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-starlight mb-12 text-center">
              Celestial Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <GlassPanel className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 mx-auto bg-cosmic-purple bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nebula-pink">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-starlight mb-2">Moon Phase Tracking</h3>
                  <p className="text-moon-silver">Follow the lunar cycle and understand how it influences your daily energy and emotions.</p>
                </div>
              </GlassPanel>
              
              <GlassPanel className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 mx-auto bg-cosmic-purple bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-celestial-blue">
                      <path d="M12 20h9"></path>
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-starlight mb-2">Daily Journaling</h3>
                  <p className="text-moon-silver">Record your thoughts, experiences, and insights with our beautiful cosmic journal interface.</p>
                </div>
              </GlassPanel>
              
              <GlassPanel className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 mx-auto bg-cosmic-purple bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nebula-pink">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-starlight mb-2">Astrological Insights</h3>
                  <p className="text-moon-silver">Receive personalized cosmic guidance based on planetary positions and zodiac influences.</p>
                </div>
              </GlassPanel>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <GlassPanel className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 mx-auto bg-cosmic-purple bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-celestial-blue">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-starlight mb-2">Mood Tracking</h3>
                  <p className="text-moon-silver">Track your emotional states with beautiful cosmic stickers and see patterns related to astrological events.</p>
                </div>
              </GlassPanel>
              
              <GlassPanel className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 mx-auto bg-cosmic-purple bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nebula-pink">
                      <polygon points="23 7 16 12 23 17 23 7"></polygon>
                      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-starlight mb-2">Surreal Video Compilations</h3>
                  <p className="text-moon-silver">Transform your journal entries, photos, and music into magical video summaries of your cosmic journey.</p>
                </div>
              </GlassPanel>
            </div>
          </div>
        </section>
        
        {/* Fortune Cookie Section */}
        <section className="py-16 px-4 relative">
          <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-bold text-starlight mb-8 text-center">
              Daily Cosmic Fortune
            </h2>
            <FortuneCookie />
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-starlight mb-12 text-center">
              Cosmic Journalers Say
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <GlassPanel>
                <div className="flex flex-col h-full">
                  <div className="text-celestial-blue text-4xl mb-4">"</div>
                  <p className="text-moon-silver mb-6 flex-grow">AstroJournal has transformed my daily reflection practice. The moon phase tracking helps me understand my emotional patterns in a whole new way.</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-cosmic-purple bg-opacity-30 flex items-center justify-center mr-3">
                      <span className="text-nebula-pink">S</span>
                    </div>
                    <div>
                      <p className="text-starlight font-medium">Sarah K.</p>
                      <p className="text-xs text-moon-silver">Libra</p>
                    </div>
                  </div>
                </div>
              </GlassPanel>
              
              <GlassPanel>
                <div className="flex flex-col h-full">
                  <div className="text-celestial-blue text-4xl mb-4">"</div>
                  <p className="text-moon-silver mb-6 flex-grow">I love how the journal connects my daily experiences with cosmic events. The surreal video compilations are magical and help me see patterns in my journey.</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-cosmic-purple bg-opacity-30 flex items-center justify-center mr-3">
                      <span className="text-nebula-pink">M</span>
                    </div>
                    <div>
                      <p className="text-starlight font-medium">Michael T.</p>
                      <p className="text-xs text-moon-silver">Scorpio</p>
                    </div>
                  </div>
                </div>
              </GlassPanel>
              
              <GlassPanel>
                <div className="flex flex-col h-full">
                  <div className="text-celestial-blue text-4xl mb-4">"</div>
                  <p className="text-moon-silver mb-6 flex-grow">The astrological insights are spot-on and have helped me navigate challenging times. This is more than a journal—it's a spiritual companion.</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-cosmic-purple bg-opacity-30 flex items-center justify-center mr-3">
                      <span className="text-nebula-pink">J</span>
                    </div>
                    <div>
                      <p className="text-starlight font-medium">Jamie L.</p>
                      <p className="text-xs text-moon-silver">Pisces</p>
                    </div>
                  </div>
                </div>
              </GlassPanel>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-starlight mb-6">
              Begin Your Cosmic Journey Today
            </h2>
            <p className="text-xl text-moon-silver max-w-2xl mx-auto mb-10">
              Join thousands of cosmic journalers tracking their daily experiences alongside the celestial rhythms.
            </p>
            <Link href="/auth">
              <EtherealButton variant="primary" size="lg">
                Create Your Journal
              </EtherealButton>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
