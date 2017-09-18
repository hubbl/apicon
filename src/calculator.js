class Calculator {
    add(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Use numbers you fool!');
        }

        return a + b;
    }
}

module.exports = Calculator;
