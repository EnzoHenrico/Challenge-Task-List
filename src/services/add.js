import Database from "../models/database/schema.js";

// Register new task on table
async function addTask(answers) {
  
  try {
    // align inputs and parameters
    const id = await Database.find().count() + 1;
    const created = new Date();
    const { description, priority } = answers;
    const status = "Pendent"
    // Insert in Database
    await Database.create({ id, created, description, priority, status });
  } catch (error) {
    console.log(`DATABASE ERROR: ${error.message}`);
  }
  
  return console.log(
    `\n-> Sucessfull Added!
    \n-> Task: ${description}
    \n-> Priority: ${priority}
    \n-> Date: ${created}\n`);
}

export default addTask;
