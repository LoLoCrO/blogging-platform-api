require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./src/database');
const routes = require('./src/routes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/posts', routes);

sequelize
    .sync()
    .then(() => {
        app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
    })
    .catch(console.error);
