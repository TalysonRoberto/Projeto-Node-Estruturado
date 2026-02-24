const PostModel = require('../models/postModel.js');

class UsuarioController {
    lista(req, res) {
        const usuarios = PostModel.lista();
        return res.status(200).json(usuarios);
    }

    consultarPorId(req, res) {
        const { id } = req.params;
        const usuario = PostModel.consultarPorId(id);
        
        if (!usuario) {
            return res.status(404).json({ mensagem: "Usuário não encontrado." });
        }
        return res.status(200).json(usuario);
    }

    criar(req, res) {
        const { nome, email } = req.body;
        if (!nome || !email) {
            return res.status(400).json({ mensagem: "Nome e Email são obrigatórios." });
        }
        const novo = PostModel.criar({ nome, email });
        return res.status(201).json(novo);
    }

    atualizar(req, res) {
        const { id } = req.params;
        const dados = req.body;
        const usuarioAtualizado = PostModel.atualizar(id, dados);

        if (!usuarioAtualizado) {
            return res.status(404).json({ mensagem: "Não foi possível atualizar: Usuário não encontrado." });
        }
        return res.status(200).json(usuarioAtualizado);
    }

    deletar(req, res) {
        const { id } = req.params;
        const removido = PostModel.deletar(id);

        if (!removido) {
            return res.status(404).json({ mensagem: "Não foi possível deletar: Usuário não encontrado." });
        }
        return res.status(200).json({ mensagem: "Usuário removido com sucesso!", usuario: removido });
    }
}

module.exports = new UsuarioController();