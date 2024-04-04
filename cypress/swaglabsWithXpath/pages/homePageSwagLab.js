class homePageSwagLabWithXpath {

    elements = {
        usernameInput: () => cy.xpath("//input[@id='user-name']"),
        passwordInput: () => cy.xpath("//input[@id='password']"),
        loginBtn: () => cy.xpath("//input[@id='login-button']"),
        ErrorMsg: () => cy.xpath("//h3[@data-test='error']")
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

module.exports = new homePageSwagLabWithXpath();