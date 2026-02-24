const UsuarioModel = require("../models/UsuarioModel");


class AuthController {
    login(email,senha){
        const dados = UsuarioModel.authenticate(email,senha);
        return dados;
    }
}

module.exports = AuthController;