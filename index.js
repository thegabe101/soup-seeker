require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "LoginSystem",
    debug: true,
});

app.get('/', (req, res) => {
    res.send('hello there')
})

app.post('/register', (req, res) => {

    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    db.query("INSERT INTO users(email, username, password) VALUES (?, ?, ?)", [email, username, password], (err, result) => {
        console.log(result)
        console.log(err);
    })
});

app.post('/loginuser', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    db.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            if (result.length > 0) {
                console.log(result);
                res.send(result);
            } else {
                res.send({ message: 'No seeker exists with that username and password combination.' })
            }
        }
    })
});

app.listen(process.env.PORT || 3001, () => {
    console.log('Server running.')
})