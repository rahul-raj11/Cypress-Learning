describe("API Intercept spy example", () {
    beforeEach(function() {
        cy.visit('http://localhost:8888/#/');
    });

    it('New todo by UI', function() {
        cy.intercept('POST', '/todos').as('new-todo')

        cy.get('input#add-todo').type('new-todo');

        cy.wait('@new-todo').its('response.statusCode').should('eq', 201);

        cy.get('@new-todo').should((newTodo) => {
            cy.log(newTodo);
            expect(newTodo.response.body.title).to.eql('new-todo');

            const newTodoID = newTodo.response.body.id;
            cy.wrap(newTodoID).as('newTodoId');
        });
    });

    after(function() {
        cy.request('DELETE', `/todos/${this.newTodoId}`);
    });
});