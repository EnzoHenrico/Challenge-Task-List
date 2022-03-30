// Imports
const mongoose = require("../node_modules/mongoose");
const Table = require('../node_modules/tty-table');
const { Params } = require("./cli.js")

// Database connection
const DB_CONNECTION = mongoose.connect('mongodb://localhost:27017//task_table')
module.exports = DB_CONNECTION;

//set table parameters
const params = new Params();
const header = params.createHeader()
const rows = params.createRows()
const options = params.createOptions()

// render and display CLI table
const out = Table(header, rows, options).render();
console.log(out);