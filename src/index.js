#!/usr/bin/env node
import Table from 'tty-table';
import dotenv from 'dotenv';
// import { Command } from 'commander';

// import inquirer from 'inquirer';
import Database from './models/database/connection.js';

dotenv.config();

await Database;

// Table constructor
function RenderTable(rows) {
  const options = {
    borderStyle: "solid",
    borderColor: "white",
    headerColor: "cyan",
    truncate: "...",
  };
  const header = [
    { value: "ID", headerColor: "yellow", color: "yellow" },
    { value: "Description" },
    { value: "Created" },
    { value: "Status" },
    { value: "Priority", headerColor: "red" }
  ];
  return Table(header, rows, options).render();
}

export default RenderTable;
