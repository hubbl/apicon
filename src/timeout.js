class Async {
    constructor() {
        this.value = '';
    }

    changeValue(timeout, value) {
        setTimeout(() => {
            this.value = value;
        }, timeout);
    }
}
module.exports = Async;
