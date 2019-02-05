const express = require("express");
var bodyParser = require("body-parser");
var passport = require("passport");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
var db = require("./models");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("client/build"));

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// Add routes, both API and view
app.use(routes);

app.use(passport.initialize()); // after line no.20 (express.static)
require("./config/passport");



app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/", session: false }),
  function(req, res) {
      console.log(req.user)
      var token = req.user.token;
      console.log(token)
      res.redirect("/?token=" + token);
      // res.redirect("http://localhost:3000?token=" + token);
  }
);

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT} -- http://localhost:${PORT}/`);
  });
});