const messages = {

    // list of all valid commands
    help: `All valid entrys:
    -> "add task <description> <priority>": Create a new task! Recive 2 paramenters.
    -> "list <option>": List tasks on table. Recive a option <"all" or "pendents">
    `,
    
    error: {
        //invalid command error
        invalidCmd: "Invalid Command! To show valid entrys, please type: '--help'",
    },
}

exports.messages = messages; 