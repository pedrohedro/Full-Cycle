const express = require ('express')
const app = express()
const port = 443
const port_db = 3000
const hostname = '';
const http = require('http');

const server = http.createServer((req, res) => {
	res.statusCode = 200;
  	res.setHeader('Content-Type', 'text/plain');
  	res.end('Sysmon App is Up and Running!\n');
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

const config = {
    host: 'db', 
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('gabi')`
connection.query(sql)
connection.end()


app.get('/', (req,res) => {
    res.send('<h1>Full Cycle Rocks!!</h1>')
})

app.listen(port_db, ()=> {
    console.log('Rodando na porta' + port)
})