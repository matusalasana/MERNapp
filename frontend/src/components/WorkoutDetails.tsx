
import { Box, Text } from "@chakra-ui/react"
interface WorkoutDetailsProps {
    title: string;
    load: number;
    reps: number;
    createdAt: string;
    updatedAt: string;
}

function WorkoutDetails({ title, load, reps, createdAt, updatedAt }: WorkoutDetailsProps) {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
        <Text color={'green.600'} fontWeight={'bold'} fontSize={'xl'} as={'h1'}>{title}</Text>
        <Text>Load: {load} kg</Text>
        <Text>Reps: {reps}</Text>
        <Text>Created At: {new Date(createdAt).getHours()}  {new Date(createdAt).toLocaleDateString()}</Text>
        <Text>Updated At: {new Date(updatedAt).toLocaleDateString()}</Text>
    </Box>
  )
}

export default WorkoutDetails