const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name : String,
    quote : String
})

const quote = mongoose.model('Quotes', schema)
module.exports = quote