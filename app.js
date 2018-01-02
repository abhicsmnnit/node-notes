const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');


var argv = yargs.argv;
var command = process.argv[2];

console.log(`Command: ${command}`);
// console.log('Yargs:', argv);


if ('add' === command) {
    notes.addNotes(argv.title, argv.body);
} else if ('read' == command) {
    console.log('Reading the note');
} else if ('remove' === command) {
    console.log('Removing the note');
} else if ('list' === command) {
    console.log('Listing all notes');
} else {
    console.log('Command not recognized');
}