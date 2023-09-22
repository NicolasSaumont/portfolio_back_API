const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');

const express = require('express');
const router = require('./app/router');

const session = require('express-session');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(
  session({
    secret: 'princess consuela banana hammock',
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60, // 1h
    },
  })
);

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json({ extended: true }));

app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});

app.use(router);

// app.listen(`https://portfolio-back.nicolassaumont.com`);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
