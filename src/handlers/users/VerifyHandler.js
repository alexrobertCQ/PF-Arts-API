const validateToken = require('../../controllers/users/validateToken')
const verifyTokenHandler = async (req, res) => {
    try {
      const { token } = req.body;
  console.log(token,"hello");
      // Aquí puedes realizar la lógica de verificación del token según tus necesidades.
      // En este ejemplo, simplemente validaremos el token y devolveremos una respuesta similar a la del login.
  
      if (token) {
        const user = await validateToken(token);
        const response = {
          token,
          success: true,
          user
        };
        res.status(200).json(response);
      } else {
        res.status(400).json({ success: false, message: 'Token not provided' });
      }
    } catch (error) {
      console.error('Error verifying token:', error);
      res.status(500).json({ success: false, error: error.message });
    }
  };
  
  module.exports = verifyTokenHandler;
  