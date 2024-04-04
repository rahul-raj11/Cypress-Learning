export class SauceDemoLoginPage {

    elements = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('input#password'),
        loginBtn: () => cy.get('#login-button'),
        ErrorMsg: () => cy.get('[data-test="error"]')
    };

    typeUsername(username) {
        this.elements.usernameInput().clear().type(username);
    };

    typePassword(password) {
        this.elements.passwordInput().clear().type(password);
    };

    clickLoginBtn() {
        this.elements.loginBtn().click()
    };
}

export const sauceDemoLoginPage = new SauceDemoLoginPage();