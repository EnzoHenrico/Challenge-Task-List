// Import  dependences 
const mongoose = require("../node_modules/mongoose");

//Import Models
const Data = require("../models/db_data.js");

// Database connection
const DB_CONNECTION = mongoose.connect('mongodb://localhost:27017//task_table')
module.exports = DB_CONNECTION;




