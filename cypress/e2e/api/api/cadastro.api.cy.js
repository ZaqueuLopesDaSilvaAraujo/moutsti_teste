const { cadastroInvalido } = require('../../../fixtures/api/usuarios_invalidos');
const { gerarUsuarioValido } = require('../../../support/utils/usuarios');
const { cadastrarUsuarioApi } = require('../../../support/api/usuarios');

describe('CTAF - API Cadastro de Usuário', () => {
    let usuarioValido;

    before(() => {
        usuarioValido = gerarUsuarioValido();

        cadastrarUsuarioApi(usuarioValido).then((res) => {
            expect(res.status).to.eq(201);
            cy.writeFile('cypress/fixtures/usuario.json', {
                nome: usuarioValido.nome,
                email: usuarioValido.email,
                senha: usuarioValido.password
            });
        });
    });

    it('CT01 - Deve cadastrar usuário com sucesso', () => {
        const novoUsuario = gerarUsuarioValido();

        cadastrarUsuarioApi(novoUsuario).then((res) => {
            expect(res.status).to.eq(201);
            expect(res.body).to.have.property('message', 'Cadastro realizado com sucesso');
            expect(res.body).to.have.property('_id').and.to.not.be.empty;
        });
    });

    it('CT02 - Não deve permitir cadastro com email duplicado', () => {
        cadastrarUsuarioApi(usuarioValido).then((res) => {
            expect(res.status).to.eq(400);
            expect(res.body).to.have.property('message', 'Este email já está sendo usado');
        });
    });

    it('CT03 - Não deve permitir cadastro com tipos de dados inválidos', () => {
        const { request: bodyInvalido, expectedErrors: errosEsperados } = cadastroInvalido;

        cy.api({
            method: 'POST',
            url: `${Cypress.env('apiUrl')}/usuarios`,
            failOnStatusCode: false,
            body: bodyInvalido
        }).then((res) => {
            expect(res.status).to.eq(400);
            expect(res.body).to.include.all.keys(Object.keys(errosEsperados));

            Object.entries(errosEsperados).forEach(([campo, mensagem]) => {
                expect(res.body[campo]).to.eq(mensagem);
            });
        });
    });
});
