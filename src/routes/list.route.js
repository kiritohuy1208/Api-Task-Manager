const express = require("express");
const router = express.Router();
const { getList } = require("./../controllers/list.controller");
router.route("/").get(getList);
router.route("").post()
router.route("/:id").patch()
router.route("/:id").delete()
module.exports = router;
