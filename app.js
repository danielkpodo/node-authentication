require("express-async-errors");
const express = require("express");
const app = express();
const helmet = require("helmet");
const session = require("express-session");
const flash = require("connect-flash");
let sessionOptions = session({
  secret: "I love Jesus with my whole heart",
  saveUninitialized: true,
  resave: true,
});

const users = require("./routes/users");
const home = require("./routes/index");

app.use(helmet());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(sessionOptions);
app.use(flash());

app.use((req, res, next) => {
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

app.use("/", home);
app.use("/users", users);

module.exports = app;
