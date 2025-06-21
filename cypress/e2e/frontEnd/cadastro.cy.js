const { gerarUsuario } = require('../../support/Login/LoginUtils');

describe('CT01 - Cadastro adaptativo de usuário', () => {
    const { nome, email, senha } = gerarUsuario();

    beforeEach(() => {
        cy.visit('/login');
        cy.get('body').then(($body) => {
            if ($body.find('[data-testid="cadastrar"]').length) {
                cy.get('[data-testid="cadastrar"]').click();
            } else {
                cy.visit('/cadastrarusuarios');
            }
        });
    });

    it('CT02 - Não deve permitir cadastro com campos vazios (CTAF)', () => {
        cy.visit('/cadastrarusuarios');
        cy.get('[data-testid="cadastrar"]').click();

        const mensagensEsperadas = [
            'Nome é obrigatório',
            'Email é obrigatório',
            'Password é obrigatório'
        ];

        mensagensEsperadas.forEach((msg) => {
            cy.contains('div', msg, { matchCase: false }).then(($el) => {
                if ($el.is(':visible')) {
                    cy.log(`Mensagem exibida corretamente: "${msg}"`);
                } else {
                    cy.log(`Mensagem "${msg}" encontrada, mas não está visível`);
                }
            });
        });
    });

    it('Deve cadastrar usuário com sucesso mesmo diante de variações de fluxo', () => {
        cy.get('[data-testid="nome"]').should('be.visible').type(nome);
        cy.get('[data-testid="email"]').type(email);
        cy.get('[data-testid="password"]').type(senha);
        cy.get('[data-testid="checkbox"]').check();

        cy.get('[data-testid="cadastrar"]').click();
        cy.contains('Cadastro realizado com sucesso').should('exist');

        cy.writeFile('cypress/fixtures/usuario.json', {
            nome,
            email,
            senha
        });
    });

});
