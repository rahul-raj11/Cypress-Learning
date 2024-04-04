const endPoint = 'http://localhost:3000/todos';

const todoObject = {
    "title": "NewTodoFromPost",
    "completed": false,
    "id": "3"
};

const patchObject = {
    "title": "NewTodoFromPost",
    "completed": true,
    "id": "3"
};

const addTodo = (todoObject) => {
    cy.request('POST', endPoint, todoObject);
};

const patchTodo = (patchObject) => {
    cy.request('PATCH', `${endPoint}/${patchObject.id}`, patchObject);
}

const deleteTodo = (objToBeDeleted) => {
    cy.request('DELETE', `${endPoint}/${objToBeDeleted.id}`, patchObject)
}

describe('APT Testing Demo', () => {
    it('Add a todo', () => {
        addTodo(todoObject);
        cy.request('GET', `${endPoint}/${todoObject.id}`)
        .its('body')
        .should('deep.equal', todoObject);
    });

    it('PATCH a todo', () => {
        patchTodo(patchObject);
        cy.request('GET', `${endPoint}/${todoObject.id}`)
        .its('body')
        .should('deep.equal',patchObject);
    });

    deleteTodo(patchObject);
    cy.request('GET', endPoint)
    .its('body')
    .should('have.length', 2)
});