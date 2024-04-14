const express = require("express");
const router = express.Router();

router.use("/api/auth", require("./authRoutes"));
router.use("/api/user", require("./userRoutes"));
router.use("/api/restaurant", require("./resturantRoutes"));
router.use("/api/category", require("./catgeoryRoutes"));
router.use("/api/food", require("./foodRoutes"));

module.exports = router;
