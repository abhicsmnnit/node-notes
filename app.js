const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');
const COMMANDS = require('./note-commands');


var argv = yargs.argv;
var command = argv._[0];

console.log(`Command: ${command}`);

if (COMMANDS.ADD_NOTE === command) {

    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created');
        console.log('--');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    }
    else {
        console.log('Note title taken');
    }

} else if (COMMANDS.READ_NOTE == command) {
    
    notes.readNote(argv.title);

} else if (COMMANDS.REMOVE_NOTE === command) {
    
    notes.removeNote(argv.title);

} else if (COMMANDS.LIST_ALL_NOTES === command) {
    
    notes.listAllNotes();

} else {
    
    console.log('Command not recognized');

}