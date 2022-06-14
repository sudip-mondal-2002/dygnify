const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model('AuthData', AuthSchema);