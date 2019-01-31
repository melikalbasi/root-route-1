const router = require("express").Router();
const pathsController = require("../../controllers/pathsController");

// Matches with "/api/paths"
router.route("/")
  .get(pathsController.findAll)
  // .post(booksController.create);

module.exports = router;
