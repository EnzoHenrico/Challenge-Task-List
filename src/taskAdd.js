// Imports
const DataBase = require("../models/db_data.js");

// Register new task on table
async function newTask(answers) {

    let Created = new Date()
    let ID = await DataBase.find().count() + 1

    try {
        // align inputs and parameters
        const values = {
            ID, Created,
            Description: answers.Description,
            Priority: answers.Priority,
            Status: "Pendent"
        }
        // Insert in Database
        await DataBase.create(values);
        console.log(`\n-> Sucessfull Added!\n-> Task: ${values.Description}\n-> Priority: ${values.Priority}\n-> Date: ${values.Created}\n`);
    }
    catch (error) {

        console.log("add: " + error.message)
    }
}

module.exports = { newTask };