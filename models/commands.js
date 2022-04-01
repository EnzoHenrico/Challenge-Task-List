#!/usr/bin/env node
// Imports
const { newTask, listTask, deleteTask } = require('../src/functions.js');
const { Command } = require('commander');
const { prompt } = require('inquirer')

const program = new Command();

const addQuestions = [
    {
        type: 'input',
        name: 'description',
        message: 'Task description: '

    },
    {
        type: 'input',
        name: 'priority',
        message: 'Tasks priority level: '

    }]

const listQuestions = [
    {
        type: 'input',
        name: 'listOption',
        message: 'list all?'

    }]

const deleteQuestion = [
    {
        type: 'input',
        name: 'deleteOption',
        message: 'Which task do you want delete? '

    }]


// Commander props
program
    .name('task-table')
    .description('CLI table with tasks')
    .version('1.0.0')


// Add a task on DB
program
    .command('add')
    .alias('a')
    .description('Add a new task!')
    .action(() => {
        prompt(addQuestions).then(newTask);
    })

// Find data on DB
program
    .command('list')
    .alias('l')
    .description('list tasks')
    .action(() => listTask());

//.action(() => prompt(listQuestions).then(answers => listTask(answers)));

// Delete by ID
program
    .command('delete')
    .alias('d')
    .description('Delete task by ID')
    .action(() => {
        prompt(deleteQuestion).then(deleteTask);
    })

program.parse(process.argv);
