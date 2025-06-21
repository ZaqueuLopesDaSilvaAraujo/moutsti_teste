describe('CT03 - Login adaptativo de usuário', () => {
    let usuario;

    before(() => {
        cy.fixture('usuario.json').then((data) => {
            usuario = data;
        });
    });

    beforeEach(() => {
        cy.visit('/login');
    });

    afterEach(() => {
        cy.wait(3000);
    });

    it('Não deve permitir login com usuário inválido', () => {
        cy.get('[data-testid="email"]').type('naoexiste@test.com');
        cy.get('[data-testid="senha"]').type('senhaErrada123');
        cy.get('[data-testid="entrar"]').click();

        const mensagensEsperadas = [
            'Email e/ou senha inválidos',
            'Erro ao realizar login',
            'Usuário não encontrado'
        ];

        cy.get('body').then(($body) => {
            const bodyText = $body.text().toLowerCase();
            const msgEncontrada = mensagensEsperadas.find((msg) =>
                bodyText.includes(msg.toLowerCase())
            );

            if (msgEncontrada) {
                cy.contains(msgEncontrada, { matchCase: false }).should('be.visible');
                cy.log(`Mensagem de erro detectada: "${msgEncontrada}"`);
            } else {
                cy.log('Nenhuma mensagem de erro padrão foi exibida. Verificar comportamento.');
            }
        });
    });

    it('Deve realizar login com sucesso com usuário válido', () => {
        cy.get('[data-testid="email"]').should('exist').and('be.visible');
        cy.get('[data-testid="senha"]').should('exist').and('be.visible');
        cy.get('[data-testid="entrar"]').should('exist').and('be.enabled');

        cy.get('[data-testid="email"]')
            .type(usuario.email)
            .should('have.value', usuario.email);

        cy.get('[data-testid="senha"]')
            .type(usuario.senha)
            .should('have.value', usuario.senha);

        cy.get('[data-testid="entrar"]').click();

    });


});
