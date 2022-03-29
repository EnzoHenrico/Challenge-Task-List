// imports
const Data = require("../models/db_data.js");
const Table = require('../node_modules/tty-table');


// ↓ TABLE HEADER ↓
let header = [{

    value: "ID",
    headerColor: "cyan",
    align: "left",

},
{

    value: "Task",
    headerColor: "cyan",
    align: "left",

},
{

    value: "Created",
    headerColor: "cyan",
    align: "left",
},
{

    value: "Status",
    headerColor: "cyan",
    align: "left",
},
{

    value: "Priority",
    headerColor: "cyan",
    align: "left",
},
]


// ↓ TABLE ROWS ↓
const rows = [{

ID: 1,//Data.id
Task: 'Dinner',//Data.description
Created: '10/02/2022',//Data.date
Status: 'pendent',//Data.status
Priority: 'High',//Data.priority

}]

// ↓  TABLE OPTIONS ↓
const options = {

    borderStyle: "solid",
    truncate: "..."
};


// Construct table
const outTable = Table(header, rows, options).render();

exports.modules = outTable;
