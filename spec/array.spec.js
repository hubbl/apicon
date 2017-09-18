describe('Array specs', () => {
    describe('forEach()', () => {
        it('throws if no callback is provided', () => {
            expect([].forEach).toThrow();
        });

        it('does not throw if a callback is provided', () => {
            const someArray = [];

            const throwWrapper = someArray.forEach.bind(someArray, () => {});

            expect(throwWrapper).not.toThrow();
        });
    });
});
