module.exports = {
    cadastroInvalido: {
        request: {
            nome: 125,
            email: 'teste@g',
            password: 145,
            administrador: null
        },
        expectedErrors: {
            nome: 'nome deve ser uma string',
            email: 'email deve ser um email válido',
            password: 'password deve ser uma string',
            administrador: "administrador deve ser 'true' ou 'false'"
        }
    }
};
