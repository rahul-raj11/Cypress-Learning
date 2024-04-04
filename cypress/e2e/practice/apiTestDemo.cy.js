describe('Basic API testing - Part #1', () => {

    beforeEach(function() {
        cy.request('GET', 'http://localhost:8888/#/').as('todos');
    });

    it('Response Test', () => {
        cy.request('http://localhost:8888/#/')
        .its('body')
        .should('include', '<p>Double-click to edit a todo</p>');
    });

    it('Request Status Test', () => {
        cy.request('http://localhost:8888/#/').as('todos');
        cy.get('@todos').its('status')
        .should('eq', 200);
    });

    it('Header/Content-Type Test', () => {
        cy.request('http://localhost:8888/#/').as('todos');
        cy.get('@todos').its('headers').its('content-type')
        .should('contain', 'text/html');
    });

    const val = '<!doctype html>\n<html lang="en" data-framework="typescript">\n\t<head>\n\t\t<meta charset="utf-8">\n\t\t<title>React • TodoMVC</title>\n\t\t<link rel="stylesheet" href="node_modules/todomvc-common/base.css">\n\t\t<link rel="stylesheet" href="node_modules/todomvc-app-css/index.css">\n\t</head>\n\t<body>\n\t\t<section class="todoapp"></section>\n\t\t<footer class="info">\n\t\t\t<p>Double-click to edit a todo</p>\n\t\t\t<p>Created by <a href="http://github.com/remojansen/">Remo H. Jansen</a></p>\n\t\t\t<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>\n\t\t</footer>\n\t\t<script type="text/javascript" src="node_modules/director/build/director.js"></script>\n\t\t<script type="text/javascript" src="js/bundle.js"></script>\n\t</body>\n</html>\n to deeply equal <!doctype html>\n<html lang="en" data-framework="typescript">\n\t<head>\n\t\t<meta charset="utf-8">\n\t\t<title>React • TodoMVC</title>\n\t\t<link rel="stylesheet" href="node_modules/todomvc-common/base.css">\n\t\t<link rel="stylesheet" href="node_modules/todomvc-app-css/index.css">\n\t</head>\n\t<body>\n\t\t<section class="todoapp"></section>\n\t\t<footer class="info">\n\t\t\t<p>Double-click to edit a todo\n    \n\t\t\t\n    Created by Remo H. Jansen\n    \n    \n\t\t\t\n    Part of TodoMVC\n    \n    \n\t\t\n\t\t\n\t\t\n\t\n\n';    

    it('Initial iteam from end point Test', () => {
        cy.request('http://localhost:8888/#/').as('todos');
        cy.get('@todos').its('body')
        .should('deep.eq', val);
    });

    it('Using alias request', function() {
        cy.get('@todos').should((response) => {
            expect(response.body).to.have.length(705);
            expect(response).to.have.property('headers');
            expect(response).to.have.property('duration');
        });
    });
});