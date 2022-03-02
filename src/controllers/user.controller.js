const { user } = require("../models/user.model");
const getUser = (req, res) => {
  res.status(200).send("get User");
};
module.exports = {
    getUser,
};
