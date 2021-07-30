const { User } = require("../models");

const removeBook = (_, { input }, context) => {
  if (context.user) {
    const { bookId } = input;

    const updatedUser = await User.findOneAndUpdate(
      { _id: context.user._id },
      { $pull: { savedBooks: { bookId } } },
      { new: true }
    );

    if (!updatedUser) {
      throw new Error("Couldn't find user with this id!");
    }

    return updatedUser;
  } else {
    throw new AuthenticationError("Not authorised");
  }
};

module.exports = removeBook;
