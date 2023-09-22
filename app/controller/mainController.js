const { User } = require('../models');

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
