
const express = require("express")
const workoutModel = require("../models/workoutModel")
const {
    createWorkout
} = require("../controllers/workoutController")


const router = express.Router()


// workouts route
router.get('/', (req, res) => {
    res.json({message: "All workouts"})
})

// single workout route
router.get('/:id', (req, res) => {
    res.json({message: "Single workout"})
})

// create a single workout route
router.post('/', createWorkout)

// delete a single workout
router.delete('/:id', (req, res) => {
    res.json({message: "Delete a workout"})
})

module.exports = router;


