const express = require("express");
const router = express.Router();
const { getTask } = require("./../controllers/task.controller");
router.route("/").get(getTask);
// export const TaskRouter = router;
module.exports = router;
