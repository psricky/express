const express = require('express');
const app = express();
const port = 3000;
/*
app.get('/welcome', (req, res) => {
    res.send("Welcome to dynamic routes");
});
*/
app.get('/welcome/:username', (req, res) => {
    const username = req.params.username;
    const role= req.query.role;
    res.send(`Welcome ${username}! Your role is ${role}.`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});