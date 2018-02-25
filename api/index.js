"use strict";

const app = require("express")();
const bodyParser = require("body-parser");
const request = require("request");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.post("/signup", function (req, res, next) {

    if (!req.body.recaptchaToken) {
        return res.status(400).json({message: "recaptchaToken is required"});
    }
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({message: "email and password are required"});
    }

    res.status(201).json({message: "Congratulations! We think you are human."});
});


const port = process.env.PORT || 3000;
app.listen(port, function (err) {
    if (err) {
        throw err;
    }
    console.log("API running on port " + port);
});