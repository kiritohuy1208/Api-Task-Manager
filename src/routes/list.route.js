const express = require("express");
const router = express.Router();
const {
  getList,
  postList,
  updateList,
  deleteList,
} = require("./../controllers/list.controller");
router.route("/").get(getList);
router.route("").post(postList);
router.route("/:id").patch(updateList);
router.route("/:id").delete(deleteList);
module.exports = router;
