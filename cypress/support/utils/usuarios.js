const { faker } = require('@faker-js/faker');

function gerarUsuarioValido() {
    return {
        nome: faker.person.fullName(),
        email: faker.internet.email().toLowerCase(),
        password: 'Teste@123',
        administrador: 'true'
    };
}

module.exports = { gerarUsuarioValido };
