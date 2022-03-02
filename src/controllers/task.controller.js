const { Task } = require("../models/task.model");
const getTasks = (req, res) => {
  const {listId} = req.params
  Task.find({_listId:listId}).then((tasks) =>res.status(200).send(tasks))
  .catch(err =>res.status(400).send(err.message))
};
const createTask = (req,res) =>{
  const {title,_listId} = req.body
  const newTask = new Task({
    title,
    _listId
  })
  newTask.save().then((newTask) =>res.status(200).send(newTask))
  .catch(err =>res.status(400).send(err.message))
}
module.exports = {
  getTasks,
  createTask
};
