var express = require('express');
var app = express();
var ip = require('ip');
var port = 8001;
const { Pool } = require("pg");
const credentials = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
};
async function poolDemo() {
    const pool = new Pool(credentials);
    const now = await pool.query("SELECT NOW()");
    await pool.end();
    return now;
  }

async function createTable(){
    const pool = new Pool(credentials);
    const now = await pool.query("CREATE DATABASE testdb");
    console.log("from query",now)
    await pool.end();
    return now;
}

app.get('/*', async (req, res) =>{
    res.send("Hello Authentication API!")
});

(async () => {
    const poolResult = await poolDemo();
    console.log("Time with pool: " + poolResult.rows[0]["now"]);
})();

app.listen(port, () => {
    console.log('Node running on' + ip.address(), "port: ", port)
});