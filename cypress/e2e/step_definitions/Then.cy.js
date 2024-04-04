import { Then } from "cypress-cucumber-preprocessor/steps";
//import sauceDemoLoginPage from "../../support/pages/sauceDemoLoginPage.cy";
import { sauceDemoLoginPage } from "../../support/pages/SauceLabLoginPage.cy";

// Then(/^A user is logged in and url contain ([^"]*)$/, (containText) => {
//     cy.url().should('contain', containText);
// });

Then('A user is logged in and url contain {string}', (urlContainText) => {
    cy.url().should('contain', urlContainText);
});

Then('A user gets error message {string}', (lockedUserErrMsg) => {
    //cy.get('h3[data-test=error]').should('have.text', lockedUserErrMsg);
    sauceDemoLoginPage.elements.ErrorMsg().should('have.text', lockedUserErrMsg);
});