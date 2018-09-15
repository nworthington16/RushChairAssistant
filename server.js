const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const rushees = require('./routes/api/rushees')

const app = express();

// BodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


// db config
const db = require('./config/keys').mongoURI;

// connect to mongo
mongoose
  .connect(db)
  .then(() => console.log('mongodb connected'))
  .catch(err => console.log(err));

// Use routes
app.use('/api/rushees', rushees);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
