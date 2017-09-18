const Calculator = require('../src/calculator');

describe('Calculator', () => {
    it('should work', () => {
        expect(true).not.toBe(false);
    });

    describe('Addition', () => {
        //let calc;
        // this.calc als alternative

        beforeEach(() => {
            // arrange
            this.calc = new Calculator();
        });

        it('should add 1 and 1 and return 2', () => {
            debugger;
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

        it('should throw an exception if a string is provided #1', () => {
            // act
            const add = this.calc.add.bind(this.calc, 'zwei!', 1);
            // assert
            expect(add).toThrow();
        });

        it('should throw an exception if a string is provided #2', () => {
            // act

            const add = function() {
                this.calc.add('zwei!', 1);
            };
            // assert
            expect(add).toThrow();
        });

        it('should throw an exception if a string is provided #1', () => {
            expect(() => {
                this.add('zwei!', 1);
            }).toThrow();
        });
    });
});
