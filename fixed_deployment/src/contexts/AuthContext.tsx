import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the shape of the user object
interface User {
  id: string;
  username: string;
  email: string;
}

// Define the shape of the auth context
interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  error: string | null;
}

// Create the auth context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  login: async () => {},
  register: async () => {},
  logout: async () => {},
  error: null
});

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Check if user is logged in on initial load
  useEffect(() => {
    // This would normally check with a backend service
    // For now, we'll check localStorage as a simple example
    const checkAuth = async () => {
      try {
        const storedUser = localStorage.getItem('astrojournal_user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (err) {
        console.error('Authentication error:', err);
        setError('Failed to authenticate');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // This would normally call a backend API
      // For demonstration, we'll simulate a successful login
      const mockUser = {
        id: 'user-123',
        username: email.split('@')[0],
        email
      };
      
      // Store user in localStorage for persistence
      localStorage.setItem('astrojournal_user', JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (err) {
      console.error('Login error:', err);
      setError('Failed to login');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Register function
  const register = async (username: string, email: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // This would normally call a backend API
      // For demonstration, we'll simulate a successful registration
      const mockUser = {
        id: 'user-' + Date.now(),
        username,
        email
      };
      
      // Store user in localStorage for persistence
      localStorage.setItem('astrojournal_user', JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (err) {
      console.error('Registration error:', err);
      setError('Failed to register');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    setLoading(true);
    
    try {
      // Remove user from localStorage
      localStorage.removeItem('astrojournal_user');
      setUser(null);
    } catch (err) {
      console.error('Logout error:', err);
      setError('Failed to logout');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};
