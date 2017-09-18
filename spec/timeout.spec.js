const Async = require('../src/timeout');

describe('async', () => {
    it('should async change the value', () => {
        jasmine.clock().install();

        const async = new Async();

        expect(async.value).toEqual('');

        async.changeValue(1000, 'Klaus');

        jasmine.clock().tick(500);

        expect(async.value).toEqual('');

        jasmine.clock().tick(500);

        expect(async.value).toEqual('Klaus');

        jasmine.clock().uninstall();
    });
});
