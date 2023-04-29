/*The express framework cuts down on how much code you have to write manually;
helps process different routes rather than having a bunch of case statements
if you were writing all the code yourself.*/
const express = require('express');
const router = express.Router();

//Any file paths with /contacts will use the contacts.js file in routes
router.use('/contacts', require('./contacts'))

//Making this available to other files that need to use it
module.exports = router;
