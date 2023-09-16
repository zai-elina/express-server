const User = require("../models/user");

const getUsers = (request, response) => {
  return User.find({}).then((data) => {
    response.status(200).send(data);
  });
};

const getUser = (request, response) => {
  const { user_id } = request.params;
  return User.findById(user_id).then((data) => {
    response.status(200).send(data);
  });
};

const createUser = (request, response) => {
  return User.create({ ...request.body }).then((user) => {
    response.status(201).send(user);
  });
};

const updateUser = (request, response) => {};

const deleteUser = (request, response) => {};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
