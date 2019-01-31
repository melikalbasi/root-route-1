const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Path.findAll({})
    .then(allData => {
      console.log("Hitting the then statement");
      res.send(allData) 
    })
      .catch(err => res.status(422).json(err));
  }
};