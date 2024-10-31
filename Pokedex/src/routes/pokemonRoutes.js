const express = require('express');
const router = express.Router();

const treinadorController = require('../controller/treinadorController');
const pokemonController = require('../controller/pokemonController');

router.get('/', treinadorController.getAllData);

router.get('/pokemon/:id', pokemonController.getPokemon);
router.post('/createPokemon', pokemonController.createPokemon);

router.get('/treinador/:id', treinadorController.getTreinador);
router.post('/createTreinador', treinadorController.createTreinador);

module.exports = router;