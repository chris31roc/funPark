const router = require("express").Router();
const parkRoutes = require("./parks");

// Park routes
router.use("/parks", parkRoutes);

module.exports = router;