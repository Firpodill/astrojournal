import React from 'react';
import { StarField } from '../../components/StarField';
import { AuthForm } from '../../components/AuthForm';

export default function AuthPage() {
  const [authMode, setAuthMode] = React.useState<'login' | 'register'>('login');
  
  const toggleAuthMode = () => {
    setAuthMode(authMode === 'login' ? 'register' : 'login');
  };

  return (
    <main className="min-h-screen p-4 md:p-8 flex items-center justify-center">
      {/* Animated star background */}
      <StarField starCount={150} />
      
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-starlight mb-2">Astrology Journal</h1>
          <p className="text-moon-silver">Your cosmic journey awaits</p>
        </div>
        
        <AuthForm 
          mode={authMode} 
          onModeChange={toggleAuthMode} 
        />
      </div>
    </main>
  );
}
