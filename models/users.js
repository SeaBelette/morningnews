const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
    title: String,
    content: String,
    description: String,
    urlToImage: String,
    language: String,
})

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    languagePref: String,
    password: String,
    token: String,
    wishList: [articleSchema]
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel