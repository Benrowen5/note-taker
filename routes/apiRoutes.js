//Requires
const fs = require('fs');
const path = require('path');

const {notes} = require('../db/db');

const router = require('express').Router();

// GET "/api/notes" responds with all notes from the database
router.get('/notes', (req, res) => {
    res.json(notes);
});

// Post "/api/notes" responds with adding a note to database
router.post('/notes', (req, res) => {
// set new note's id based on the current length of notes array
    req.body.id = notes.length.toString();
    // create a new const for the note object
    const newNote = req.body;
    console.log(newNote);
    // add new note to notes array
    notes.push(newNote);
    // fs.writeFileSync('./db/db.json', JSON.stringify(notes));

    res.json(newNote);
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
router.delete('/notes/:id', (req, res) => {
    console.log(req.params.id);
    const deleted = notes[req.params.id]
    console.log(deleted);

    // remove the selected note by id
    notes.splice(deleted,1);
       
    res.json(notes);
});

// export

module.exports = router;