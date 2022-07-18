const express = require("express");
const mongoose = require("mongoose");
const route = require("./Routes/routes.js");
const bodyParser = require("body-parser");
const app = express();

const multer= require("multer");
const { AppConfig } = require('aws-sdk');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use( multer().any())

mongoose.connect("mongodb+srv://nishusweet:8052466943@cluster0.n9bf08l.mongodb.net/group41Database", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

