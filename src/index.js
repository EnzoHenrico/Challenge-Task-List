// Imports
const Table = require('tty-table');
const mongoose = require('mongoose');

// Database connection
const DB_CONNECTION = mongoose.connect('mongodb://127.0.0.1:27017/task_table');

// Table constructor
function renderTable(rows) {

    const options = {

        borderStyle: "solid",
        borderColor: "green",
        truncate: "...",
    }

    const header = [
        { value: "ID", headerColor: "white" },
        { value: "Description" },
        { value: "Created" },
        { value: "Status" },
        { value: "Priority" }]

    const out = Table(header, rows, options).render()

    return out
}

module.exports = { renderTable };
