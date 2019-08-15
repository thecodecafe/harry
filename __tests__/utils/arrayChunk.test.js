const arrayChunk = require('../../src/utils/arrayChunk');

describe('<ArrayChunk.Util>', () => {
    it('should return an array of items', () => {
        expect(
            Array.isArray(arrayChunk([4, 5, 66, 7], 2))
        ).toBeTruthy()
    });

    it('should return an array of three items', () => {
        expect(
            arrayChunk([4, 5, 66, 7, 4], 2).length
        ).toBe(3)
    });

    it('should have item at index 3 as second item in second array', () => {
        expect(
            arrayChunk([4, 5, 66, 7, 4], 2)[1][1]
        ).toBe(7)
    });

    it('should return an empty array for an empty argument', () => {
        expect(
            arrayChunk([], 2).length
        ).toBe(0)
    });
});