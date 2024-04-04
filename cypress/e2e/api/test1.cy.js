const endpoint = 'https://dummyjson.com/todos';

const fileName = 'cypress/fixtures/demo/write.json'

describe('Dummy Todos API', () => {
    // beforeEach(() => {
    //     cy.request(endpoint).as('todos');
    // });

    it('Fetch details', () => {
        cy.request(endpoint).as('todos')
        cy.get('@todos').then((response) => {
            cy.log(response.body.todos);
            cy.writeFile(fileName, response.body.todos);
        });
        //cy.get('@todos').its('body').its('todos')
        // .each(($obj) => {
        //     cy.readFile(fileName).then((arr) => {
        //         arr.push($obj);
        //         cy.writeFile(fileName, arr);
        //     });
        // });    
    })

})