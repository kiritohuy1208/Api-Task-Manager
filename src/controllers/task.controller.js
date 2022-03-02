const { Task } = require("../models/task.model");
const getTask = (req, res) => {
  res.status(200).send("get Task");
};
module.exports = {
  getTask,
};
