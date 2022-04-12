// Imports
require('tty-table');
const { renderTable } = require('./index.js');
const DataBase = require("../models/db_data.js");


// Register new task on table
async function newTask(answers) {

    let Created = new Date()
    let ID = await DataBase.find().count() + 1

    try {
        // Inserção no banco de dados
        const values = {
            ID, Created,
            Description: answers.Description,
            Priority: answers.Priority,
            Status: "Pendent"
        }
        await DataBase.create(values);
        console.log(`\n-> Sucessfull Added!\n-> Task: ${values.Description}\n-> Priority: ${values.Priority}\n-> Date: ${values.Created}\n`);
    }
    catch (error) {

        console.log("add: " + error.message)
    }
}

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

// Delete task by id
async function deleteTask(itemID) {

    try {

        let id = Number(itemID.ID)

        await DataBase.deleteOne({ ID: id })
        updateIDs()

    } catch (error) {

        console.log("Delete: " + error)
    }

    console.log('-> Successfully deleted !')
}


// Cheange task status by ID
async function changeStatus(itemid) {

    let id = Number(itemid.ID)

    try {

        await DataBase.updateOne({ ID: id }, { Status: 'Done' })
    } catch (error) {

        console.log("Change Status: " + error)
    }
    console.log("-> Task: " + id + " is done!")
}

// List the olddest tasks, one of each priority
async function listPriority() {

    const order = ['high', 'medium', 'low']

    response = await DataBase.find({ Status: 'Pendent' }, { _id: 0, ID: 1, Description: 1, Priority: 1, Created: 1, Status: 1 })
    data = response.map((table) => {

        return { ...table._doc, Created: timeElapsed(table.Created) }
    })

    console.log('listo!')
    data = data.sort((a, b) => {

        let positionA = order.indexOf(a.Priority)
        let positionB = order.indexOf(b.Priority)

        return positionA - positionB
    })

    console.log(renderTable(data))
}


// Initial interface with command infos
function initalInfos() {

    let message =
        `---- Welcome to the Task Table ---- 
    Use can this commands here:
    -> "list" to show the table with pendent tasks
    -> "list all" to show pendent and done tasks
    -> "list priority" to show the oldest pendent tasks
    -> "add" to add a new task to the table
    -> "complete" to mark a pendent task as done
    -> "delete" to delete a task`

    console.log(message)

}

// Intern: Update IDs in order
async function updateIDs() {

    let count = 1
    const updateID = await DataBase.find({}, { _id: 1, ID: 1, });

    for (let index of updateID) {
        if (index.ID != count) await DataBase.updateOne({ _id: index._id }, { ID: count }); count++
    }
    console.log(updateID)
}

// Intern: Sett time elaspsed
function timeElapsed(created) {

    const date = new Date();

    let dateBefore = Date.parse(created)
    let dateNow = date.getTime()

    let minutes = Math.ceil((dateNow - dateBefore) / 60000)
    let hours = Math.ceil(minutes / 60)
    let days = Math.ceil(hours / 24)

    if (minutes < 59) {

        return minutes + "min"
    }
    else if (minutes > 59 && hours <= 23) {

        return hours + "h"
    }
    else if (days <= 30) {

        return days + "d"
    }
    else {

        return Math.ceil(days / 30) + " mounths"
    }
}


module.exports = { newTask, listTask, deleteTask, changeStatus, listPriority, initalInfos };