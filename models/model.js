const mongoose = require('mongoose')

const empc = mongoose.model('empCRUD',          //empCRUD = is collection_name
    {
        _id: String,
        uname: String,
        email: String,
        city: String
    }
)

module.exports = empc