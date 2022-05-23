// On importe le package bcrypt pour hasher le mot de passe des utilisateurs
const bcrypt = require('bcrypt');

// On importe le package jsonwebtoken pour attribuer un token à un utilisateur au moment ou il se connecte
const jwt = require('jsonwebtoken');