const log = require('../src/halloween');

describe('log', () => {
    it('should log', () => {
        jasmine.clock().install();

        var baseTime = new Date(2017, 11, 24);

        jasmine.clock().mockDate(baseTime);

        expect(log('hello')).toEqual(
            'Sun Dec 24 2017 00:00:00 GMT+0100 (CET) hello'
        );

        jasmine.clock().uninstall();
    });

    it('should log halloween', () => {
        jasmine.clock().install();
        var baseTime = new Date(2017, 9, 31);
        jasmine.clock().mockDate(baseTime);
        expect(log('hello')).toEqual(
            'Tue Oct 31 2017 00:00:00 GMT+0100 (CET) Boooh! hello'
        );
        jasmine.clock().uninstall();
    });
});
