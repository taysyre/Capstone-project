require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports =  {
  createToken(user){
    return jwt.sign(
      {
        email: user.email,
        pass: user.pass,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: '1h'
      }
    )  
  },

  
}