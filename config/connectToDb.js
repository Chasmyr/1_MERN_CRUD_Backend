//load env
if (process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}

const mongoose = require('mongoose')

async function connectToDb() {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log('connected')
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectToDb