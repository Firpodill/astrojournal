import { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of a journal entry
export interface JournalEntry {
  id: string;
  userId: string;
  date: string;
  title: string;
  content: string;
  moonPhase: number;
  moonSign: string;
  mood?: string;
  media?: {
    type: 'image' | 'audio' | 'video';
    url: string;
    thumbnail?: string;
  }[];
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}

// Define the shape of the database context
interface DatabaseContextType {
  entries: JournalEntry[];
  loading: boolean;
  error: string | null;
  addEntry: (entry: Omit<JournalEntry, 'id' | 'createdAt' | 'updatedAt'>) => Promise<JournalEntry>;
  updateEntry: (id: string, updates: Partial<JournalEntry>) => Promise<JournalEntry>;
  deleteEntry: (id: string) => Promise<void>;
  getEntryById: (id: string) => JournalEntry | undefined;
  getEntriesByDate: (date: string) => JournalEntry[];
  getEntriesByMood: (mood: string) => JournalEntry[];
  syncDatabase: () => Promise<void>;
}

// Create the database context with default values
const DatabaseContext = createContext<DatabaseContextType>({
  entries: [],
  loading: false,
  error: null,
  addEntry: async () => ({ id: '', userId: '', date: '', title: '', content: '', moonPhase: 0, moonSign: '', createdAt: '', updatedAt: '' }),
  updateEntry: async () => ({ id: '', userId: '', date: '', title: '', content: '', moonPhase: 0, moonSign: '', createdAt: '', updatedAt: '' }),
  deleteEntry: async () => {},
  getEntryById: () => undefined,
  getEntriesByDate: () => [],
  getEntriesByMood: () => [],
  syncDatabase: async () => {}
});

// Custom hook to use the database context
export const useDatabase = () => useContext(DatabaseContext);

interface DatabaseProviderProps {
  children: ReactNode;
}

export const DatabaseProvider = ({ children }: DatabaseProviderProps) => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Add a new journal entry
  const addEntry = async (entryData: Omit<JournalEntry, 'id' | 'createdAt' | 'updatedAt'>): Promise<JournalEntry> => {
    setLoading(true);
    setError(null);
    
    try {
      // This would normally call a cloud database API
      // For demonstration, we'll create a local entry
      const now = new Date().toISOString();
      const newEntry: JournalEntry = {
        ...entryData,
        id: `entry-${Date.now()}`,
        createdAt: now,
        updatedAt: now
      };
      
      // Add to local state
      setEntries(prevEntries => [...prevEntries, newEntry]);
      
      // Store in localStorage for persistence
      const storedEntries = JSON.parse(localStorage.getItem('astrojournal_entries') || '[]');
      localStorage.setItem('astrojournal_entries', JSON.stringify([...storedEntries, newEntry]));
      
      return newEntry;
    } catch (err) {
      console.error('Error adding entry:', err);
      setError('Failed to add journal entry');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Update an existing journal entry
  const updateEntry = async (id: string, updates: Partial<JournalEntry>): Promise<JournalEntry> => {
    setLoading(true);
    setError(null);
    
    try {
      // Find the entry to update
      const entryIndex = entries.findIndex(entry => entry.id === id);
      if (entryIndex === -1) {
        throw new Error('Entry not found');
      }
      
      // Create updated entry
      const updatedEntry: JournalEntry = {
        ...entries[entryIndex],
        ...updates,
        updatedAt: new Date().toISOString()
      };
      
      // Update local state
      const updatedEntries = [...entries];
      updatedEntries[entryIndex] = updatedEntry;
      setEntries(updatedEntries);
      
      // Update localStorage
      localStorage.setItem('astrojournal_entries', JSON.stringify(updatedEntries));
      
      return updatedEntry;
    } catch (err) {
      console.error('Error updating entry:', err);
      setError('Failed to update journal entry');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Delete a journal entry
  const deleteEntry = async (id: string): Promise<void> => {
    setLoading(true);
    setError(null);
    
    try {
      // Filter out the entry to delete
      const updatedEntries = entries.filter(entry => entry.id !== id);
      
      // Update local state
      setEntries(updatedEntries);
      
      // Update localStorage
      localStorage.setItem('astrojournal_entries', JSON.stringify(updatedEntries));
    } catch (err) {
      console.error('Error deleting entry:', err);
      setError('Failed to delete journal entry');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Get a single entry by ID
  const getEntryById = (id: string): JournalEntry | undefined => {
    return entries.find(entry => entry.id === id);
  };

  // Get entries by date
  const getEntriesByDate = (date: string): JournalEntry[] => {
    return entries.filter(entry => entry.date === date);
  };

  // Get entries by mood
  const getEntriesByMood = (mood: string): JournalEntry[] => {
    return entries.filter(entry => entry.mood === mood);
  };

  // Sync with cloud database
  const syncDatabase = async (): Promise<void> => {
    setLoading(true);
    setError(null);
    
    try {
      // This would normally sync with a cloud database
      // For demonstration, we'll load from localStorage
      const storedEntries = JSON.parse(localStorage.getItem('astrojournal_entries') || '[]');
      setEntries(storedEntries);
    } catch (err) {
      console.error('Error syncing database:', err);
      setError('Failed to sync with cloud database');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <DatabaseContext.Provider 
      value={{ 
        entries, 
        loading, 
        error, 
        addEntry, 
        updateEntry, 
        deleteEntry, 
        getEntryById, 
        getEntriesByDate, 
        getEntriesByMood, 
        syncDatabase 
      }}
    >
      {children}
    </DatabaseContext.Provider>
  );
};
