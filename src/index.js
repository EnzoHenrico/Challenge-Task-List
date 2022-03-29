// Imports
const mongoose = require("../node_modules/mongoose");
const Table = require('../node_modules/tty-table');
const table = require("./cli.js")

console.log(table);

// Database connection
const DB_CONNECTION = mongoose.connect('mongodb://localhost:27017//task_table')
module.exports = DB_CONNECTION;

