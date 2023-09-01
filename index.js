const dotenv = require('dotenv');
dotenv.config();

const path = require('path');
const express = require('express');
const router = require('./app/router');

const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

app.use(express.static(path.join(__dirname, './public')))

app.use(router);

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});