const mongoose = require('mongoose')
const validator = require('validator')
const { Schema } = mongoose;


const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Please Provide name'],
        minLength: 3,
        maxLength: 20,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please Provide email'],
        validate:{
            validator: validator.isEmail,
            message:'Please provide valid email'
            },
        unique: true
    },
    password:   {
        type: String,
        required: [true, 'Please Provide password'],
        minLength: 6,
        select: false
    }
})



module.exports = mongoose.model('User', UserSchema)

