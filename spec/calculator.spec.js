const Calculator = require('../src/calculator');

describe('Calculator', () => {
    it('should work', () => {
        expect(true).not.toBe(false);
    });

    describe('Addition', () => {
        //let calc;

        beforeEach(() => {
            // arrange
            this.calc = new Calculator();
        });

        it('should add 1 and 1 and return 2', () => {
            // act
            const result = this.calc.add(1, 1);
            // assert
            expect(result).toEqual(2);
        });

        it('should add 2 and 1 and return 3', () => {
            // act
            const result = this.calc.add(2, 1);
            // assert
            expect(result).toEqual(3);
        });
    });
});
