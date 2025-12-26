const workoutRoutes = require('./routes/workouts.js'); // import router


// get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

// get a single workout
const getWorkout = async (req, res) => {
    const {id} = req.params;
    const workout = await Workout.findById(id);

    if (!workout) {
        return res.status(404).json({message: "No such workout"})
    }
    res.status(200).json(workout)
}

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
const deleteWorkout = async (req, res) => {
    const {id} = req.params;

    const workout = await Workout.findByIdAndDelete(id);

    if (!workout) {
        return res.status(404).json({message: "No such workout"})
    }
    res.status(200).json(workout)
}

// update a single workout
const updateWorkout = async (req, res) => {
    const {id} = req.params;
    const {title, reps, load} = req.body;

    const workout = await Workout.findByIdAndUpdate(id, {title, reps, load});

    if (!workout) {
        return res.status(404).json({message: "No such workout"})
    }
    res.status(200).json(workout)
}

module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}