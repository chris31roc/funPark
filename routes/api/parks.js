const router = require("express").Router();
const parksController = require("../../controllers/parksController");

// Matches with "/api/books"
router.route("/")
  .get(parksController.findAll)
  .post(parksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(parksController.findById)
  .put(parksController.update)
  .delete(parksController.remove);

module.exports = router;
