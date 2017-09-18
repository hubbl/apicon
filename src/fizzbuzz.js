function fizzbuzz(zahl) {
    if (zahl % 15 === 0) {
        return 'fizzbuzz';
    }

    if (zahl % 3 === 0) {
        return 'fizz';
    }

    if (zahl % 5 === 0) {
        return 'buzz';
    }

    return zahl;
}
module.exports = fizzbuzz;
