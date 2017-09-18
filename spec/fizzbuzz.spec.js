const fizzbuzz = require('../src/fizzbuzz');

describe('Fizzbuzz', function() {
    it('should return 1 if 1 is given', function() {
        var result = fizzbuzz(1);
        expect(result).toBe(1);
    });

    it('should return 2 if 2 is given', function() {
        var result = fizzbuzz(2);
        expect(result).toBe(2);
    });

    it('should return "fizz" if 3 is given', function() {
        var result = fizzbuzz(3);
        expect(result).toBe('fizz');
    });

    it('should return "buzz" if 5 is given', function() {
        var result = fizzbuzz(5);
        expect(result).toBe('buzz');
    });

    it('should return "fizz" if 6 is given', function() {
        var result = fizzbuzz(6);
        expect(result).toBe('fizz');
    });

    it('should return "buzz" if 10 is given', function() {
        var result = fizzbuzz(10);
        expect(result).toBe('buzz');
    });

    it('should return "fizzbuzz" if 15 is given', function() {
        var result = fizzbuzz(15);
        expect(result).toBe('fizzbuzz');
    });

    it('should return "fizzbuzz" if 30 is given', function() {
        var result = fizzbuzz(30);
        expect(result).toBe('fizzbuzz');
    });
});
