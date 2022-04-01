const mongoose = require("mongoose");

// Create DB data model
const taskSchema = new mongoose.Schema({

    ID: Number,
    Created: String,
    Status: String,
    Priority: String,
    Task: String,

});

// Create DB Collection and set object model
module.exports = mongoose.model("tasks", taskSchema);