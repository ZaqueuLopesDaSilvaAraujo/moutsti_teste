const gerarEmailAleatorio = () =>
    `usuario${Math.floor(Math.random() * 1_000_000)}@teste.com`;

const gerarUsuario = () => ({
    nome: 'Usuário Teste CTAF',
    email: gerarEmailAleatorio(),
    senha: '123456'
});

module.exports = {
    gerarUsuario
};
