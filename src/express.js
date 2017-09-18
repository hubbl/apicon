const express = require('express');

const app = express();

app.get('/user', (req, res) => {
    res
        .status(200)
        .json([{ name: 'peter' }, { name: 'paul' }, { name: 'mary' }]);
});

module.exports = app;
