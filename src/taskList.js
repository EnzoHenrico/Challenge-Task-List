// Imports
require('tty-table');
const { renderTable } = require("./index.js");
const { timeElapsed } = require("./tools.js");
const DataBase = require("../models/db_data.js");

// List all or only pendent tasks 
async function listTask(all) {

    try {
        const setFilters = all ? {} : { Status: "Pendent" }
        let response, data

        response = await DataBase.find(setFilters, { _id: 0, ID: 1, Description: 1, Priority: 1, Created: 1, Status: 1 })

        // Sett time elapsed format in each object
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
    
    let data, low, medium, high
    let prioritys = []
    
    response = await DataBase.find({ Status: 'Pendent' }, { _id: 0, ID: 1, Description: 1, Priority: 1, Created: 1, Status: 1 })

    // Sett time elapsed format in each object
    data = response.map((table) => {

        return { ...table._doc, Created: timeElapsed(table.Created) }
    })
    
    low = data.find(obj => obj.Priority == 'low')
    medium = data.find(obj => obj.Priority == 'medium')
    high = data.find(obj => obj.Priority == 'high')

    if(high) prioritys.push(high)
    if(medium) prioritys.push(medium)
    if(low) prioritys.push(low)

    console.log(renderTable(prioritys))
}


module.exports = { listTask, listPriority };