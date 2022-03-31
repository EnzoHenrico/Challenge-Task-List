// Imports
const { DB_CONNECTION } = require('./');
const DataBase = require("../models/db_data.js");


// Register new task on table
async function newTask(answers) {

    // Setta o padrão de Data e ID
    const autoIncrement = info => {
        let nowDate = new Date()
        let date = (day, month, year)=>{
        
            day = nowDate.getDay()
            month = nowDate.getMonth()
            year = nowDate.getFullYear()
    
            return `${day}/${month}/${year}`
        }
    return info = {
            id: answers.id,
            dateStr: date(),
        }    
    }

    let newId = autoIncrement().id;
    let dateStr = autoIncrement().dateStr;
    let task = answers.description;
    let level = answers.priority;
    
    try {
        // Inserção no banco de dados
        const insert = await DataBase.create({
            id: newId,
            dateString: dateStr,
            description: task, 
            priority: level,
            status: false
        });
        
        console.log(`\n-> Sucessfull Added!\n-> ID: ${newId}\n-> Task: ${task}\n-> Priority: ${level}\n-> Date: ${dateStr}\n`);                  
    } 
    catch (error) {
        
        console.log(error.message);
    }   
}


// List all or only pendent tasks 
async function listTask(option) {
   
    try{
        const findData = await DataBase.find()
        .then(data => {
            console.info(data)
        })
        
    } catch (error){

        console.log(error)
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