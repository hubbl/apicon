const asyncFunction = require('../src/promise');

describe('async', () => {
    it('should resolve', done => {
        asyncFunction(true).then(value => {
            expect(value).toEqual('Hello');
            done();
        });
    });
    it('should reject', done => {
        asyncFunction(false).catch(value => {
            expect(value).toEqual('Hello');
            done();
        });
    });
    it('should async', async done => {
        const result = await asyncFunction(true);
        expect(result).toEqual('Hello');
        done();
    });
    it('should async', async done => {
        try {
            const result = await asyncFunction(false);
        } catch (e) {
            expect(e).toEqual('Hello');
            done();
        }
    });
});
