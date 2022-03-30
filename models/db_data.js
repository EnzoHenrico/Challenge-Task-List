const mongoose = require("../node_modules/mongoose");

// Create DB data model
const taskSchema = new mongoose.Schema({
   
    date: Date,
    id: String,
    status: Boolean,
    priority: String, 
    description: String,
});

// Create DB Collection
module.exports = mongoose.model("tasks", taskSchema);