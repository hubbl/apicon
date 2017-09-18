function async(cb) {
    const result = 'Hello';
    setTimeout(() => {
        cb(result);
    }, 1000);
}

module.exports = async;
