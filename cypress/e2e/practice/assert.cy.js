// Assertions are the validation steps that determine whether the specified steps of automated test case succeeded
// In actual, Assertions validates the desired state of your element, objects, or application under test

// Cypress bundles  the popular chai library,
// as well as helpful extenstions for Sinon and jQuery, bringing you dozens of powerful assertions for free.


describe('Assertion Demo', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/radio-button');
    });

    it('TDD Assertions', () => {
        cy.log('---- Length Check ----');
        cy.get("input[id$='Radio']").should('have.length', 3);

        cy.log('---- Class Check');
        cy.get("input[id$='Radio']").eq(2).should('have.class', 'disabled');

        cy.log('---- Exist Check');
        cy.get('.mt-3').should('not.exist');

        cy.log('---- Text Check');
        cy.get("input[id$='Radio']").eq(0).click({force: true});
        cy.get('.mt-3')
        .should('have.text', 'You have selected Yes')
        .and('include.text', 'Yes')
        .and('not.contain', 'test');

        cy.log('---- CSS Check');
        cy.get('.text-success').should('have.css', 'color', 'rgb(40, 167, 69)')
    });

    it('BDD Assertions', () => {
        cy.log('---- Length Check - Class Check ----');
        cy.get("input[id$='Radio']").should(($inputs) => {
            expect($inputs).to.have.lengthOf(3);
            expect($inputs).to.have.class('disabled');
        });

        cy.log('---- Text Check');
        cy.get("input[id$='Radio']").eq(1).click({force: true});
        cy.get('.mt-3').should(($ele) => {
            cy.log($ele.text());
            expect($ele).to.have.text('You have selected Impressive');
            expect($ele).to.include('Impressive');
            expect($ele).to.not.include('test');
        });
    });
});