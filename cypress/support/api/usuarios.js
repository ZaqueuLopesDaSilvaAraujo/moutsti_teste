export function cadastrarUsuarioApi(usuario) {
    return cy.api({
        method: 'POST',
        url: `${Cypress.env('apiUrl')}/usuarios`,
        failOnStatusCode: false,
        body: usuario
    });
}
