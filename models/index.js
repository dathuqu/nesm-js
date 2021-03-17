const connection = require("../config/db.js");
const Sequelize = require("sequelize");

const db = {};
db.Sequelize = Sequelize;
db.sequelize = connection;

db.user = require("./user.js")(connection, Sequelize);

module.exports = db;
