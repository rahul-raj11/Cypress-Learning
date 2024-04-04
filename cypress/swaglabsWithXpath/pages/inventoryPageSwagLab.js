class inventoryPageSwagLabWithXpath {

    elements = {
        productTitle: () => cy.xpath("//span[@class='title']"),
        burgerMenuBtn: () => cy.xpath("//button[@id='react-burger-menu-btn']"),
        logoutLink: () => cy.xpath("//nav[@class='bm-item-list']//a[@id='logout_sidebar_link']")
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

module.exports = new inventoryPageSwagLabWithXpath();