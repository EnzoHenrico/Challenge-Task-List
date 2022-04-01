// Imports
require('./index.js');
require('tty-table');
const message = require('../models/messages.js')
const { renderTable } = require('./cli.js')
const DataBase = require("../models/db_data.js");


// Register new task on table
async function newTask(answers) {

    // Setta o padrão de Data e ID
    const dateString = () => {

        let date = new Date()
        return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
    }

    let ID = await DataBase.find().count() + 1

    try {

        // Inserção no banco de dados
        const values = {
            ID,
            Task: answers.description,
            Priority: answers.priority,
            Created: dateString(),
            Status: "Pendent"
        }
        await DataBase.create(values);

        console.log(message.added)
    }
    catch (error) {

        console.log("add: " + error.message)
    }
}


// List all or only pendent tasks 
async function listTask() {

    try {

        const data = await DataBase.find({}, {
            _id: 0,
            ID: 1,
            Task: 1,
            Priority: 1,
            Created: 1,
            Status: 1
        });
        console.log(renderTable(data))
    } catch (error) {

        console.log("list: " + error)
    }
}

// Delete task by id
async function deleteTask(id) {

    try {

        await DataBase.deleteOne({ ID: id });
    } catch (error) {

        console.log("remove: " + error)
    }

    console.log(message.deleted)
}

// List the olddest tasks, one of each priority
function listPriority(data) {



}

// Cheange task status 
function completTask(status) {



}


module.exports = { newTask, listTask, deleteTask };