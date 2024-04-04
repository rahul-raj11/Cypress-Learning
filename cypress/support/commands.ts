Cypress.Commands.add('typeLogin', (username, password) => {
    cy.get('#user-name').type(username);
    cy.get('input#password').type(password);
    cy.get('#login-button').click();
});