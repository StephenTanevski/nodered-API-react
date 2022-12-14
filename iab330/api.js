const client = require('./db.js')
const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3300");
})

client.connect();

// Cors is initialised 
const cors = require('cors');
app.use(cors());
app.options('*', cors());

// App.get to query db getting all rows from the table room
app.get('/', (req, res)=>{
    client.query(`Select * from room`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

// App.get uses parameters to write query displaying specific data
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