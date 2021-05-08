const express = require("express");

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api routes
app.get("/api", (req, res) => {
    res.json({ msg: "hello world" });
});

// server connection

// starting server
app.listen(8080, () => {
    console.log("server starting at localhost:8080");
});
