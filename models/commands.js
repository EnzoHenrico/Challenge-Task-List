// Imports
const { Run }= require('../src/functions.js');
const { Command } = require('commander');

const run = new Run();
const program = new Command();

// Commander parameters
program
    .version('1.0.0')
    .name('task-table')
    .description('CLI table with tasks')

// Sett commands with commander.js
program
    .command('add <taskName> <priority>')
    .alias('a')
    .description('Add a new task!')
    .action((description, priority)=>{
        run.newTask({description, priority});
    })

    program
    .command('list <option>')
    .alias('l')
    .description('list tasks')
    .action((option)=>{
        run.listTask(option);
    })

program.parse(process.argv);

// commands
const commands = {

    'list': {
        'index': index,
        'pendent':read,
        'all': read,
    },

    'add':{
        'index': index,
        'task':create,
    },
    'change': {
        'index': index,
        'task': update,
    }
}