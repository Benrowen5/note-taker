//Requires
const router = require('express').Router();
const {notes} = require('../db/db');

// GET "/api/notes" responds with all notes from the database
router.get('/notes', (req, res) => {
    res.json(notes);
});

// Post "/api/notes" responds with adding a note to database
router.post('/notes', (req, res) => {
    let newNote = req.body;
    res.json(newNote);
    
})

// DELETE "/api/notes" deletes the note with an id equal to req.params.id


// export

module.exports = router;