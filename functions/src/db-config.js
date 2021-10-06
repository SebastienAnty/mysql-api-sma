const mysql = require("mysql2")
const { credentials } = require("./db-credentials")

exports.dbConnection = mysql.createConnection(credentials);
