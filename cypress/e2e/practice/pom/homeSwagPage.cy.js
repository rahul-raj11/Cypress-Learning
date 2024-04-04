import homePageSwagLab from "../../../swaglabs/pages/homePageSwagLab";
import inventoryPageSwagLab from "../../../swaglabs/pages/inventoryPageSwagLab";

describe('POM Implementation', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });

    it('Should login to inventory page', () => {
        homePageSwagLab.typeUsername('standard_user');
        homePageSwagLab.typePassword('secret_sauce');
        homePageSwagLab.clickLoginBtn();

        inventoryPageSwagLab.validateTitle().should('have.text', 'TestFailure'); //Products
        inventoryPageSwagLab.clickBurgerMenuBtn();
        inventoryPageSwagLab.clickLogout();
    });

    it('Should display locked out user error msg', () => {
        homePageSwagLab.typeUsername('locked_out_user');
        homePageSwagLab.typePassword('secret_sauce');
        homePageSwagLab.clickLoginBtn();

        homePageSwagLab.elements.ErrorMsg().should('contain.text', 'Epic sadface: Sorry, this user has been locked out.');
    });

    it('Should display invalid user error msg', () => {
        homePageSwagLab.typeUsername('dummy_user');
        homePageSwagLab.typePassword('secret_sauce');
        homePageSwagLab.clickLoginBtn();

        homePageSwagLab.elements.ErrorMsg().should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
    });
})