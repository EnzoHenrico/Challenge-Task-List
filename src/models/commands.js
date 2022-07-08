import { Command } from 'commander';
import Inquirer  from 'inquirer';

import addTask from '../services/add.js';
import deleteTask from '../services/delete.js';
import completeTask from '../services/update.js';
import { listTask, listPriority } from '../services/list.js';

const Program = new Command();
const prompt = Inquirer.prompt();

// Inquier Questions 
const addQuestions = [
  {
    type: 'input',
    name: 'description',
    message: 'Task description: '
  },
  {
    type: 'list',
    name: 'priority',
    message: 'Tasks priority level: ',
    choices: ['low', 'medium', 'high'],
  },
];
const deleteQuestion = [
  {
    type: 'input',
    name: 'id',
    message: 'Which task do you want delete? '
  },
];
const completeQuestion = [
  {
  type: 'input',
  name: 'id',
  message: 'Which task do you want complete? '
  },
];

// Commander Atribuitions

Program // Info about the program
.name('task-table')
.description('CLI table with tasks')
.version('1.0.0');

// Find tasks in DB and render table

Program // List undone Tasks
.command('list')
.description('Reder table with your tasks')
//list undone tasks
.option('-u, --undone', 'list undone tasks')
// list all tasks
.option('-a, --all', 'list all')
// lsit priority
.option('-p, --priority', 'lsit priority')
.action((cmd) => {
  // List function recive 'pendent' true
  if (cmd.undone) listTask(true);
  // List function recive 'pendent' false
  if (cmd.all) listTask(false);
  // Will list only tasks with high priority tag
  if (cmd.priority) listPriority();
});

Program // Add a task on DB
.command('add')
.alias('a')
.description('Add a new task!')
.action(() => {
  prompt(addQuestions).then(addTask);
});

Program // Delete by ID
.command('delete <number>')
.alias('d <number>')
.description('Delete task by ID')
.action(() => {
  prompt(deleteQuestion).then(deleteTask);
});

Program // Complete by ID
.command('complete <number>')
.alias('c <number>')
.description('compllete task by ID')
.action(() => {
  prompt(completeQuestion).then(completeTask);
});

Program.parse(process.argv);
