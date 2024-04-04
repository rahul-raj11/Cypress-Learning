describe('Location Demo', () => {

    beforeEach(function() {
        cy.visit('https://www.saucedemo.com/');
    });

    it('should have title with value Swag Labs', () => {
        cy.title().should('eq', 'Swag Labs');
    });

    it('should have url https://www.saucedemo.com/', () => {
        cy.url().should('eq', 'https://www.saucedemo.com/');
    });

    it('should have HTTPS', () => {
        cy.location('protocol').should('contains', 'https');
    });

    it('hostname to be www.saucedemo.com', () => {
        cy.location('hostname').should('contains', 'www.saucedemo.com');
    });

    it('should redirect /inventory.html', () => {
        // cy.get('#login_credentials br').each((ele) => {
        //     let username = ele.text();
        //     cy.log(ele.text())
        //     if(ele.text() === '') {

                
        //         }
        // })
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.location('pathname').should('eq', '/inventory.html');
    });
});