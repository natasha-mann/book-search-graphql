const { User } = require("../models");
const { signToken } = require("../utils/auth");

const addUser = async (_, { input }) => {
  const { username, email, password } = input;
  const user = await User.create({ username, email, password });

  if (!user) {
    throw new AuthenticationError("Something went wrong!");
  }

  const token = signToken(user);

  return { token, user };
};

module.exports = addUser;
