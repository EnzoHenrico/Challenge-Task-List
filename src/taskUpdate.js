// Imports
const DataBase = require("../models/db_data.js");

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

module.exports = { changeStatus };