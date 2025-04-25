import { ReactNode } from 'react';
import { AuthProvider } from './AuthContext';
import { DatabaseProvider } from './DatabaseContext';
import { AnalyticsProvider } from './AnalyticsContext';

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <AuthProvider>
      <DatabaseProvider>
        <AnalyticsProvider>
          {children}
        </AnalyticsProvider>
      </DatabaseProvider>
    </AuthProvider>
  );
};
