const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/",(req, res) =>{
    res.end("<h1>Benvenut* nel mio blog!</h1>")
});