import React from 'react';

interface EtherealButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

export const EtherealButton: React.FC<EtherealButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
}) => {
  // Define variant styles
  const variantStyles = {
    primary: 'bg-cosmic-purple hover:bg-opacity-80 text-starlight',
    secondary: 'bg-celestial-blue hover:bg-opacity-80 text-starlight',
    accent: 'bg-nebula-pink hover:bg-opacity-80 text-starlight',
  };

  // Define size styles
  const sizeStyles = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        rounded-cosmic
        font-medium
        transition-all
        duration-300
        ethereal-glow
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
    >
      {children}
    </button>
  );
};
