/* *****Model sauceSchema***** */

// On importe le package mongoose
const mongoose = require('mongoose');

// Création d'un schema mongoose pour que les données de la base mongoDB ne puissent pas différer de celui précisé dans le schema model des sauces. L'id est généré automatiquement par MongoDB
const sauceSchema = mongoose.Schema({
    // UserId du createur
    // Nom de la sauce
    // Créateur de la sauce
    // description de la sauce
    // Ingredients de la sauce
    // Adresse de l'image de presentation de la sauce
    // Force le piquant de la sauce
    // Nombre de Like reçu
    // Nombre de dislike reçu
    // Utilisateurs qui Like la sauce
    // Utilisateur qui DisLike la sauce
    userId: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    manufacturer: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    mainPepper: {
        type: String,
        required: true,
    },
    heat: {
        type: Number,
        required: true,
    },
    likes: {
        type: Number,
    },
    dislikes: {
        type: Number,
    },
    usersLiked: {
        type: Array,
    },
    usersDisliked: {
        type: Array,
    },
});

// Nous exportons ensuite le modèle sauceSchema
module.exports = mongoose.model('Sauce', sauceSchema);