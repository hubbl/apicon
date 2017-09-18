const asyncFunc = require('../src/async');

describe('async', () => {
    it('should call the callback', done => {
        asyncFunc(result => {
            expect(result).toEqual('Hello');
            done();
        });
    });
});
