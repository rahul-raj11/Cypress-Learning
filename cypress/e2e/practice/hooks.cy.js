// Hooks are from mocha

//const { beforeEach } = require("mocha");


/*
    Order:
    1- before -> Executed once, as soon as the first TS is executed
    2- beforeEach -> Executed before EACH TS is executed
    3- testExecution
    4- afterEach -> Executed after EACH TS
    5- after -> Executed once, as soon as the last TS is executed
*/


describe('Hook Demo', () => {

    before(function() {
        cy.log('Before');
    });

    beforeEach(function() {
        cy.log('Before Each');
    });

    it.only('Test #1', () => {
        console.log('Test #1');
    });

    it('Test #2', () => {
        console.log('Test #2');
    });

    it.skip('Test #3', () => {
        console.log('Test #3');
    });

    afterEach(function() {
        cy.log('After Each');
    });

    after(function() {
        cy.log('After');
    });
});