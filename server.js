const express = require("express");
const app = express();
//const cors = require('cors');
const mongoose = require("./config/mongoose.config"); 

app.use(express.json());
//app.use(cors());
app.use(express.urlencoded({extended: true}));
const  jokeRouter = require("./routes/joke.routes");
jokeRouter(app);

app.listen(5000, () => {
    console.log("Success: app listening on port 5000");
});
