const express = require('express');
const cors = require('cors');
const { response, ENDPOINT_NOT_FOUND } = require('./src/core/response');
const mwResponse = require('./src/middlewares/response');
const mwHttpLogger = require('./src/middlewares/httpLogger');
const apiRoutes = require('./src/routes');

const app = express();

console.log(process.env.POLICY_MAPPING);
// For json format parsing
app.use(express.json());
// For cross platform availability
app.use(cors());
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// HTTP Request Logger
app.use(mwHttpLogger());

// API success/error handler middleware
app.use(mwResponse());

let dt = new Date();

app.get('/', (req, res) => {
  res.status(200).send(`Healthy since ${dt.toString()}`);
});

app.use('/mclos/api', apiRoutes);

app.use('*', function(req, res) {
  res.error(response(ENDPOINT_NOT_FOUND));
});

module.exports = app;