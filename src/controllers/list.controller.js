const { List } = require("../models/list.model");
const getList = (req, res) => {
  List.find({ _userId: req.user_id })
    .then((lists) => {
      res.status(200).send(lists);
    })
    .catch((err) => res.status(400).send(err));
};
const postList = (req, res) => {
  const { title } = req.body;
  let newList = new List({
    title,
    //_userId: req.user_id,
    // _userId: "12312",
  });
  newList
    .save()
    .then((list) => {
      res.status(200).send(list);
    })
    .catch((err) => res.status(401).send(err.message));
};
const updateList = (req, res) => {
  List.findOneAndUpdate(
    { _id: req.params.id, 
      // _userId: req.user_id
    },
    {
      $set: req.body,
    }
  ).then((list) => {
    res.status(200).send("update list success");
  }).catch(err =>res.status(400).send("Error:"+err.message));
};
const deleteList = (req, res) => {
  List.findOneAndRemove({ _id: req.params.id, _userId: req.user_id }).then(
    (listRemoved) => {
      res.status(200).send(listRemoved);
      deleteTasksFromList(listRemoved._id);
    }
  );
};
let deleteTasksFromList = (_listId) => {
  Task.deleteMany({
    _listId,
  }).then(() => {
    console.log("Tasks from " + _listId + " were deleted!");
  });
};
module.exports = {
  getList,
  postList,
  updateList,
  deleteList,
};
