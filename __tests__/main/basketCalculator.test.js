const basketCalculator = require('../../src');

describe('<BasketCalculator>', () => {
    it('should evaluate [1] to 8', () => {
        expect(basketCalculator([1])).toBe(8 * 1);
    });

    it('should evaluate [1, 2] to (8 * 2 * 0.95) = 15', () => {
        expect(basketCalculator([1, 2])).toBe(8 * 2 * 0.95);
    });

    it('should evaluate [1, 2, 3] to (8 * 3 * 0.9) = 21.6', () => {
        expect(basketCalculator([1, 2, 3])).toBe(8 * 3 * 0.9);
    });

    it('should evaluate [1, 2, 3, 4] to (8 * 4 * 0.8) = 21.6', () => {
        expect(basketCalculator([1, 2, 3, 4])).toBe(8 * 4 * 0.8);
    });

    it('should evaluate [1, 2, 3, 4, 5] to (8 * 5 * 0.75) = 30.0', () => {
        expect(basketCalculator([1, 2, 3, 4, 5])).toBe(8 * 5 * 0.75);
    });

    it('should evaluate [2] to 8 * 2 = 16', () => {
        expect(basketCalculator([1, 1])).toBe(8 * 2);
    });

    it('should evaluate [1, 1, 2] to (8 * 2 * 0.95 + 8 * 1) = 23.20', () => {
        expect(basketCalculator([1, 1, 2])).toBe(8 * 2 * 0.95 + 8 * 1);
    });

    it('should evaluate [1, 1, 2, 3] to 8 * 3 * 0.9 + 8 * 1) = 29.6', () => {
        expect(basketCalculator([1, 1, 2, 3])).toBe(8 * 3 * 0.9 + 8 * 1);
    });

    it('should evaluate [1, 1, 2, 2, 3, 3, 4, 5] to (8 * 4 * 0.8 + 8 * 4 * 0.8) =  51.2', () => {
        expect(basketCalculator([1, 1, 2, 2, 3, 3, 4, 5])).toBe(8 * 4 * 0.8 + 8 * 4 * 0.8);
    });
});