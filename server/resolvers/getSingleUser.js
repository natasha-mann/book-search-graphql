const getSingleUser = (_, args, context) => {
  const foundUser = await User.findOne({ _id: context.user._id });

  if (!foundUser) {
    throw new Error("Couldn't find user with this id!");
  }

  return foundUser;
};

module.exports = getSingleUser;
