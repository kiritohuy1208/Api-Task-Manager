const express = require("express");
const router = express.Router();
const { getUser } = require("./../controllers/user.controller");

router.route("/").get(getUser);
// export const TaskRouter = router;
module.exports = router;
