const express = require('express');//this is a node package
const app = express();

const port = process.env.PORT || 3000;//use Render's port or default to 3000
app.use('/', require('./routes/index.js'));
app.listen(port, ()=>
{console.log(`Running on port number ${port}`)})