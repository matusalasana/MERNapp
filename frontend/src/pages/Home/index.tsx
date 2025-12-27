import WorkoutDetails from "../../components/WorkoutDetails";
import { Text, Spinner, Box } from "@chakra-ui/react";
import Title from "../../components/Title";
import { useWorkouts } from "../../context/workoutContext";

function Home() {
  const { workouts, isLoading, isError, error } = useWorkouts();

  // Handle loading state
  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minH="200px">
        <Spinner size="xl" />
      </Box>
    );
  }

  // Handle error state
  if (isError) {
    return (
      <Text mx={4} my={4}>
        {error?.message || "Failed to load workouts. Please try again."}
      </Text>
    );
  }

  return (
    <div>
      <Title text1="YOUR" text2="WORKOUTS" />
      <Text px={4} py={2}>
        Showing {workouts.length} {workouts.length === 1 ? 'workout' : 'workouts'}
      </Text>
      
      {workouts.length === 0 ? (
        <Text px={4} py={4} textAlign="center" color="gray.500">
          No workouts found. Create your first workout to get started!
        </Text>
      ) : (
        workouts.map((workout) => (
          <WorkoutDetails 
            title={workout.title} 
            load={workout.load} 
            reps={workout.reps} 
            createdAt={workout.createdAt} 
            updatedAt={workout.updatedAt} 
            key={workout._id}
          />
        ))
      )}
    </div>
  );
}

export default Home;