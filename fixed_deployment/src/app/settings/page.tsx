import React from 'react';
import { StarField } from '../../components/StarField';
import { GlassPanel } from '../../components/GlassPanel';
import { EtherealButton } from '../../components/EtherealButton';

export default function SettingsPage() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      {/* Animated star background */}
      <StarField starCount={150} />
      
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-starlight mb-2">Settings</h1>
        <p className="text-moon-silver">Customize your cosmic journal experience</p>
      </header>
      
      {/* Main content */}
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Account Settings */}
        <section>
          <h2 className="text-2xl font-semibold text-starlight mb-4">Account</h2>
          <GlassPanel>
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm text-moon-silver mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  value="user@example.com"
                  className="w-full bg-deep-space bg-opacity-50 border border-cosmic-purple border-opacity-30 rounded-cosmic p-2 text-starlight"
                  readOnly
                />
              </div>
              
              <div>
                <label htmlFor="username" className="block text-sm text-moon-silver mb-1">Username</label>
                <input
                  id="username"
                  type="text"
                  value="cosmic_journaler"
                  className="w-full bg-deep-space bg-opacity-50 border border-cosmic-purple border-opacity-30 rounded-cosmic p-2 text-starlight"
                />
              </div>
              
              <div className="flex justify-end">
                <EtherealButton variant="primary">Save Changes</EtherealButton>
              </div>
            </div>
          </GlassPanel>
        </section>
        
        {/* Privacy Settings */}
        <section>
          <h2 className="text-2xl font-semibold text-starlight mb-4">Privacy</h2>
          <GlassPanel>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-starlight">Password Protection</h3>
                  <p className="text-sm text-moon-silver">Require password to access your journal</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked />
                  <div className="w-11 h-6 bg-deep-space peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cosmic-purple"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-starlight">Data Encryption</h3>
                  <p className="text-sm text-moon-silver">Encrypt your journal entries for added security</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked />
                  <div className="w-11 h-6 bg-deep-space peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cosmic-purple"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-starlight">Auto-Lock</h3>
                  <p className="text-sm text-moon-silver">Automatically lock your journal when inactive</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-deep-space peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cosmic-purple"></div>
                </label>
              </div>
              
              <div className="pt-4">
                <EtherealButton variant="secondary">Change Password</EtherealButton>
              </div>
            </div>
          </GlassPanel>
        </section>
        
        {/* Sync Settings */}
        <section>
          <h2 className="text-2xl font-semibold text-starlight mb-4">Cloud Sync</h2>
          <GlassPanel>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-starlight">Enable Cloud Sync</h3>
                  <p className="text-sm text-moon-silver">Sync your journal across multiple devices</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked />
                  <div className="w-11 h-6 bg-deep-space peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cosmic-purple"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-starlight">Auto Sync</h3>
                  <p className="text-sm text-moon-silver">Automatically sync changes in real-time</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked />
                  <div className="w-11 h-6 bg-deep-space peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cosmic-purple"></div>
                </label>
              </div>
              
              <div className="pt-4 flex gap-3">
                <EtherealButton variant="primary">Sync Now</EtherealButton>
                <EtherealButton variant="secondary">Sync History</EtherealButton>
              </div>
              
              <div className="text-xs text-celestial-blue mt-2">
                Last synced: Today at 11:42 AM
              </div>
            </div>
          </GlassPanel>
        </section>
        
        {/* Appearance Settings */}
        <section>
          <h2 className="text-2xl font-semibold text-starlight mb-4">Appearance</h2>
          <GlassPanel>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-starlight mb-3">Theme Intensity</h3>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value="70"
                  className="w-full h-2 bg-deep-space rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-moon-silver mt-1">
                  <span>Subtle</span>
                  <span>Intense</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-starlight mb-3">Star Animation</h3>
                <div className="flex gap-3">
                  <button className="px-3 py-1 rounded-full bg-cosmic-purple text-starlight text-sm">Enabled</button>
                  <button className="px-3 py-1 rounded-full bg-deep-space border border-cosmic-purple border-opacity-30 text-moon-silver text-sm">Disabled</button>
                </div>
              </div>
              
              <div className="flex justify-end">
                <EtherealButton variant="primary">Save Preferences</EtherealButton>
              </div>
            </div>
          </GlassPanel>
        </section>
      </div>
    </main>
  );
}
