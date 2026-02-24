# 🚀 Projeto Node Estruturado (API com JWT & MVC)

Este projeto evoluiu de uma introdução básica para uma API RESTful robusta e segura. Ele utiliza o padrão de arquitetura MVC e implementa camadas de segurança com JWT (JSON Web Token) para proteção de rotas, além de gerenciamento de configurações via Dotenv.

## 📋 Evolução e Recursos
    .O sistema agora não apenas gerencia um CRUD de usuários, mas também simula um ambiente real de produção com:
    .Autenticação JWT: Proteção de rotas privadas através de tokens de acesso.
    .Middleware de Segurança: Filtro que valida a identidade do usuário antes de liberar o acesso aos dados.
    .Configuração via .env: Proteção de chaves sensíveis e variáveis de ambiente.
    .Padrão MVC: Organização limpa e escalável do código.
 

## 🛠️ Tecnologias Utilizadas
* **Node.js**: Ambiente de execução Javascript.
* **Express.js**: Framework para construção de rotas e APIs.
* **MVC**: Padrão de organização para separar responsabilidades (Rotas, Controladores e Modelos).
* **jsonwebtoken**: Geração e validação de tokens de segurança.
* **dotenv**: Gerenciamento de variáveis de ambiente.
* **Nodemon**: Reinicialização automática do servidor durante o desenvolvimento.

## 📁 Estrutura de Pastas
```text
├── controllers/         # Intermediários entre Models e Rotas
│   ├── AuthController.js    # Gerencia autenticação e geração de tokens
│   ├── postController.js    # Lógica para publicações/posts
│   └── UsuarioController.js # Lógica de usuários (CRUD)
├── models/              # Camada de dados e regras de negócio
│   ├── postModel.js         # Estrutura e persistência de posts
│   └── UsuarioModel.js      # Estrutura e validação de usuários
├── rotas/               # Definição dos caminhos da API
│   ├── RotasPublicas.js     # Endpoints acessíveis sem autenticação
│   ├── RotasPrivadas.js     # Endpoints protegidos por Middleware JWT
│   ├── postRotas.js         # Definições específicas de posts
│   └── UsuarioRotas.js      # Definições específicas de usuários
├── .env                 # Configurações de ambiente (Segredo do JWT, Portas)
├── server.js            # Inicialização do Express e conexão das rotas
└── package.json         # Scripts e dependências do projeto
```

## 🚀 Como Executar o Projeto
* **1**: Clone o repositório ou baixe os arquivos.
* **2**: Instale as dependências.
npm install
* **3**: Inicie o servidor.
npm start

| Método | Rotas | Descrição| JSON|
| :--- | :---: | :--- | :--- |
| GET | /usuarios | Lista todos os usuários. | N/A |
| GET | /usuarios/1 | Lista usuários expecífico. | N/A |
| POST | /usuarios | Cadastra um novo usuário. | {"nome": "Dev", "email": "dev@teste.com"} |
| put | /usuarios/:id | Atualiza os dados de um usuário. | {"nome": "Nome Atualizado", email": "email@atualizado.com"} |
| GET | /usuarios/:id | Remove um usuário. | N/A |


| Método | Rotas | Descrição| JSON|
| :--- | :---: | :--- | :--- |
| POST | /login | Gera o tokin para a consunta | { "email": "roberto@teste.com",  "senha": "123456"} |
| GET | /posts | Lista todos post. | token |
