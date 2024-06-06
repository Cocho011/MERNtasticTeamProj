const jwt = require('jsonwebtoken');
const { User } = require('../models');

const expiration = '2h';

module.exports = {
  signToken: function({ username, email, _id, secretKey }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secretKey, { expiresIn: expiration });
  },
  authMiddleware: async function({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.decode(token);
      const user = await User.findById(data._id);

      if (!user) {
        throw new Error('User not found');
      }

      jwt.verify(token, user.secretKey, { maxAge: expiration });
      req.user = data;
    } catch (err) {
      console.log('Invalid token', err);
    }

    return req;
  }
};
