function async(success) {
    return new Promise((resolve, reject) => {
        const value = 'Hello';
        setTimeout(() => {
            if (success) {
                resolve(value);
            } else {
                reject(value);
            }
        }, 100);
    });
}

module.exports = async;
