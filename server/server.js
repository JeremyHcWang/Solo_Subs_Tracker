const express = require('express');
const path = require('path');

const PORT = 3000;
const app = express();

const apiRouter = require('./routes/api.js');

/**
 * handle parsing request body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * handle requests for static files
 */
app.use(express.static(path.resolve(__dirname, '../client')));

app.use('/api', apiRouter);

// 404 handler
app.use('*', (req, res) => {
    res.status(404).send('Not Found');
})

// Global error handler
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send({ error: err });
});

app.listen(PORT, () => {
console.log(`Listening on port ${PORT}...`);
});

module.exports = app;