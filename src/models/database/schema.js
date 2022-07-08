import mongoose from "mongoose";

// Create DB data model
const taskSchema = new mongoose.Schema({
  id: Number,
  created: Date,
  status: String,
  priority: String,
  description: String,
});

// Create DB Collection and set object model
export default mongoose.model("tasks", taskSchema);