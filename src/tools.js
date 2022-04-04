// Imports
const DataBase = require("../models/db_data.js");

// Tool: Update IDs in order
async function updateIDs() {

    let count = 1
    const updateID = await DataBase.find({}, { _id: 1, ID: 1, })

    for (let index of updateID) {
        if (index.ID != count) await DataBase.updateOne({ _id: index._id }, { ID: count }); count++
    }
};

// Tool: Sett time elaspsed
function timeElapsed(created) {

    const date = new Date()

    let dateBefore = Date.parse(created)
    let dateNow = date.getTime()

    let minutes = Math.ceil((dateNow - dateBefore) / 60000)
    let hours = Math.ceil(minutes / 60)
    let days = Math.ceil(hours / 24)

    if (minutes < 59) {

        return minutes + " minutes"
    }
    else if (minutes > 59 && hours <= 23) {

        return hours + " hours"
    }
    else if (days <= 30) {

        return days + " days"
    }
    else {

        return Math.ceil(days / 30) + " mounths"
    }
};

module.exports = { timeElapsed, updateIDs };