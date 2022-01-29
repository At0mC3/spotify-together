const app = require('express')();
const bodyParser = require('body-parser');
require('dotenv').config();

const { APP_PORT } = process.env;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use('/api/v1', require('./api/v1/router'));

app.listen(APP_PORT, () => {
    console.log(`Spotify Together Backend listening on port ${APP_PORT}`)
})