const Note = require('../models/note')

const getNotes = async (req, res) => {
    //find the notes
    const notes = await Note.find()

    //respond with them
    res.json({notes})
}

const getNoteById = async (req, res) => {
    // get the id off the url
    const noteId = req.params.id

    // find the note using that id
    const note = await Note.findById(noteId)

    // respond with the note
    res.json({note})
}

const postNote = async (req, res) => {
    // get the sent in data off request body
    const {title, body} = req.body

    // create a note with it
    const note = await Note.create({
        title,
        body
    })

    // respond with the new note
    res.json({note})
}

const updateNote = async (req, res) => {
    // get the id off the url
    const noteId = req.params.id

    // get the data off the req body
    const {title, body} = req.body

    // find and update the record
    await Note.findByIdAndUpdate(noteId, {
        title,
        body
    })

    // find updated note
    const note = await Note.findById(noteId)

    // respond with it
    res.json({note})

}

const deleteNote = async (req, res) => {
    //get the id ooff url
    const noteId = req.params.id

    // delete
    await Note.deleteOne({id: noteId})

    //respond
    res.json({success: "Note deleted"})
}

module.exports = {
    getNotes,
    getNoteById,
    postNote,
    updateNote,
    deleteNote
}