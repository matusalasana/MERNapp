
require('dotenv').config();   // load env variables

const express = require('express'); 
const mongoose = require("mongoose")
const workoutRoutes = require('./routes/workouts.js'); // import router

const app = express();

// middleware
app.use(express.json()); // parse JSON
app.use((req, res, next) => {
    console.log(req.path, req.method); // log requests
    next();
});

// routes
app.use('/api/workouts', workoutRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        // listen for requests
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
        console.log('listening on port', PORT);
        });
    })
    .catch((error) => console.log("Error connecting to MongoDB:", error));
    
// default root route
app.get('/', (req, res) => {
    res.json({ message: 'API is running' });
});

