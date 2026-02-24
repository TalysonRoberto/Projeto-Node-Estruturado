const express = require('express');
const RotasPrivadas = require('./rotas/RotasPrivadas');
const RotasPublicas = require('./rotas/RotasPublicas');

const port = 3000; // porta

const app = express();
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
    res.status(200).send('API Online! 🚀');
});

// chamando as rotas publicas
app.use(RotasPublicas);
// chamando as rotas privadas
app.use(RotasPrivadas);

app.listen(port, () => {
    // Usando localhost ou 0.0.0.0 para evitar problemas de IP fixo
    console.log(`Servidor rodando em http://localhost:${port}`);
});