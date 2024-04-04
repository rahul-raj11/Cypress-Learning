//Topics:
// -> Describe and Context
// -> It and Specify
// -> Unit Testing Demo

//import { subtract } from "cypress/types/lodash";

// Dummy Application
let add = (a,b) => a + b;
let subtract = (a,b) => a - b;
let divide = (a,b) => a / b;
let multilpy = (a,b) => a * b;


// Cypress Test
// Describe - Context -> Group tests, nest nultiple instances.
describe('Unit testing of our dummy application', () => {

    context('Match with POSITIVE number', () => {
        // it or specify
        it('should add positive number', () => {
            expect(add(2,2)).to.eq(4);
        });

        it('should subtract positive number', () => {
            expect(subtract(4,2)).to.eq(2);
        });

        it('should divide positive number', () => {
            expect(divide(4,2)).to.eq(2);
        });

        it('should multiply positive number', () => {
            expect(multilpy(4,2)).to.eq(8);
        });
    });

    describe('Math with DECIMAL number', () => {
        it('should add decimal number', () => {
            expect(add(2.2,2.2)).to.eq(4.4);
        });

        it('should subtract decimal number', () => {
            expect(subtract(4.4,2.2)).to.eq(2.2);
        });
    });
});