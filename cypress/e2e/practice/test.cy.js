describe("My First Test Suite", () => {
    it("My First Test", () => {
        cy.visit('https://www.google.co.in/');
        cy.get('#APjFqb').type('jp morgan').click();
    });
});