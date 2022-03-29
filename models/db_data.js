const mongoose = require("../node_modules/mongoose");

const taskSchema = mongoose.Schema({
   
    date: {type: Date},
    id: { type: Number},
    status: {type: Boolean},
    priority: {type: String}, 
    description: { type: String}
})

module.exports = taskSchema;
