const request = require('request');

describe('google', () => {
    it('should work', done => {
        request('http://www.google.com', function(error, response, body) {
            expect(response).toBeDefined();
            expect(response.statusCode).toEqual(200);
            done();
        });
    });
});
