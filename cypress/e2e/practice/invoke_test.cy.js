describe('Invoke Test Scripts', function() {
    beforeEach(function() {
        cy.visit('https://demoqa.com/links');
    });

    it('Invoke to remove a target attribut', function() {
        cy.get('#simpleLink').invoke('.removeAttr', 'target');
        cy.get('#simpleLink').click();
        cy.location().then((yieldedObject) => cy.log(yieldedObject.href));
    });

    it('Invoke to get an attribute', function() {
        cy.get('#simpleLink').invoke('attr', 'target').then((targetValue) => cy.log(targetValue));
        cy.get('#simpleLink').should('have.attr', 'target', '_blank');
    });

    it('Invoke to get text', function() {
        cy.get('.main-header').invoke('text').then((textVal) => cy.log(textVal));
    });
});