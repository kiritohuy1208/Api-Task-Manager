const express = require("express");
const router = express.Router();
const { getTasks,createTask,updateTask } = require("./../controllers/task.controller");

router.route("/:listId/tasks").get(getTasks);
router.route("/createTask").post(createTask)
router.route("/:taskId/updateTask").put(updateTask)
// export const TaskRouter = router;
module.exports = router;
