const treinadores = [];

const getTreinadores = () => treinadores;
const getTreinadorById = (id) => treinadores.find(p => p.id === parseInt(id));
const createTreinador = (treinador) => {
    const newTreinador = { id: treinadores.length + 1, ...treinador };
    treinadores.push(newTreinador);
};

module.exports = { getTreinadores, getTreinadorById, createTreinador };
