const homePageSwagLabWithXpath = require("../../../swaglabsWithXpath/pages/homePageSwagLab");
const inventoryPageSwagLabWithXpath = require("../../../swaglabsWithXpath/pages/inventoryPageSwagLab");
// import homePageSwagLabWithXpath from "../../../swaglabsWithXpath/pages/homePageSwagLabWithXpath";
// import inventoryPageSwagLabWithXpath from "../../../swaglabsWithXpath/pages/inventoryPageSwagLabWithXpath";

const tests = require('../../../fixtures/fixtures_demo/sauceUser.json');
//cypress/fixtures/fixtures_demo/sauceUser.json

describe('Home Sauce Demo', () => {

    beforeEach(function() {
        cy.visit('https://www.saucedemo.com/');
    });

    tests.forEach((test) => {

        it(test.name, function() {
            homePageSwagLabWithXpath.typeUsername(test.username);
            homePageSwagLabWithXpath.typePassword(test.password);
            homePageSwagLabWithXpath.clickLoginBtn();

            if(test.name === 'should login to inventory page') {
                inventoryPageSwagLabWithXpath.validateTitle().should('have.text', test.expected);
                inventoryPageSwagLabWithXpath.clickBurgerMenuBtn();
                inventoryPageSwagLabWithXpath.clickLogout();
            } else {
                homePageSwagLabWithXpath.elements.ErrorMsg().should('have.text', test.expected);
            }
        });
    });
});