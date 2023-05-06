const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

/*Here's an article that helped me understand how the express.Router() works:
https://vegibit.com/what-is-express-router-for/#:~:text=Express%20Routers%20are%20a%20way,js. 
In CSE 340, we had to write lots of case statements to determine what we wanted
to have happen. This is a shortcut.*/
router.get('/', contactsController.getAll);
router.get('/:id', contactsController.getSingle);
router.post('/add', contactsController.addContact);
router.put('/edit/:id', contactsController.editContact);
router.delete('/delete/:id', contactsController.deleteContact);

module.exports = router;
