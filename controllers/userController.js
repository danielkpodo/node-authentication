const User = require("../models/User");
const validator = require("validator");
const bcrypt = require("bcryptjs");

exports.login = (req, res) => {
  res.render("login");
};

exports.register = (req, res) => {
  res.render("register");
};

exports.successfulRegistration = async (req, res) => {
  let errors = [];
  let { username, email, password, password2 } = req.body;

  username = username.toLowerCase();
  email = email.toLowerCase();

  if (!username || !email || !password || !password2) {
    errors.push({ msg: "All fields are required" });
  }

  if (username.length > 0 && username.length < 3) {
    errors.push({ msg: "Username must be atleast 3 characters" });
  }

  if (username.length > 30) {
    errors.push("Username cannot exceed 30 characters.");
  }

  if (username.length > 0 && !validator.isAlphanumeric(username)) {
    errors.push({ msg: "Username can only contain letters and numbers" });
  }

  if (username !== "") {
    let usernameExists = await User.findOne({ username: username });
    if (usernameExists) {
      errors.push({ msg: "Username is already taken" });
    }
  }

  if (password.length > 0 && password.length < 8) {
    errors.push({ msg: "Password must be atleast 8 characters" });
  }

  if (password.length > 50) {
    errors.push({ msg: "Password cannot exceed 50 characters" });
  }

  if (password !== password2) {
    errors.push({ msg: "Passwords do not match" });
  }

  if (email.length > 0 && !validator.isEmail(email)) {
    errors.push({ msg: "You must provide a valid email address" });
  }

  if (email !== "") {
    let emailExists = await User.findOne({ email: email });
    if (emailExists) {
      errors.push({
        msg: "Email address is already registered, try logging in",
      });
    }
  }

  if (errors.length > 0) {
    res.render("register", { username, email, password, password2, errors });
  } else {
    let newRegistrant = new User({
      username,
      email,
      password,
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newRegistrant.password, salt, (err, hash) => {
        if (err) throw err;
        newRegistrant.password = hash;
        newRegistrant
          .save()
          .then((user) => {
            req.flash("success", "You are successfully registered, login");
            res.redirect("/users/login");
          })
          .catch((err) => console.log(err));
      });
    });
  }
};

exports.successfulLogin = async (req, res) => {
  res.send("Successful login");
};
