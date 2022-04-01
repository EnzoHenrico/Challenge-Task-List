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

        let data

        if(all){

            data = await DataBase.find({}, {_id: 0, ID: 1, Description: 1, Priority: 1, Created: 1, Status: 1})
            console.log('-> Listing All!')
        }
        else{

            data = await DataBase.find({Status: 'Pendent'}, {_id: 0, ID: 1, Description: 1, Priority: 1, Created: 1, Status: 1})
            console.log('-> Listing Undone tasks')
        }
        
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

       await DataBase.updateOne({ID: id}, {Status: 'Done'})
    } catch (error) {
        
        console.log("Change Status: " + error)
    }
    console.log("-> Task: " + id + " is done!")
}

// List the olddest tasks, one of each priority
function listPriority(data) {



}

// Intern: Update IDs in order
async function updateIDs(){
    
    let count = 1
    const updateID = await DataBase.find({}, {_id: 1, ID: 1,});   
    
    for (let index of updateID){
        if (index.ID != i) await DataBase.updateOne({_id: index._id}, {ID: count}); i++
    }
    console.log(updateID)    
}

module.exports = { newTask, listTask, deleteTask, changeStatus };