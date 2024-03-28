const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {type: String, required: [true, 'Needs setup']}, 
    punchline: {type: String, required: [true, 'Needs punchline']}, 
    createdAt: Date,
    updatedAt: Date
});

// crear el modelo en base al schema
const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;