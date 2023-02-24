const mongoose = require('mongoose')
const UserModel =  mongoose.Schema

const userSchema = new UserModel({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    userId: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('user', userSchema)