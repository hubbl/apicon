function log(message) {
    const date = new Date().toString();

    let result = date;

    if (date.indexOf('Oct 31') > -1) {
        result += ' Boooh!';
    }

    result += ' ' + message;

    return result;
}

module.exports = log;
