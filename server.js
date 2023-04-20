const express = require('express');//express is a framework we're using
const app = express();//we're using that framework to make our app here
const port = process.env.PORT || 3000;//what port is render using? default to 3000
app.use('/', require('./routes/index.js'));//go to the index file in the routes folder
app.listen(port, ()=>
{console.log(`Running on port number ${port}`)})//Listen for a connection through the port