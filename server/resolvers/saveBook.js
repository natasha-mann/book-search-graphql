const { AuthenticationError } = require("apollo-server-express");

const { User } = require("../models");

const saveBook = async (_, { input }, context) => {
  try {
    if (context.user) {
      const { bookId, authors, title, description, image } = input;
      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user.id },
        {
          $addToSet: {
            savedBooks: { bookId, authors, title, description, image },
          },
        },
        { new: true }
      );
      console.log(updatedUser);
      return updatedUser;
    } else {
      throw new AuthenticationError("Not authorised");
    }
  } catch (err) {
    console.log(err);
    throw new AuthenticationError("Something went wrong!");
  }
};

module.exports = saveBook;
