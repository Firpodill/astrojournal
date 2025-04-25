import React, { useState } from 'react';
import { GlassPanel } from './GlassPanel';
import { EtherealButton } from './EtherealButton';

interface AuthFormProps {
  onLogin?: (username: string, passcode: string) => void;
  onPasscodeOnly?: (passcode: string) => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({ 
  onLogin = () => {}, 
  onPasscodeOnly = () => {} 
}) => {
  const [isPasscodeOnly, setIsPasscodeOnly] = useState(false);
  const [username, setUsername] = useState('');
  const [passcode, setPasscode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      if (isPasscodeOnly) {
        onPasscodeOnly(passcode);
      } else {
        onLogin(username, passcode);
      }
      setIsSubmitting(false);
    }, 1000);
  };

  const toggleAuthMode = () => {
    setIsPasscodeOnly(!isPasscodeOnly);
    setUsername('');
    setPasscode('');
  };

  return (
    <GlassPanel className="max-w-md mx-auto p-8">
      <div className="text-center mb-6">
        <div className="lock-icon mx-auto mb-4">
          <div className="lock-shackle"></div>
          <div className="lock-body">
            <div className="lock-keyhole"></div>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-starlight mb-2">
          {isPasscodeOnly ? 'Enter Passcode' : 'Cosmic Login'}
        </h2>
        <p className="text-moon-silver">
          {isPasscodeOnly 
            ? 'Access your cosmic journal with your secret passcode' 
            : 'Sign in to continue your astrological journey'}
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {!isPasscodeOnly && (
          <div>
            <label htmlFor="username" className="block text-sm text-moon-silver mb-1">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-cosmic w-full"
              placeholder="Enter your username"
              required={!isPasscodeOnly}
            />
          </div>
        )}
        
        <div>
          <label htmlFor="passcode" className="block text-sm text-moon-silver mb-1">Passcode</label>
          <input
            id="passcode"
            type="password"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            className="input-cosmic w-full"
            placeholder="Enter your passcode"
            required
          />
        </div>
        
        <div className="pt-2">
          <EtherealButton 
            type="submit" 
            variant="primary" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Connecting to the cosmos...' : 'Continue Journey'}
          </EtherealButton>
        </div>
      </form>
      
      <div className="mt-6 text-center">
        <button 
          onClick={toggleAuthMode}
          className="text-celestial-blue hover:text-nebula-pink transition-colors text-sm"
        >
          {isPasscodeOnly 
            ? 'Use username and passcode instead' 
            : 'Use passcode only'}
        </button>
      </div>
    </GlassPanel>
  );
};
