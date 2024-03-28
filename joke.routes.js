const express = require("express");
const JokeController = require("../controllers/joke.controller");

module.exports = app => {
    app.get("/jokes", JokeController.findAllJokes);
    app.get("/jokes/:id", JokeController.findOneJoke);
    app.post("/jokes", JokeController.createJoke);
    app.post("/jokes/:id", JokeController.updateJoke);
    app.delete("/jokes/:id", JokeController.deleteJoke);
}
