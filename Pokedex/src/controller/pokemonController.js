const pokemonModel = require('../model/pokemonModel');

const getAllPokemons = (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    res.render('index', { pokemons });
};

const getPokemon = (req, res) => {
    const pokemon = pokemonModel.getPokemonById(req.params.id);
    if (pokemon) {
        res.render('pokemon', { pokemon });
    } else {
        res.status(404).send('pokemon não encontrado!');
    }
};

const createPokemon = (req, res) => {
    const { nome, tipo, altura, peso, nivelDePoder } = req.body;
    const newPokemon = {
        nome,
        tipo,
        altura,
        peso,
        nivelDePoder: parseInt(nivelDePoder)
    };
    pokemonModel.createPokemon(newPokemon);
    res.redirect('/');
};

module.exports = { getAllPokemons, getPokemon, createPokemon };
