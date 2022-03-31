// imports
const Data = require("../models/db_data.js").default;

class tableParams {

    // ↓ TABLE ROWS ↓
    createRows(info) {

        const rows = [{

            ID: 1,
            Task: 'Dinner',
            Created: '10/02/2022',
            Status: 'pendent',
            Priority: 'High',

        }]

        // {
        //     "_id": {
        //         "$oid": "6245aea99242e6e901b8f812"
        //     },
        //     "date": {
        //         "$date": "2022-03-31T13:37:45.000Z"
        //     },
        //     "id": "3",
        //     "priority": "medium",
        //     "description": "task3",
        //     "__v": 0
        // }

        return rows
    }

    // ↓ TABLE HEADER ↓
    createHeader() {

        const header = [{value: "ID",headerColor: "white",},
        {value: "Task"},{value: "Created"},{value: "Status"},{value: "Priority"}];

        return header
    }

    // ↓  TABLE OPTIONS ↓
    createOptions() {

        const options = {

            borderStyle: "solid",
            truncate: "..."
        };

        return options
    }
}

exports.Params = tableParams;
