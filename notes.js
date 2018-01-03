const fs = require('fs');

var addNote = (title, body) => {
    var notes = getAllNotes();
    var note = {title, body};

    var duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var readNote = (title) => {
    var notes = getAllNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
};

var removeNote = (title) => {
    var notes = getAllNotes();
    var remainingNotes = notes.filter((note) => note.title !== title);
    saveNotes(remainingNotes);

    return notes.length !== remainingNotes.length;
};

var listAllNotes = () => {
    return getAllNotes();
};

function saveNotes(notes) {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

function getAllNotes() {
    try {
        var notesContentAsString = fs.readFileSync('notes-data.json', 'utf8');
        return JSON.parse(notesContentAsString);
    } catch (e) {
        return [];
    }
}

function printNote(note) {
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNote,
    readNote,
    removeNote,
    listAllNotes,
    printNote
};