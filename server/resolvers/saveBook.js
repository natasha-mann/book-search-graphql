const saveBook = (_, { input }, context) => {
  try {
    if (context.user) {
      const { bookId, authors, title, description, image } = input;
      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        {
          $addToSet: {
            savedBooks: { bookId, authors, title, description, image },
          },
        },
        { new: true, runValidators: true }
      );
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
