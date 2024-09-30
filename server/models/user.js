const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    userName:   {
                    type: String,
                    required: true,
                    unique: true
                },
    email:   {
                    type: String,
                    required: true,
                    unique: true
                },
    password:   {
                    type: String,
                    required: true,
                },
    role:   {
                    type: String,
                    default: 'admin',
                }
});

 const User = model('user', userSchema);

 module.exports = User;
 