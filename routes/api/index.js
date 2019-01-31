const router = require("express").Router();
const pathRoutes = require("./paths");

// Book routes
router.use("/paths", pathRoutes);

module.exports = router;
