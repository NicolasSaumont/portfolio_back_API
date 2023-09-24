const { User } = require('../models');
const jwt = require('jsonwebtoken');
const secretKey = 'princess consuela banana hammock';

const mainController = {
  homepage(req, res) {
    res.send("Hello from Nicolas Saumont's Portfolio API");
    // res.redirect('https://www.portfolio.nicolassaumont.com')
  },

  async postLogin(req, res) {
    try {
      const userEmail = req.body.userEmail;
      const userPassword = req.body.userPassword;
      const user = await User.findOne({
        where: { email: userEmail, password: userPassword },
      });
      if (user) {
        req.session.user = user.dataValues.email;
        const reqSessionsUser = req.session.user;

        const token = jwt.sign({ reqSessionsUser }, secretKey, {
          expiresIn: '7d',
        });

        req.session.user = {
          ...user,
          token: token,
        };

        const newUser = req.session.user;

        // Cookie creation
        const cookie = res.cookie('adminCookie', newUser.token, {
          maxAge: 60 * 60 * 1000, // Correspond à la durée de vie du cookie configurée dans express-session
          httpOnly: true, // Assurez-vous que le cookie est sécurisé
          // secure: true, // Décommentez ceci en production si vous utilisez HTTPS
        });

        console.log(cookie);
        const message = 'User is connected';
        return res.status(201).json(message);
      } else {
        const message = 'User can not be found';
        return res.status(401).json(message);
      }
    } catch (error) {
      console.trace(error);
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = mainController;
