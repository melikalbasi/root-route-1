const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Path.findAll({})
    .then(allData => {
      console.log("+=========+");
      console.log(allData);
      res.json(allData) 
    })
      .catch(err => res.status(422).json(err));
  }
};