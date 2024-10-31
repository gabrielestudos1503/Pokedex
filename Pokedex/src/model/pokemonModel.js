const pokemons = [];

const getPokemons = () => pokemons;
const getPokemonById = (id) => pokemons.find(p => p.id === parseInt(id));
const createPokemon = (pokemon) => {
    const newPokemon = { id: pokemons.length + 1, ...pokemon };
    pokemons.push(newPokemon);
};

module.exports = { getPokemons, getPokemonById, createPokemon };
