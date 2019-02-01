const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Path.findAll({})
    .then(allData => {
      res.json(allData) 
    })
      .catch(err => res.status(422).json(err));
  },
  findSubjects: function(req, res) {
    db.Subject.findAll({
      where: {
        pathId: 1
      }
    })
    .then(allData => {
      res.json(allData) 
    })
      .catch(err => res.status(422).json(err));
  }
};