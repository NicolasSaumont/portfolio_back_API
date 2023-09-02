const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');

const express = require('express');
const router = require('./app/router');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json({ extended: true }));

app.use(router);

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});