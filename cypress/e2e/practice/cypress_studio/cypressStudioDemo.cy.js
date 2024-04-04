/* ==== Test Created with Cypress Studio ==== */
it('Sauce Demo app flow', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://www.saucedemo.com/');
  cy.get('#login_credentials').click();
  cy.get('[data-test="username"]').clear('standard_user');
  cy.get('[data-test="username"]').type('standard_user');
  cy.get('.login_password').click();
  cy.get('[data-test="password"]').clear('secret_sauce');
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('[data-test="login-button"]').click();
  cy.get('.title').click();
  cy.get('#react-burger-menu-btn').click();
  cy.get('#logout_sidebar_link').click();
  cy.get('.login_logo').click();
  cy.get('#login_credentials').click();
  cy.get('[data-test="username"]').clear('problem_user');
  cy.get('[data-test="username"]').type('problem_user');
  cy.get('.login_password').click();
  cy.get('[data-test="password"]').clear('secret_sauce');
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('[data-test="login-button"]').click();
  cy.get('#item_4_title_link > .inventory_item_name').click();
  cy.get('.inventory_details_name').click();
  cy.get('[data-test="back-to-products"]').click();
  cy.get('#react-burger-menu-btn').click();
  cy.get('#logout_sidebar_link').click();
  cy.get('#login_credentials').click();
  cy.get('[data-test="username"]').clear('error_user');
  cy.get('[data-test="username"]').type('error_user');
  cy.get('.login_credentials_wrap-inner').click();
  cy.get('.login_password').click();
  cy.get('.login_password').click();
  cy.get('[data-test="password"]').clear('secret_sauce');
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('[data-test="login-button"]').click();
  cy.get('#item_4_title_link > .inventory_item_name').click();
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  cy.get('[data-test="remove-sauce-labs-backpack"]').click();
  cy.get('[data-test="remove-sauce-labs-backpack"]').click();
  cy.get('[data-test="back-to-products"]').click();
  cy.get('#react-burger-menu-btn').click();
  cy.get('#logout_sidebar_link').click();
  /* ==== End Cypress Studio ==== */
});