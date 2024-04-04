describe('Intercept Demo', () => {
    it('Initial validation', () => {
        cy.visit('http://localhost:8888/#/');

        cy.get('.todo-list li')
        .should('have.length', 2)
        .and('contain', 'Pay electric bill')
        .and('contain', 'Walk the dog');
    });

    it('Mocked API Response', () => {
        cy.intercept('GET', '/todos', {fixture: '/interceptFixture.json'}).as('getTodos-Fixtures');
        cy.visit('http://localhost:8888/#/');

        cy.get('.todo-list li')
        .should('have.length', 3)
        .and('contain', 'Cypress Assertion Video')
        .and('contain', 'Page Object Model Cypress Video')
        .and('contain', 'Intercept Cypress Video');
    });

    it('Mocked ready todo list', () => {
        const stubSample = [{
            "title": "Mocked API Video",
            "completed": true,
            "id": "1"
        }];

        cy.intercept('GET', '/todos', {
            body: stubSample
        }).as('getTodos-Body');

        cy.visit('http://localhost:8888/#/');
        cy.get('.todo-list li.completed label')
        .should('have.css', 'text-decoration', 'line-through solid rgb(148, 148, 148)');
    });
});