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

app.get('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const room = await client.query(`Select * from room Where id = $1`, [
            id
        ]);
    res.json(room.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
});