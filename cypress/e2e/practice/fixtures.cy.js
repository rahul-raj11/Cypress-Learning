describe('Fixtures Demo', () => {
    beforeEach(function() {
        debugger;
        cy.visit('https://www.saucedemo.com/');

        cy.fixture('fixtures_demo/sauceCredentials').then((credentials) => {
            this.credentials = credentials;
        });
    });

    it('Standard User', function() {
        cy.get('#user-name').type(this.credentials.standardUsername);
        cy.get('input#password').type(this.credentials.systemPassword);
        cy.get('#login-button').click();
        cy.get('.title').should('contain.text', 'Products');
        cy.get('#react-burger-menu-btn').click();
        cy.get('.bm-item-list > a#logout_sidebar_link').click();
    });

    it('Incorrect Username', function() {
        cy.get('#user-name').type(this.credentials.dummyUsername);
        cy.get('input#password').type(this.credentials.systemPassword);
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
    });

    it('Incorrect Password', function() {
        cy.get('#user-name').type(this.credentials.standardUsername);
        cy.get('input#password').type(this.credentials.dummyPassword);
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
    });

    it('Locked Username', function() {
        cy.get('#user-name').type(this.credentials.lockedUsername);
        cy.get('input#password').type(this.credentials.systemPassword);
        cy.get('#login-button').click();
        //cy.wait(6000);
        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Sorry, this user has been locked out.');
        // cy.get('h3[data-test="error"]').should((ele) => {
        //     expect(ele.text().trim()).equal('Epic sadface: Username and password do not match any user in this service');
        // }); Epic sadface: Sorry, this user has been locked out.
    });
});