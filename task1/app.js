const express = require('express');

const app = express();

const port = 3200;

app.use((req, res, next) => {
    console.log("Authentication middleware called");
    next();  // Call next() to proceed to the next middleware or route handler
});

app.use('/library-2', (req, res, next) => {
    console.log('Book recommendations');
    next();  // Call next() to proceed to the next middleware or route handler
});

app.use('/library-3', (req, res, next) => {
    console.log('Special access to research papers from professors and seniors');
    next();  // Call next() to proceed to the next middleware or route handler          
});

app.get('/library-2', (req, res) => {
    res.send('<h1>Library-2 entered</h1>');
});

app.get('/library-3', (req, res) => {
    res.send('<h1>Library-3 entered</h1>');
});

app.listen(port, () => {
    console.log('Server is running');
});