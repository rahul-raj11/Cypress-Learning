describe('Retry-Ability Session', () => {
    beforeEach(() => {
        cy.visit('http://192.68.0.13:8888/#/'); //command

        cy.get('.new-todo') //command
        .type('todo-A{enter}') //command
        .type('todo-B{enter}'); //command
    });

    it('should have two <li> elements', () => {
        cy.get('.todo-list li') //command
        .should('have.length', 2); //assertion
    });
});