import { And } from "cypress-cucumber-preprocessor/steps";
//import sauceDemoLoginPage from "../../support/pages/sauceDemoLoginPage.cy";
import { sauceDemoLoginPage } from "../../support/pages/SauceLabLoginPage.cy";

And('A user enter the password {string}', (password) => {
    //cy.get('#password').type(password);
    sauceDemoLoginPage.typePassword(password);
});

// And(/^A user clicks on login button$/, () => {
//     cy.get('id#login-button').click();
// });

And('A user clicks on login button', () => {
    //cy.get('input#login-button').click();
    sauceDemoLoginPage.clickLoginBtn();
});