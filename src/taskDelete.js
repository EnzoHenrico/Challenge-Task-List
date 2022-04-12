// Imports
const { updateIDs } = require("./tools.js");
const DataBase = require("../models/db_data.js");

// Delete task by id
async function deleteTask(itemID) {

    try {

        let id = Number(itemID.ID)

        await DataBase.deleteOne({ ID: id })
        updateIDs()
        console.log('-> Successfully deleted !')
    } catch (error) {

        console.log("Delete: " + error)
    }
}

module.exports = { deleteTask };