import { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of analytics data
interface PageView {
  page: string;
  timestamp: string;
  userId?: string;
  sessionId: string;
}

interface UserEvent {
  type: string;
  page: string;
  element?: string;
  timestamp: string;
  userId?: string;
  sessionId: string;
  metadata?: Record<string, any>;
}

interface AnalyticsData {
  pageViews: PageView[];
  events: UserEvent[];
}

// Define the shape of the analytics context
interface AnalyticsContextType {
  trackPageView: (page: string) => void;
  trackEvent: (type: string, element?: string, metadata?: Record<string, any>) => void;
  getAnalyticsData: () => AnalyticsData;
  clearAnalyticsData: () => void;
}

// Create the analytics context with default values
const AnalyticsContext = createContext<AnalyticsContextType>({
  trackPageView: () => {},
  trackEvent: () => {},
  getAnalyticsData: () => ({ pageViews: [], events: [] }),
  clearAnalyticsData: () => {}
});

// Custom hook to use the analytics context
export const useAnalytics = () => useContext(AnalyticsContext);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => {
  const [pageViews, setPageViews] = useState<PageView[]>([]);
  const [events, setEvents] = useState<UserEvent[]>([]);
  
  // Generate a session ID if one doesn't exist
  const getSessionId = (): string => {
    let sessionId = localStorage.getItem('astrojournal_session_id');
    if (!sessionId) {
      sessionId = `session-${Date.now()}`;
      localStorage.setItem('astrojournal_session_id', sessionId);
    }
    return sessionId;
  };
  
  // Get the current user ID if available
  const getUserId = (): string | undefined => {
    try {
      const storedUser = localStorage.getItem('astrojournal_user');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        return user.id;
      }
      return undefined;
    } catch (err) {
      console.error('Error getting user ID:', err);
      return undefined;
    }
  };

  // Track a page view
  const trackPageView = (page: string) => {
    const pageView: PageView = {
      page,
      timestamp: new Date().toISOString(),
      userId: getUserId(),
      sessionId: getSessionId()
    };
    
    // Add to local state
    setPageViews(prev => [...prev, pageView]);
    
    // In a real implementation, this would send data to a backend analytics service
    console.log('Page view tracked:', pageView);
    
    // Store in localStorage for demonstration
    const storedPageViews = JSON.parse(localStorage.getItem('astrojournal_page_views') || '[]');
    localStorage.setItem('astrojournal_page_views', JSON.stringify([...storedPageViews, pageView]));
  };

  // Track a user event
  const trackEvent = (type: string, element?: string, metadata?: Record<string, any>) => {
    const event: UserEvent = {
      type,
      page: window.location.pathname,
      element,
      timestamp: new Date().toISOString(),
      userId: getUserId(),
      sessionId: getSessionId(),
      metadata
    };
    
    // Add to local state
    setEvents(prev => [...prev, event]);
    
    // In a real implementation, this would send data to a backend analytics service
    console.log('Event tracked:', event);
    
    // Store in localStorage for demonstration
    const storedEvents = JSON.parse(localStorage.getItem('astrojournal_events') || '[]');
    localStorage.setItem('astrojournal_events', JSON.stringify([...storedEvents, event]));
  };

  // Get all analytics data
  const getAnalyticsData = (): AnalyticsData => {
    return {
      pageViews,
      events
    };
  };

  // Clear all analytics data
  const clearAnalyticsData = () => {
    setPageViews([]);
    setEvents([]);
    localStorage.removeItem('astrojournal_page_views');
    localStorage.removeItem('astrojournal_events');
  };

  return (
    <AnalyticsContext.Provider 
      value={{ 
        trackPageView, 
        trackEvent, 
        getAnalyticsData, 
        clearAnalyticsData 
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  );
};
