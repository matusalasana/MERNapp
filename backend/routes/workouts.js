
const express = require("express")
const workoutModel = require("../models/workoutModel")
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout,
} = require("../controllers/workoutController")


const router = express.Router()


// get all workouts
router.get('/', getWorkouts)

// get a single workout route
router.get('/:id', getWorkout)

// create a single workout
router.post('/', createWorkout)

// delete a single workout
router.delete('/:id', deleteWorkout)

// update a single workout
router.put('/:id', updateWorkout)

module.exports = router;


