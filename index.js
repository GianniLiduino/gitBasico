const express = require('express');

const mysql = require('mysql');

const app = express()

const port = 8080;
const port2 = 8081;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs'
});

connection.connect(console.log('Conexão realizada com sucesso!'))


app.get('/', (req, res) => {
    connection.query(
        'SELECT * FROM clients WHERE status = ? ORDER BY id DESC',
        [1],
        (err, results) => {
            res.send(results);
        }
    );
})

app.get('/contato', (req, res) => {
    res.send('Página contato!');
})

app.listen(port, console.log(`Servidor rodando na porta: ${port}`))