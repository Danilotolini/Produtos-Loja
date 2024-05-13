const express = require('express');
const app = express();
const PORT = 3000;

// Rota para o carregador do iPhone
app.get('/carregador-iphone', (req, res) => {
  res.sendFile(__dirname + '/produtos/carregador-iphone.html');
});

// Rota para o carregador universal
app.get('/carregador-universal', (req, res) => {
  res.sendFile(__dirname + '/produtos/carregador-universal.html');
});

// Rota para o fone de ouvido
app.get('/fone-de-ouvido', (req, res) => {
  res.sendFile(__dirname + '/produtos/fone-de-ouvido.html');
});

// Rota para o suporte
app.get('/suporte', (req, res) => {
  res.sendFile(__dirname + '/produtos/suporte.html');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
