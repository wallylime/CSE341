const express = require('express');
const router = express.Router();

//Any file paths with /contacts will use the contacts.js file in routes
router.use('/contacts', require('./contacts'));

//Making this available to other files that need to use it
module.exports = router;
