#!/usr/bin/env node
// Imports
const { newTask, listTask, deleteTask, changeStatus, listPriority, initalInfos } = require('../src/functions.js');
const { Command } = require('commander');
const { prompt } = require('inquirer');

const program = new Command();

// Inquier Questions 
const addQuestions = [
    {
        type: 'input',
        name: 'Description',
        message: 'Task description: '

    },
    {
        type: 'list',
        name: 'Priority',
        message: 'Tasks priority level: ',
        choices: ['low', 'medium', 'high'],

    }];

const deleteQuestion = [
    {
        type: 'input',
        name: 'ID',
        message: 'Which task do you want delete? '

    }];

const completeQuestion = [
    {
        type: 'input',
        name: 'ID',
        message: 'Which task do you want complete? '

    }];

// Commander Atribuitions

program // Info about the program
    .name('task-table')
    .description('CLI table with tasks')
    .version('1.0.0')
    .action(() => initalInfos())


// Find tasks in DB and render table

// List undone Tasks
const list = program

    .command('list')
    .alias('l')
    .description('list undone tasks')
    .action(() => listTask(false));

// list all tasks
list
    .command('all')
    .description('list all tasks')
    .action(() => listTask(true));

// lsit priority
list
    .command('priority')
    .description('list priority')
    .action(() => listPriority());

// Add a task on DB
program
    .command('add')
    .alias('a')
    .description('Add a new task!')
    .action(() => {
        prompt(addQuestions).then(newTask)
    });

// Delete by ID
program
    .command('delete')
    .alias('d')
    .description('Delete task by ID')
    .action(() => {
        prompt(deleteQuestion).then(deleteTask)
    });

// complete by ID
program
    .command('complete')
    .alias('c')
    .description('compllete task by ID')
    .action(() => {
        prompt(completeQuestion).then(changeStatus);
    });

program.parse(process.argv);
