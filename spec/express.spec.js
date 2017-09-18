const app = require('../src/express');
const request = require('supertest');

describe('GET /user', function() {
    it('respond with json', function(done) {
        request(app)
            .get('/user')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body.length).toEqual(3);
                done();
            })
            .catch(e => {
                fail(e);
                done(e);
            });
    });
});
