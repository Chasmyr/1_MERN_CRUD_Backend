//load env
if (process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}

// Import dependencies
const express = require('express')
const cors = require('cors')
const connectToDb = require('./config/connectToDb')
const notesController = require('./controllers/notesController')

// create an express app
const app = express()

// configure express app
app.use(express.json())
app.use(cors())

// connect to data base
connectToDb()

//routing

app.get('/notes', notesController.getNoteById)
app.get('/notes/:id', notesController.getNoteById)
app.post('/notes', notesController.postNote)
app.put('/notes/:id', notesController.updateNote)
app.delete('/notes/:id', notesController.deleteNote)

//start server
app.listen(process.env.PORT)