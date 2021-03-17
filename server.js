require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require('morgan');
const environment = process.env.NODE_ENV;
const app = express();
const router = express.Router();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/index.js');
const db = require("./models");


if (environment === 'development') {
  app.use(logger('dev'));
  db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });
} else {
  db.sequelize.sync();
}

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to HRM application!" });
});

app.use('/api/v1', routes(router));

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
