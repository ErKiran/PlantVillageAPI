require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
require('./src/gdrive')

const api = require('./src/api');
const auth = require('./src/api/auth');

process.setMaxListeners(0);
mongoose.set('useCreateIndex', true);

mongoose
    .connect(process.env.MLab, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session())
require('./config/passport')(passport)

app.use('/api', api);
app.use('/auth', auth);
app.get('/', (req, res) => {
    res.json({
        msg: 'That works'
    })
})

const port = process.env.PORT || 5000;

app.listen(port);

module.exports = app;