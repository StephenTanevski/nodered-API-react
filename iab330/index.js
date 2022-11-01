require('dotenv').config();

const server = require('./server');

const PORT = process.env.PORT || 5432;

// Listening for the correct port and then 
// printing to console when signal is received
server.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));