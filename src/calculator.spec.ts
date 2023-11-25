import calculator from "./calculator";

describe('calculator', () => {
    it('should add two numbers', () => {
        const result  = calculator.add(1, 2);
        expect(result).toEqual(3);
    });
});
