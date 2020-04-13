require("express-async-errors");
const express = require("express");
const app = express();
const helmet = require("helmet");

const users = require("./routes/users");
const home = require("./routes/index");

app.use(helmet());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.use("/", home);
app.use("/users", users);

module.exports = app;
