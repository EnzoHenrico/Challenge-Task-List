#!/usr/bin/env node
// Imports
const { newTask, listTask } = require('../src/functions.js');
const { Command } = require('commander');
const { prompt } = require('inquirer')

const program = new Command();

const addQuestions =[
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
    message: 'list option'

}]

// Commander props
program
    .name('task-table')
    .description('CLI table with tasks')
    .version('1.0.0')


// Sett commands with Commander
 program
    .command('add')
    .alias('a')
    .description('Add a new task!')
    .action(()=>{
        prompt(addQuestions).then(answers => newTask(answers));
    })

    program
    .command('list')
    .alias('l')
    .description('list tasks')
    .action(()=>{
        prompt(listQuestions).then(answers => listTask(answers));
    });

program.parse(process.argv);