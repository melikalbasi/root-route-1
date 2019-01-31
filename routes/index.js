const path = require("path");
const router = require("express").Router();
const pathsController = require("../controllers/pathsController");
// console.log("HItting ")
router.route("/api/paths")
  .get(pathsController.findAll)

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/public/index.html"));
// });

module.exports = router;