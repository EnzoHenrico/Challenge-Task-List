// Imports
const Table = require('tty-table');
const mongoose = require('mongoose');
const { renderTable } = require('./cli.js');

// Database connection
const DB_CONNECTION = mongoose.connect('mongodb://127.0.0.1:27017/task_table');
module.exports = DB_CONNECTION;


//set table parameters
// const params = new Params();
// const header = params.createHeader();
// const rows = params.createRows();
// const options = params.createOptions();

// render and display CLI table
const render = false;

if (render) {

    const response = renderTable()

    console.log(response)

};