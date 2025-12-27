/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, type ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Define the workout type
export interface Workout {
  _id: string;
  title: string;
  load: number;
  reps: number;
  createdAt: string;
  updatedAt: string;
}

// Define the context type
interface WorkoutContextType {
  workouts: Workout[];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => void;
}

// Create the context
const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

// Create a provider component
interface WorkoutProviderProps {
  children: ReactNode;
}

export const WorkoutProvider = ({ children }: WorkoutProviderProps) => {
  // Define the fetch function for workouts
  const fetchWorkouts = async (): Promise<Workout[]> => {
    try {
      const response = await axios.get<Workout[]>('/api/workouts/'); // Note: Added trailing slash as you mentioned in your original post
      return response.data;
    } catch (error) {
      console.error('Error fetching workouts:', error);
      throw error;
    }
  };

  // Use React Query to fetch workouts
  const {
    data: workouts = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<Workout[], Error>({
    queryKey: ['workouts'],
    queryFn: fetchWorkouts,
    // Optional: Add staleTime to cache the data
    staleTime: 1000 * 60 * 5, // 5 minutes
    // Optional: Add retry logic
    retry: 1,
  });

  const value: WorkoutContextType = {
    workouts,
    isLoading,
    isError,
    error: error || null,
    refetch,
  };

  return (
    <WorkoutContext.Provider value={value}>
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkouts = (): WorkoutContextType => {
  const context = useContext(WorkoutContext);
  if (context === undefined) {
    throw new Error("useWorkouts must be used within a WorkoutProvider");
  }
  return context;
};