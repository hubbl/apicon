const using = require('jasmine-data-provider');
const Calculator = require('../src/calculator');

describe('test subtraction with data provider - direct array', () => {
    beforeEach(() => {
        this.calc = new Calculator();
    });

    using(
        [{ a: 5, b: 2, expected: 7 }, { a: 25, b: 26, expected: 51 }],
        data => {
            it('should add with data providers', () => {
                var result = this.calc.add(data.a, data.b);

                expect(result).toEqual(data.expected);
            });
        }
    );
});
