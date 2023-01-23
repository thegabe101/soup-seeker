const express = require('express');
const mysql = require('mysql');
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    port: 3306,
    password: "password",
    database: "LoginSystem",
    debug: true,
});

// db.connect(function (err) {
//     if (err) console.error('error connecting ' + err.stack);
//     console.log('Connected successfully.')
// })

app.post('/register', (req, res) => {

    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    db.query("INSERT INTO users(email, username, password) VALUES (?, ?, ?)", [email, username, password], (err, result) => {
        console.log(result)
        console.log(err);
    })
})

app.listen(3306, () => {
    console.log('Server running.')
})