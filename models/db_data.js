const mongoose = require("../node_modules/mongoose");

// Create DB data model
const taskSchema = new mongoose.Schema({
    
    id: Number,
    date: Date,
    dateString: String,
    status: Boolean,
    priority: String, 
    description: String,
});

// Create DB Collection and set object model
module.exports = mongoose.model("tasks", taskSchema);