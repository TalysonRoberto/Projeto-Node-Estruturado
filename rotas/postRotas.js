const express = require('express');
const Postrouter = express.Router();
const PostController = require('../controllers/postController.js');

// CRUD USUÁRIO
Postrouter.get('/posts', PostController.lista);
Postrouter.get('/posts/:id', PostController.consultarPorId);
Postrouter.post('/posts', PostController.criar);
Postrouter.put('/posts/:id', PostController.atualizar);
Postrouter.delete('/posts/:id', PostController.deletar);

module.exports = Postrouter;