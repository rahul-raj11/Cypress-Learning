//https://docs.cypress.io/api/cypress-api/browser

describe('Cypress browser Demo', () => {
    beforeEach(() => {
        cy.visit('https://www.whatismybrowser.com/');
    });

    it('Log Web Browser Information', () => {

        cy.log(Cypress.browser.name);
        cy.log(Cypress.browser.family);
        cy.log(Cypress.browser.isHeaded);
        cy.log(Cypress.browser.isHeadless);
        cy.log(Cypress.browser.path);
        cy.log(Cypress.browser.version);
    });

    it('Check header depending on web browser', () => {
        const browserName = Cypress.browser.name;

        if(browserName.toLowerCase() === 'chrome') {
            cy.get('.string-major > a').should('contain.text', 'Chrome');
        } else if (browserName.toLowerCase() === 'firefox') {
            cy.get('.string-major > a').should('contain.text', 'Firefox');
        } else if (browserName.toLowerCase() === 'electron') {
            cy.get('.string-major > a').should('contain.text', 'Electron');
        }
    })
});