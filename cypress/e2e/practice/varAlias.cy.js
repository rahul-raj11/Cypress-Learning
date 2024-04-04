describe('Variables & Aliases Demo', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/modal-dialogs');
    });

    // it('Return Variable Misconception', () => {
    //     const smallModalText = cy.get('#showSmallModal').text();
    //     cy.log(smallModalText);
    // });

    it('Clousers & Variables', () => {
        cy.get('#showSmallModal').then(($modalButton) => {
            const smallModalText = $modalButton.text();
            cy.log(smallModalText);

            $modalButton.click();

            cy.get('#example-modal-sizes-title-sm').contains(smallModalText, {matchCase: false});
        });
    });

    // it('Context Misconception', () => {
    //     cy.log(smallModalText);
    // });

    it('Alias Demo', function() {
        cy.get('#showSmallModal').invoke().as('invokeText');

        cy.get('#showSmallModal').then(($modalButton) => {
            const smallModalText = $modalButton.text();
            cy.log(smallModalText);

            cy.wrap(smallModalText).as('wrapText');
        });
    });

    it('Shared Content', function() {
        cy.log("Invoke Result " + this.invokeText);
        cy.log("Wrap Result " + this.wrapText);
    });
});