import { Given } from "cypress-cucumber-preprocessor/steps";

Given('A user opens the login page', () => {
    cy.visit('/');
});