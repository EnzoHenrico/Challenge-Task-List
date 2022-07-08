import Database from "../models/database/schema.js";

// Cheange task status to 'Done'
async function completeTask(task) {
  const id = parseInt(task.id, 10);

  try {
    await Database.updateOne({ id }, { Status: 'Done' });
  } catch (error) {
    console.log(`DATABAS ERROR: ${error.message}`);
  }
  console.log(`-> Task: ${id} is done`);
}

export default completeTask;
