let url:string = 'https://www.saucedemo.com/inventory.html'

describe('TS Demo', () => {

    it('Success Login without Custom Command', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('standard_user');
        cy.get('input#password').type('secret_sauce');
        cy.get('#login-button').click();
        
        cy.url().should('eq', url)
    });

    it('Success Login with custom command', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.typeLogin('standard_user', 'secret_sauce');
    });
});