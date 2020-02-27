//--- load .env settings
require('dotenv').config();

//--- express
const express = require('express');
const app = express();

//--- middlewares
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

//--- helmet
app.use(helmet());

//--- body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//--- cors
const origin = {
  origin: process.env.NODE_ENV === 'production' ? process.env.URL : '*'
};
app.use(cors(origin));

//--- limiter (anti ddos)
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 10 // 10 requests,
});
app.use(limiter);

//---- routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

require('./errorHandler')(app);

// setup server
app.listen(process.env.PORT || 3000, () => {
  console.log(`App running on port ${process.env.PORT || 3000}`);
});
