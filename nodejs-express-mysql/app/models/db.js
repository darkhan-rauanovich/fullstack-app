const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// create connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
})

// open the mysql connection
connection.connect(error => {
  if(error) throw error;

  console.log("Successfully conected to the database");
})

module.exports = connection;