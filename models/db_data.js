const mongoose = require("mongoose");

// Create DB data model
const taskSchema = new mongoose.Schema({

    ID: Number,
    Created: Date,
    Status: String,
    Priority: String,
    Description: String,

});

// Create DB Collection and set object model
module.exports = mongoose.model("tasks", taskSchema);