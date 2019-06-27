const router = require("express").Router();

router.use("/api", require("./apiRoutes"));
router.use("/user", require("./user"));
router.use("/recipe", require("./user"));

module.exports = router;
