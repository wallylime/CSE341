const express = require('express');
const router = express.Router();

//Need this to use the .getAll & .getSingle functions below
const contactsController = require('../controllers/contacts');

/*Here's an article that helped me understand how the express.Router() works:
https://vegibit.com/what-is-express-router-for/#:~:text=Express%20Routers%20are%20a%20way,js. 
In CSE 340, we had to write lots of case statements to determine what we wanted
to have happen. This is a shortcut.*/
router.get('/', contactsController.getAll);
router.get('/:id', contactsController.getSingle);

/*Question about this: why are we exporting the same thing that was exported
in the routes/index.js file?*/
module.exports = router;
