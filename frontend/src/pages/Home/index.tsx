


import { useEffect, useState } from "react"

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
    console.log(data)

    if (res.ok) {
      setWorkouts(data)
    }

    }

    fetchData()
    
  }, [])

  return (
    <div>
        <h1>Home Page</h1>
        {workouts && workouts.map((workout) => (
          <div key={workout._id}>
            <h2>{workout.title}</h2>
            <p>Load: {workout.load} kg</p>
            <p>Reps: {workout.reps}</p>
            <p>Created At: {new Date(workout.createdAt).toLocaleDateString()}</p>
          </div>
        ))}

    </div>
  )
}

export default Home