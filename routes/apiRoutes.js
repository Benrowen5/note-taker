//Requires
const fs = require('fs');
const {v4: uuidv4} = require('uuid');

const notes = require('../db/db');
const router = require('express').Router();

// GET "/api/notes" responds with all notes from the database
router.get('/notes', (req, res) => {
    res.json(notes);
});

// Post "/api/notes" responds with adding a note to database
router.post('/notes', (req, res) => {
// set new note's id using uuid
    req.body.id = uuidv4().toString();
    // create the new note object
    const newNote = req.body;
    // console.log(newNote);
    
    // add new note to notes array and update db.json
    notes.push(newNote);
    // console.log(notes);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));

    res.json(newNote);
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
router.delete('/notes/:id', (req, res) => {
    // console.log(req.params.id);
    
    // find index of object by id value
    const index = notes.map(object => object.id).indexOf(req.params.id);
    // console.log(index);

    // remove the selected note by index
    notes.splice(index, 1);

    // update notes array in db.json
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
      
    res.json(notes);
});

// export
module.exports = router;