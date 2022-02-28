const express = require("express");
const router = express.Router();
const TaskRouter = require("./task.route");
const ListRouter = require("./list.route");
router.use("/task", TaskRouter);
router.use("/lists", ListRouter);

module.exports = router;
