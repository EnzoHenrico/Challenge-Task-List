// Imports
import 'tty-table';

import RenderTable from "../index.js";
import Database from "../models/database/schema.js";

// List all or only pendent tasks 
async function listTask(pendent) {
  try {
    const filter = pendent ? {status: "Pendent"} : {}
    const dbData = await Database.find(
      filter, 
      { _id: 0, 
        id: 1, 
        description: 1, 
        priority: 1, 
        created: 1, 
        status: 1, 
      },
    ); 
    // Set time elapsed format for each object
    const tableData = dbData.map((table) => ({ ...table._doc, created: timeElapsed(table.created) }));
    console.log(RenderTable(tableData));
  } catch (error) {
    console.log(`ERROR: ${error.message}`);
  };
};

// List the olddest tasks, one of each priority
async function listPriority() {  
  try {
    const dbData = await find(
      { Status: 'Pendent' }, 
      { _id: 0, 
        id: 1, 
        description: 1, 
        priority: 1, 
        created: 1, 
        status: 1 
      });
    // Sett time elapsed format in each object
    const table = dbData.map((table) => ({ ...table._doc, created: timeElapsed(table.created) }));
    const high = table.find(obj => obj.priority == 'high');
    const medium = table.find(obj => obj.priority == 'medium');
    const low = table.find(obj => obj.priority == 'low');

    let prioritys = [];
  
    if(high) {
      prioritys.push(high);
    };
    if(medium) {
      prioritys.push(medium);
    }; 
    if(low) {
      prioritys.push(low);
    };

  } catch (error) {
    console.log(`DATABASE ERROR: ${error.message}`);
  }
  console.log(RenderTable(prioritys));
}

// Sett time elaspsed since task was created
function timeElapsed(created) {
  const dateBefore = Date.parse(created);
  const dateNow = new Date().getTime();

  const minutes = Math.ceil((dateNow - dateBefore) / 60000);
  const hours = Math.ceil(minutes / 60);
  const days = Math.ceil(hours / 24);
  const months = Math.ceil(days / 30);

  if (minutes <= 59) {
    return`${minutes} minutes"`;
  }
  if (minutes > 59 && hours <= 23) {
  return `${hours} hours`;
  }
  if (days <= 30) {
    return `${days} days`;
  }
    return `${months} months`;
};

export { listTask, listPriority };
