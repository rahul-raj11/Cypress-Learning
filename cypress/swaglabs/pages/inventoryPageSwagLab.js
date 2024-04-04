class inventoryPageSwagLab {

    elements = {
        productTitle: () => cy.get('.title'),
        burgerMenuBtn: () => cy.get('#react-burger-menu-btn'),
        logoutLink: () => cy.get('.bm-item-list > a#logout_sidebar_link')
    };

    validateTitle() {
        return this.elements.productTitle();
    };

    clickBurgerMenuBtn() {
        this.elements.burgerMenuBtn().click();
    };

    clickLogout() {
        this.elements.logoutLink().click();
    }

    
}

module.exports = new inventoryPageSwagLab();