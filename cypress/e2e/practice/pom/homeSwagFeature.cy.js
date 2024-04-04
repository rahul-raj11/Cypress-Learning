import homePageSwagLab from "../../../swaglabs/pages/homePageSwagLab";
import inventoryPageSwagLab from "../../../swaglabs/pages/inventoryPageSwagLab";

const tests = require('../../../fixtures/fixtures_demo/sauceUser.json');
//cypress/fixtures/fixtures_demo/sauceUser.json

describe('Home Sauce Demo', () => {

    beforeEach(function() {
        cy.visit('https://www.saucedemo.com/');
    });

    tests.forEach((test) => {

        it(test.name, function() {
            homePageSwagLab.typeUsername(test.username);
            homePageSwagLab.typePassword(test.password);
            homePageSwagLab.clickLoginBtn();

            if(test.name === 'should login to inventory page') {
                inventoryPageSwagLab.validateTitle().should('have.text', test.expected);
                inventoryPageSwagLab.clickBurgerMenuBtn();
                inventoryPageSwagLab.clickLogout();
            } else {
                homePageSwagLab.elements.ErrorMsg().should('have.text', test.expected);
            }
        });
    });
});