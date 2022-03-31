// imports
const Data = require("../models/db_data.js");

class tableParams {

    // ↓ TABLE HEADER ↓
    createHeader() {

        const header = [{

            value: "ID",
            color: "green",

        },
        {

            value: "Task",
        },
        {

            value: "Created",
        },
        {

            value: "Status",
        },
        {

            value: "Priority",
            color: "red",
        },
        ];

        return header

    }

    // ↓ TABLE ROWS ↓
    createRows() {

        const rows = [{

            ID: 1,
            Task: 'Dinner',
            Created: '10/02/2022',
            Status: 'pendent',
            Priority: 'High',

        }]

        return rows
    }

    // ↓  TABLE OPTIONS ↓
    createOptions() {

        const options = {

            borderStyle: "solid",
            borderColor: "green",
            truncate: "...",
        };

        return options
    }
}

exports.Params = tableParams;
