// Imports
import Database from "../models/database/schema.js";

// Delete task by id
async function deleteTask(task) {
  try {
    await Database.deleteOne({ id: parseInt(task.id, 10) });
    const dbData = await Database.find({}, { _id: 1, ID: 1, });

    let count = 1;
    for (let index of dbData) {
      if (dbData.id != count){
        await Database.updateOne({ _id: index._id }, { id: count }); 
        count++;
      }  
    }
  } catch (error) {
    console.log("DATABASE ERROR: " + error.message);
  }
  console.log('-> Successfully deleted!');
}

export default deleteTask;
