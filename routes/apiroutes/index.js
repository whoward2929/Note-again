const router = require('express').Router();
const { v4: uuidv4 } = require('uuid')

const { createNewNote, deleteNote } = require('../../lib/notes.js');
const { notes } = require('../../db/db.json');


router.get('/notes', (req, res) => {
    let results = notes;

    res.json(results);
});


router.post('/notes', (req, res) => {
    req.body.id = uuidv4();

    const note = createNewNote(req.body, notes);

    res.json(note);
});


router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params.id, notes);

    res.json(notes);
});

module.exports = router;