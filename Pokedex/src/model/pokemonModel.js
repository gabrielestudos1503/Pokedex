const pokemons = [
    { id: 1, nome: 'Charmandu', tipo: 'torcha', altura: '1,20', peso: '20kg', nivelDePoder: '25' }
];

const getPokemons = () => pokemons;
const getPokemonById = (id) => pokemons.find(p => p.id === parseInt(id));
const createPokemon = (pokemon) => {
    const newPokemon = { id: pokemons.length + 1, ...pokemon };
    pokemons.push(newPokemon);
};

module.exports = { getPokemons, getPokemonById, createPokemon };
