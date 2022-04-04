// Imports
const Table = require('tty-table');
const mongoose = require('mongoose');

// Database connection
const DB_CONNECTION = mongoose.connect('mongodb://127.0.0.1:27017/task_table');

// Table constructor
function renderTable(rows) {

    const options = {

        borderStyle: "solid",
        truncate: "...",
    }

    const header = [
        { value: "ID", headerColor: "white", color: "white" },
        { value: "Description", headerColor:"blue" },
        { value: "Created", headerColor:"blue" },
        { value: "Status", headerColor:"green" },
        { value: "Priority", headerColor:"red" }
    ]

    const out = Table(header, rows, options).render()

    return out
};

module.exports = { DB_CONNECTION, renderTable };
