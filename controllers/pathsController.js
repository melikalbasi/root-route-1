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
        pathid: req.params.pathid
      }
    })
    .then(allData => {
      res.json(allData) 
    })
      .catch(err => res.status(422).json(err));
  },
  findResources: function(req, res) {
    db.Resource.findAll({
      where: {
        subjectid: req.params.subjectid
      }
    })
    .then(allData => {
      res.json(allData) 
    })
      .catch(err => res.status(422).json(err));
  }
};