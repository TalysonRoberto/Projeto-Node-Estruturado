let bancoDeDadositems = [
    { id: 1, nome: "HTML", conteudo: "", user_id:"Talyson" },
    { id: 2, nome: "JS", conteudo: "", user_id:"Roberto"}
];


class PostModel {
    // Retorna todos os items
    static lista() {
        return bancoDeDadositems;
    }

    // Busca um item específico pelo ID
    static consultarPorId(id) {
        return bancoDeDadositems.find(u => u.id === parseInt(id));
        /*const dados = bancoDeDadositems.lista.filter(item => item.id == id);
        return dados;*/
    }

    // Adiciona um novo item ao banco
    static criar(dados) {
        const novoItem = { 
            id: bancoDeDadositems.length > 0 ? bancoDeDadositems[bancoDeDadositems.length - 1].id + 1 : 1, 
            ...dados 
        };
        bancoDeDadositems.push(novoItem);
        return novoItem;
    }

    // Atualiza um item existente
    static atualizar(id, dadosAtualizados) {
        const index = bancoDeDadositems.findIndex(u => u.id === parseInt(id));
        
        if (index !== -1) {
            // Mantemos o ID original e mesclamos com os novos dados
            bancoDeDadositems[index] = { ...bancoDeDadositems[index], ...dadosAtualizados };
            return bancoDeDadositems[index];
        }
        return null; // Retorna null se não encontrar o item
    }

    // Remove um item do array
    static deletar(id) {
        const index = bancoDeDadositems.findIndex(u => u.id === parseInt(id));
        
        if (index !== -1) {
            // Remove 1 item na posição 'index'
            const itemRemovido = bancoDeDadositems.splice(index, 1);
            return itemRemovido[0];
        }
        return null;
    }

}

module.exports = PostModel;