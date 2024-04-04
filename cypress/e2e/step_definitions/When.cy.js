import { When } from "cypress-cucumber-preprocessor/steps";
//const sauceDemoLoginPage = require('../../support/pages/sauceDemoLoginPage.cy');
import { sauceDemoLoginPage } from "../../support/pages/SauceLabLoginPage.cy";

// When(/^A user enter the username ([^"]*)$/, (username) => {
//     cy.get('#user-name').type(username);
// });

When('A user enter the username {string}', (username) => {
    //cy.get('#user-name').type(username);
    sauceDemoLoginPage.typeUsername(username);
});

When('A user enter incorrect credetials', (dataTable) => {
    dataTable.hashes().forEach((row) => {
        cy.log(row.username);
        sauceDemoLoginPage.typeUsername(row.username);
        cy.log(row.password);
        sauceDemoLoginPage.typePassword(row.password);
    });
});