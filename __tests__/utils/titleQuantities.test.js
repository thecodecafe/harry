const titleQuantities = require('../../src/utils/titleQuantities');

describe('<GroupTitles.Util>', () => {
    it('should return an array of items', () => {
        expect(
            Array.isArray(titleQuantities([1, 1, 5, 3, 2, 4]))
        ).toBeTruthy()
    });

    it('should return an array of two items', () => {
        expect(
            titleQuantities([1, 3, 1, 3, 1]).length
        ).toBe(2)
    });

    it('should return an empty array for an empty argument', () => {
        expect(
            titleQuantities([], 2).length
        ).toBe(0)
    });
});