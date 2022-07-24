const express = require("express");
const router = express.Router();
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getOneTask,
} = require("./../controllers/task.controller");

router.route("/:listId/tasks").get(getTasks);
router.route("/:taskId").get(getOneTask);
router.route("/:listId/createTask").post(createTask);
router.route("/:listId/updateTask/:taskId").put(updateTask);
router.route("/:taskId/deleteTask").delete(deleteTask);
// export const TaskRouter = router;
module.exports = router;
