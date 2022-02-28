const express = require("express");
const router = express.Router();
const TaskRouter = require("./task.route");
router.use("/tasks", TaskRouter);

module.exports = router;
