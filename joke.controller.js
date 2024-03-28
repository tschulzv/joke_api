const Joke = require("../models/joke.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({allJokes}))
        .catch(err => res.json({msg: "ERROR", error: err}));
}

//Exporta una función para obtener un chiste
module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then(aJoke => res.json({joke : aJoke}))
        .catch(err => res.json({msg: "ERROR", error: err}));
}

module.exports.createJoke = (req, res) => {
    // asignarle fecha de creacion
    req.body.createdAt = new Date();
    // crear Joke
    Joke.create(req.body)
    .then(newJoke => res.json({joke : newJoke}))
    .catch(err => res.json({msg: "ERROR", error: err}));
}

//Exportar una función para actualizar una broma
module.exports.updateJoke = (req, res) => {
    req.body.updatedAt = new Date();
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedJoke => res.json({joke : updatedJoke}))
        .catch(err => res.json({msg: "ERROR", error: err}));
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id : req.params.id})
        .then(result => res.json({result:result}))
        .catch(err => res.json({msg: "ERROR", error: err}));
}