const {Client} = require('pg')

// Configured to the postgres pgadmin
const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "iab330nodered",
    password: "postgres",
    port: 5432,
})

module.exports = client