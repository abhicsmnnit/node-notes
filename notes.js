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
    console.log('Reading note', title);
};

var removeNote = (title) => {
    var notes = getAllNotes();
    var remainingNotes = notes.filter((note) => note.title !== title);
    saveNotes(remainingNotes);

    return notes.length !== remainingNotes.length;
};

var listAllNotes = () => {
    console.log('Fetching all notes');
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

module.exports = {
    addNote,
    readNote,
    removeNote,
    listAllNotes
};