const router = require("express").Router();

router.use("/api", require("./apiRoutes"));
router.use("/user", require("./user"));
router.use("/recipe", require("./user"));
router.use("/notes", require("./notes"));

module.exports = router;
