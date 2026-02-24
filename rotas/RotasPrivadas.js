const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const UsuarioRotas = require('./UsuarioRotas');
const PostRotas = require('./postRotas');

const RotasPrivadas = express.Router();

//Middleware
RotasPrivadas.use((request,response, next) => {
    // pegando o token passado
    const token = request.headers.token; 
    let auth = false;

    // validando o token
    if(token){ 
        const { token } = request.headers;

        try{
            //  process.env.APP_KEY_TOKEN vem do .env
            jwt.verify(token,  process.env.APP_KEY_TOKEN) 
            // authentify verdadeiro se passar
            auth = true; 
        }catch(e){
             // informa o erro
             return response.status(403).send(e)
        }        
    }

    // verificando se passa ou não
    if(auth === false){ 
        // barra a autorização
        return response.status(403).send("Não Autorizado") 
    }
    
    // Se não barrar o auth ele da continuidade ao acesso
    next(); 

});

RotasPrivadas.use(UsuarioRotas);
RotasPrivadas.use(PostRotas);

module.exports = RotasPrivadas;