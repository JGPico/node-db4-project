const express = require('express');

const RecipeRouter = require('./Recipes/RecipeRouter.js');

const server = express();

server.use(express.json());
server.use('api/recipes', RecipeRouter);

server.get("/", (req, res) => {
    res.status(200).json({Message: "API is up"});
});

module.exports = server;