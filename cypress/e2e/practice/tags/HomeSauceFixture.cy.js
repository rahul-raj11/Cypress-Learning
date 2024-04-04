import homeSaucePage from '../../../swaglabs/pages/homePageSwagLab'
import inventoryPage from '../../../swaglabs/pages/inventoryPageSwagLab'

const tests = require('../../../fixtures/fixtures_demo/sauceUser.json');


describe('Home Sauce Demo (regression,sanity)', { tags: ['@regressionTag', '@sanityTag'] }, () => {

    beforeEach(function () {
        cy.visit('https://www.saucedemo.com/');
    });

    tests.forEach(test => {

        it(test.name, function () {

            homeSaucePage.typeUsername(test.username);
            homeSaucePage.typePassword(test.password);
            homeSaucePage.clickLogin();

            if (test.name === 'should login to inventory page') {
                inventoryPage.elements.titleSpan().should('have.text', test.expected)
            } else {
                homeSaucePage.elements.errorMessage().should('have.text', test.expected)
            }

        });

    });

});