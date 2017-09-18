const Calculator = require('../src/calculator');

describe('spy', () => {
    it('should spy', () => {
        const calc = new Calculator();

        spyOn(calc, 'add');

        calc.add.and.callFake(() => {
            return 42;
        });

        //calc.add.and.callThrough();

        const result = calc.add(1, 1);

        expect(calc.add).toHaveBeenCalled();
        expect(result).toEqual(42);
    });
});
