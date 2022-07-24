const { Task } = require("../models/task.model");
const getTasks = (req, res) => {
  const { listId } = req.params;
  Task.find({ _listId: listId })
    .then((tasks) => res.status(200).send(tasks))
    .catch((err) => res.status(400).send(err.message));
};
const getOneTask = (req, res) => {
  const { taskId } = req.params;
  Task.findOne({ _id: taskId })
    .then((tasks) => res.status(200).send(tasks))
    .catch((err) => res.status(400).send(err.message));
};
const createTask = (req, res) => {
  const { title } = req.body;
  const { listId } = req.params;
  const newTask = new Task({
    title,
    _listId: listId,
  });
  newTask
    .save()
    .then((newTask) => res.status(200).send(newTask))
    .catch((err) => res.status(400).send(err.message));
};
const updateTask = (req, res) => {
  const { taskId, listId } = req.params;
  Task.findByIdAndUpdate({ _id: taskId, _listId: listId }, { $set: req.body })
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(400).send(err.message));
};
const deleteTask = (req, res) => {
  const { taskId } = req.params;
  Task.findByIdAndRemove({ _id: taskId })
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(400).send(err.message));
};
module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getOneTask,
};
