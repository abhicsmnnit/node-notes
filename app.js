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
        notes.printNote(note);
    }
    else {
        console.log('Note title taken');
    }

} else if (COMMANDS.READ_NOTE == command) {
    
    var note = notes.readNote(argv.title);
    if (note) {
        console.log('Note details');
        notes.printNote(note);
    }
    else {
        console.log('Note not found');
    }

} else if (COMMANDS.REMOVE_NOTE === command) {
    
    var isNoteRemoved = notes.removeNote(argv.title);
    
    console.log(isNoteRemoved ? 'Note removed' : 'Note not found');

} else if (COMMANDS.LIST_ALL_NOTES === command) {
    
    notes.listAllNotes();

} else {
    
    console.log('Command not recognized');

}