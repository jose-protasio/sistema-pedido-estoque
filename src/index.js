const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();  // Para usar variáveis de ambiente

const app = express();
const port = process.env.PORT || 3000;

// Conectar ao MongoDB (certifique-se de ter o MongoDB rodando localmente ou em um serviço como o MongoDB Atlas)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB conectado'))
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Middleware para tratar requisições com JSON
app.use(express.json());

// Rota inicial de teste
app.get('/', (req, res) => {
    res.send('Sistema de Gestão de Pedidos e Estoque');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
