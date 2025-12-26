const workoutRoutes = require('./routes/workouts.js'); // import router


// get all workouts


// get a single workout


// create a single workout
const createWorkout = async (req, res) => {
    const {title, reps, load} = req.body;

    // add doc to db
    try {
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({message: "Error creating workout"})
    }
}

// delete a single workout

// update a single workout

module.exports = {
    createWorkout
}