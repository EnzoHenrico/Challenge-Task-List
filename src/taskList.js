// Imports
require('tty-table');
const { renderTable } = require("./index.js");
const { timeElapsed } = require("./tools.js");
const DataBase = require("../models/db_data.js");

// List all or only pendent tasks 
async function listTask(all) {

    try {
        const setFilters = all ? {} : { Status: 'Pendent' }
        let response, data

        response = await DataBase.find(setFilters, { _id: 0, ID: 1, Description: 1, Priority: 1, Created: 1, Status: 1 })
        data = response.map((table) => {

            return { ...table._doc, Created: timeElapsed(table.Created) }
        })

        console.log(renderTable(data))
    } catch (error) {

        console.log("list: " + error)
    }
}

// List the olddest tasks, one of each priority
async function listPriority() {

    const order = ['high', 'medium', 'low']
    let data, priority

    response = await DataBase.find({ Status: 'Pendent' }, { _id: 0, ID: 1, Description: 1, Priority: 1, Created: 1, Status: 1 })
    
    // need to list just one of each priority 
    data = response.map((table) => {

        return { ...table._doc, Created: timeElapsed(table.Created) }
    })

    console.log('listado por prioridade!')
    data = data.sort((a, b) => {

        let positionA = order.indexOf(a.Priority)
        let positionB = order.indexOf(b.Priority)

        return positionA - positionB
    })

    console.log(renderTable(data))
}
module.exports = { listTask, listPriority };