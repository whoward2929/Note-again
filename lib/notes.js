const fs = require('fs');
const path = require('path');
function createNewNote(body, notesArray) {
    const note = body;

    notesArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

return note;
};

function deleteNote(id, notesArray) {
    for (let i = 0; i < notesArray.length; i++) {
        if (notesArray[i].id == id) {
            notesArray.splice(i, 1);
        };
    };

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
};

module.exports = {
    createNewNote,
    deleteNote
};