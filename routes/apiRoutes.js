//Requires
const fs = require('fs');
const path = require('path');

const {notes} = require('../db/db');

const router = require('express').Router();

// const {saveNote} = require('../public/assets/js/index');

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
    // add new note to notes array
    notes.push(newNote);

    res.json(newNote);
})

// DELETE "/api/notes" deletes the note with an id equal to req.params.id


// export

module.exports = router;