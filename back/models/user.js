/* *****Model sauceSchema***** */

// On importe le package mongoose
const mongoose = require('mongoose');

// On importe le package uniqueValidator
const uniqueValidator = require('mongoose-unique-validator');

// Création d'un schema mongoose dédié à l'utilisateur
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Package pour garantir un email unique
userSchema.plugin(uniqueValidator);

// Nous exportons ensuite le modèle userSchema
module.exports = mongoose.model('User', userSchema);