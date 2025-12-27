import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {ChakraProvider, defaultSystem} from '@chakra-ui/react'
import Routes from './routes/index.tsx'
import { QueryClient, QueryClientProvider,  } from '@tanstack/react-query'
import { WorkoutProvider } from './context/workoutContext.tsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <QueryClientProvider client={queryClient}>
        <WorkoutProvider>
          <Routes />
        </WorkoutProvider>
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>,
)
