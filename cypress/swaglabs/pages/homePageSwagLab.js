class homePageSwagLab {

    elements = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('input#password'),
        loginBtn: () => cy.get('#login-button'),
        ErrorMsg: () => cy.get('[data-test="error"]')
    };

    typeUsername(username) {
        this.elements.usernameInput().type(username);
    };

    typePassword(password) {
        this.elements.passwordInput().type(password);
    };

    clickLoginBtn() {
        this.elements.loginBtn().click()
    };
}

module.exports = new homePageSwagLab();