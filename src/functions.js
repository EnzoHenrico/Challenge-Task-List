// Imports
const { DB_CONNECTION } = require('./');
const Data = require("../models/db_data.js");
const messages = require("../models/messages.js")

class Run {

    // Register new task on table
    newTask(description, priority) {

        Data.create(task).then((task) => {

            console.info(`new Task added: ${description}, priority = ${priority}`)
            DB_CONNECTION.close()
        })
    }


    // List all or only pendent tasks 
    listTask(task, option) {

        // Make case insensitive
        const search = new RegExp(task, 'i')

        // List all or pendent
        if (option == 'all') {

            return console.log("showing all tasks")
        }
        if (option == 'pendents') {

            return console.log("showing pendents")
        }
        else {

            throw messages.error.invalidCmd
        }
    }


    // List the olddest tasks, one of each priority
    listPriority(data) {



    }

    // Cheange task status 
    settStatus(status) {



    }

    // Delete task by id
    deleteTask(data) {



    }
}

exports.Run = Run;