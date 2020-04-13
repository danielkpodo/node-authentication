require("express-async-errors");
const express = require("express");
const app = express();
const users = require("./routes/users");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.use("/users", users);

module.exports = app;
