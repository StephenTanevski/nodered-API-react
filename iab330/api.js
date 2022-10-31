const client = require('./db.js')
const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3300");
})

client.connect();

app.get('/', (req, res)=>{
    client.query(`Select * from room`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})