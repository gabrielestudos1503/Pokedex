const treinadorModel = require('../model/treinadorModel');
const pokemonModel = require('../model/pokemonModel');

const getAllTreinadores = (req, res) => {
    const treinadores = treinadorModel.getTreinadores();
    res.render('index', { treinadores });
};

const getTreinador = (req, res) => {
    const treinador = treinadorModel.getTreinadorById(req.params.id);
    if (treinador) {
        res.render('treinador', { treinador });
    } else {
        res.status(404).send('Treinador não encontrado!');
    }
};

const createTreinador = (req, res) => {
    const { nome, idade, altura } = req.body;
    const newTreinador = { nome, idade, altura };
    treinadorModel.createTreinador(newTreinador);
    res.redirect('/');
};

const getAllData = (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    const treinadores = treinadorModel.getTreinadores();
    res.render('index', { pokemons, treinadores });
};

module.exports = { getAllData, getAllTreinadores, getTreinador, createTreinador };