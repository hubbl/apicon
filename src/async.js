function async(cb, value, timeout) {
    setTimeout(() => {
        cb(value);
    }, timeout);
}

module.exports = async;
