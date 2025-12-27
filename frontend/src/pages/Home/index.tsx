


import { useEffect, useState } from "react"
import WorkoutDetails from "../../components/WorkoutDetails"
import { Text } from "@chakra-ui/react"
import Title from "../../components/Title"

type Workout = {
  _id: string
  title: string
  load: number
  reps: number
  createdAt: string
  updatedAt: string
}

function Home() {

  const [workouts, setWorkouts] = useState<Workout[]>([])

  useEffect(() => {

    const fetchData = async () => {
    const res = await fetch("/api/workouts")
    const data = await res.json()

    if (res.ok) {
      setWorkouts(data)
    }

    }

    fetchData()
    
  }, [])

  return (
    <div>
        <Title text1="YOUR" text2="WORKOUTS" />
        <Text px={4}>Showing {workouts.length} workouts</Text>
        {workouts && workouts.map((workout) => (
          <WorkoutDetails title={workout.title} load={workout.load} reps={workout.reps} createdAt={workout.createdAt} updatedAt={workout.updatedAt} key={workout._id} />
        ))}

    </div>
  )
}

export default Home