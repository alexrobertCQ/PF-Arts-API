const createUser = async (name, image, description) => {
    const newUser = await User.create({ name, image, description });
    console.log(newUser);
    return newUser;
  };
  
  module.exports = createUser;