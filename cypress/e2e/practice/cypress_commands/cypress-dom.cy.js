//https://docs.cypress.io/api/cypress-api/dom

// Cypress.dom.method() is a collection of DOM related helper methods.


describe('IsVisible demo', () => {

    it('IsVisible Command', () => {
        cy.visit('https://demoqa.com/accordian');

        cy.get('.collapse').eq(6).then(($element) => {

            cy.log(`Collapse Content as soon as i load the website: ${Cypress.dom.isVisible($element)}`);
        });

        cy.get('#section1Heading').click();

        cy.get('.collapse').eq(6).then(($element) => {

            cy.log(`Collapse Content as soon as i click on the card: ${Cypress.dom.isVisible($element)}`);
        });
    });
});