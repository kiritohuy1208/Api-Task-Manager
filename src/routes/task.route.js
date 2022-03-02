const express = require("express");
const router = express.Router();
const { getTasks,createTask } = require("./../controllers/task.controller");

router.route("/:listId/tasks").get(getTasks);
router.route("/createTask").post(createTask)
// export const TaskRouter = router;
module.exports = router;
