// Imports
const { DB_CONNECTION } = require('./');
const DataBase= require("../models/db_data.js");
const messages = require("../models/messages.js")


    // Register new task on table
    async function newTask(parameters) {

        let task = parameters.description;
        let level = parameters.priority;

        try {

            const created = await DataBase.create({description: task, priority: level});
            console.log(created);
        } catch (error) {

            console.log(error.message);
        }
        console.log(`task added: ${task} with ${level} priority`);
    }

    // List all or only pendent tasks 
    function listTask(option) {

        if (option = "all"){
            console.info("listing all tasks") 
        }
       else {
           console.info("not a option!")
    
        }
    }

    // List the olddest tasks, one of each priority
    function listPriority(data) {



    }

    // Cheange task status 
    function settStatus(status) {



    }

    // Delete task by id
    function  deleteTask(data) {



    }

    // render table interface
    function renderTable(){


    }

module.exports = {newTask, listTask}