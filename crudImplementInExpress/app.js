


const express = require('express');
const app = express();
const port = 3000;

const homeRoute = require('./routes/home');
const studentsRoute = require('./routes/studentsRoute');
const courseRoute = require('./routes/courseRoutes');

app.use('/', homeRoute);
app.use('/', studentsRoute);
app.use('/', courseRoute);


app.use((req, res) => {
    res.status(404).send('"Page not found"');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
