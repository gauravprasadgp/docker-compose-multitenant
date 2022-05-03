var express = require('express');
var app = express();
var ip = require('ip');
var port = 8001;
const { Pool, Client } = require("pg");
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
async function clientDemo() {
    const client = new Client(credentials);
    await client.connect();
    const now = await client.query("SELECT NOW()");
    await client.end();
    return now;
}
app.get('/*', async (req, res) =>{
    const clientResult = await clientDemo();
    console.log("Time with client: " + clientResult.rows[0]["now"]);
    res.send("Hello Authentication API!"+clientResult);
});

(async () => {
    const poolResult = await poolDemo();
    console.log("Time with pool: " + poolResult.rows[0]["now"]);
  
    const clientResult = await clientDemo();
    console.log("Time with client: " + clientResult.rows[0]["now"]);
})();

app.listen(port, () => {
    console.log('Node running on' + ip.address(), "port: ", port)
});