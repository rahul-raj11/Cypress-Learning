describe('Write/ Read Fixture Demo', () => {
    
    it('Write an API response to a fixture file', () => {
        cy.request('GET', 'http://localhost:3000/accounts')
        .then((response) => {
            cy.log(response.body);
            cy.writeFile('cypress/fixtures/read-write/read-write.json', response.body);
        });
    });

    it('Adding more objects to our Array of responses', () => {
        const fileName = 'cypress/fixtures/read-write/read-write.json';

        cy.request('GET', 'http://localhost:3000/todos')
        .its('body')
        .each(($obj) => {
            cy.readFile(fileName).then((arr) => {
                arr.push($obj);
                cy.writeFile(fileName, arr);
            });
        });
    });
});