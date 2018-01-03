const yargs = require('yargs');

const COMMANDS = require('./note-commands');

const title = {
    describe: 'Title of the note',
    demandOption: true,
    alias: 't'
};

const body = {
    describe: 'Body/content of the note',
    demandOption: true,
    alias: 'b'
};

const argv = yargs
            .command(
                COMMANDS.ADD_NOTE,
                'Add a new note',
                { title, body })
            .command(
                COMMANDS.REMOVE_NOTE,
                'Remove an existing note',
                { title })
            .command(
                COMMANDS.READ_NOTE,
                'Read an existing note',
                { title })
            .command(
                COMMANDS.LIST_ALL_NOTES,
                'List all notes')
            .help()
            .argv;

module.exports = { 
    argv,
    command: argv._[0]
};