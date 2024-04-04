describe('Commands Demo', function() {
    beforeEach(function() {
        cy.visit('https://www.saucedemo.com/');
        
    });

    it('Success Login Test', function() {
        cy.typeLogin('standard_user', 'secret_sauce');
        cy.get('.title').should('contain.text', 'Products');
        cy.logout();
        cy.url().should('eq', 'https://www.saucedemo.com/');
        cy.get('.login_logo').should('contain.text', 'Swag Labs');
    });

    it('Invalid Login Test', function() {
        cy.typeLogin('standard_user', 'dummyPassword');
        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
    })
});