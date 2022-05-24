// Importer mongoose
const mongoose = require('mongoose');

// Package pour vérifié que l'email n'est pas déjà enregistré
const uniqueValidator = require('mongoose-unique-validator');

// Structure du schéma user
const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);