module.exports = function guardRoute(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  req.flash("error", "You must be authenticated to access that route");
  res.redirect("/users/login");
};
