const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    console.log("+++++++++")
    console.log(db.Path);

    db.Path.findAll({
      attributes: ["name", "image", "description"]
    })
    .then(allData => {
      console.log("+=========+");
      console.log(allData);
      res.json(allData) 
    })
      .catch(err => res.status(422).json(err));
  }
};