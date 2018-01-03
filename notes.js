
var addNote = (title, body) => {
    console.log('Adding note', title, body);
};

var readNote = (title) => {
    console.log('Reading note', title);
};

var removeNote = (title) => {
    console.log('Removing note', title);
};

var listAllNotes = () => {
    console.log('Fetching all notes');
};

module.exports = {
    addNote,
    readNote,
    removeNote,
    listAllNotes
};