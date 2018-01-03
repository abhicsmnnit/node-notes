const notes = require('./notes');
const COMMANDS = require('./note-commands');
const argvProcessor = require('./argv-processor');

const argv = argvProcessor.argv;
const command = argvProcessor.command;

if (COMMANDS.ADD_NOTE === command) {

    const note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created');
        notes.printNote(note);
    }
    else {
        console.log('Note title taken');
    }

} else if (COMMANDS.READ_NOTE === command) {
    
    const note = notes.readNote(argv.title);
    if (note) {
        console.log('Note details');
        notes.printNote(note);
    }
    else {
        console.log('Note not found');
    }

} else if (COMMANDS.REMOVE_NOTE === command) {
    
    const isNoteRemoved = notes.removeNote(argv.title);
    
    console.log(isNoteRemoved ? 'Note removed' : 'Note not found');

} else if (COMMANDS.LIST_ALL_NOTES === command) {
    
    const allNotes = notes.listAllNotes();
    console.log(`You have ${allNotes.length} note(s).`);
    allNotes.forEach(note => notes.printNote(note));

} else {
    
    console.log(`${command}: Command not recognized`);

}