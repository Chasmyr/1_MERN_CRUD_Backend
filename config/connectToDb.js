//load env
if (process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}

const mongoose = require('mongoose')

async function connectToDb() {
    try {
        await mongoose.connect('mongodb+srv://Chasmyr:admin@cluster0.y2zmb6j.mongodb.net/?retryWrites=true&w=majority')
        console.log('connected')
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectToDb