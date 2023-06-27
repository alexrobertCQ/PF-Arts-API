const validateUser = require('../../controllers/users/loginController');

const loginHandler = async (req, res) => {
  try {
    const { username, password } = req.body;//Aqui estaba teniendo problemas no deberia ser userName?
    const token = await validateUser(username, password);
    res.status(200).json(
      {token,
      "success":true,
  });
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
};

module.exports = loginHandler;
