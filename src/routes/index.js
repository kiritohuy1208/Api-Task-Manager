const express = require("express");
const router = express.Router();
const TaskRouter = require("./task.route");
const ListRouter = require("./list.route");
const UserRouter = require("./user.route");
router.use("/tasks", TaskRouter);
router.use("/lists", ListRouter);
router.use("/users",UserRouter)
module.exports = router;
