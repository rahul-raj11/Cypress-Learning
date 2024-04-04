//Cypress KEYBOARD
// The Keyboard API allows you set the default values for how
// the .type() command is executed.
// Change the keystrokeDelay
//https://docs.cypress.io/api/cypress-api/keyboard-api

/*
You can specify this a global change at Cypress/support/e2e.js
    Cypress.Keyboard.defaults({
        keystrokeDelay: 20,
    })
*/

describe('Keystroke Demo', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });

    it('Cypress Keyboard - Slow Type', {keystrokeDelay: 300}, () => {
        cy.get('#user-name').type('testUser');
        cy.get('input#password').type('testPassword');
    });

    it('Cypress Keyboard - Standard Type', () => {
        cy.get('#user-name').type('testUser');
        cy.get('input#password').type('testPassword');
    });

    it('Cypress Keyboard - Fastest Type', {keystrokeDelay: 0}, () => {
        cy.get('#user-name').type('testUser');
        cy.get('input#password').type('testPassword');
    });
})