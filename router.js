const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const {getPosts} = require("./controllers/blog")

app.get("/", (req,res) => {
    res.send("<h1>Benvenut* nel mio blog!</h1>")
});

app.get("/posts", getPosts);

app.listen(port, () => {
    console.log(`Sto runnando il server su http://localhost:${port}`);
});