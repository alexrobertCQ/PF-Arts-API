const jwt = require('jsonwebtoken');
const SECRET_KEY = "usa el dotenv";
function authenticateToken(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
  
    if (token) {
      jwt.verify(token, SECRET_KEY, (err, decodedToken) => {
        if (err) {
          res.status(401).json({ error: 'Token inválido' });
        } else {
          // El token es válido, puedes acceder a los datos decodificados en decodedToken
          console.log(decodedToken);
          req.userId = decodedToken.userId;
          next();
        }
      });
    } else {
      res.status(401).json({ error: 'Token no proporcionado' });
    }
  }

  module.exports = authenticateToken;