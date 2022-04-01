// imports
const Table = require('tty-table');

// Table format
function renderTable(rows) {

    const options = {

        borderStyle: "solid",
        borderColor: "green",
        truncate: "...",
    }

    const header = [
        { value: "ID", headerColor: "white" },
        { value: "Task" },
        { value: "Created" },
        { value: "Status" },
        { value: "Priority" }]

    const out = Table(header, rows, options).render()

    return out
}

module.exports = { renderTable };
