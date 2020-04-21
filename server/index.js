const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/breatheSessions', (req, res) => {
    db.findSessions((err, sessions) => {
        if (err) {
            console.log('err');
        } else {
            res.send(sessions);
        }
    });
})

app.post('/api/breatheSessions', (req, res) => {
    let breathDuration = Object.keys(req.body)[0];
    db.saveSession(breathDuration, (err, success) => {
        if (err) {
            console.log('error saving into db');
        } else {
            res.send('ok');
        }
    })
})

app.listen(port, () => console.log(`Listening on ${port}: ${Date()}`))