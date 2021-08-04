const { User } = require("../models");

const getSingleUser = async (_, args) => {
  const foundUser = await User.findOne({});

  if (!foundUser) {
    throw new Error("Couldn't find user with this id!");
  }

  return foundUser;
};

module.exports = getSingleUser;
