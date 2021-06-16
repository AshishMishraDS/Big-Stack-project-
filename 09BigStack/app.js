const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const passport = require("passport");


//Bring all routes
const auth = require("./routes/api/auth");
const profile = require("./routes/api/profile");
const questions = require("./routes/api/questions");

const port = process.env.PORT || 3000;

const app = express();

//midleware for bodyparser
app.use(bodyparser.urlencoded({ extended: false}));
app.use(bodyparser.json());


 //mongoDB configuration
 const db = require("./setup/myurl").mongoURL;

//attempt tpo connect to database
mongoose
    .connect(db)
    .then(() => console.log("MongoDB connected successfully"))
    .catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());

//Config for JWT strategy
require("./strategies/jsonwtStrategy")(passport);


//route for testing
app.get("/", (req, res) => {
    res.send("Hey..! Welcome to StackOverFlow..")
});

//actual routes
app.use("/api/auth", auth);
app.use("/api/profile", profile);
app.use("/api/questions", questions);


app.listen(port, () => console.log(`App is running at ${port}...`));