const path = require("path");
const router = require("express").Router();
const pathsController = require("../controllers/pathsController");

router.route("/api/paths")
  .get(pathsController.findAll)

router.route("/api/paths/:pathid")
  .get(pathsController.findSubjects)

router.route("/api/paths/:pathid/subjects/:subjectid")
  .get(pathsController.findResources)
  // .post(pathsController.addReview)



// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/public/index.html"));
// });

module.exports = router;
