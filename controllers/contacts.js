const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

//This will get all of the records in the contacts database
const getAll = async (req, res) => {
  const result = await mongodb.getDb().db().collection('contacts').find(); //no arguments given, so it will return all
  result.toArray().then((contactList) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contactList);
  });
};

//This will get a specified record from the contacts database
const getSingle = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('contacts').find({ _id: contactId });
  result.toArray().then((contactList) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contactList[0]); //This will display the first record returned that matched the argument in the find function
  });
};

//This will add a document to the contacts database
const addContact = async (req, res) => {
  const newContact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
    email: req.body.email
  };
  const response = await mongodb.getDb().db().collection('contacts').insertOne(newContact);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Sorry, an error occurred while creating the contact.');
  }
};

//This will modify a document in the contacts database
const editContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const updateContact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
    email: req.body.email
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .replaceOne({ _id: contactId }, updateContact);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Sorry, an error occurred while updating the contact.');
  }
};

//This will delete a document from the contacts database
const deleteContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db().collection('contacts').deleteOne({ _id: contactId });
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Sorry, an error occurred while deleting the contact.');
  }
};

module.exports = {
  getAll,
  getSingle,
  addContact,
  editContact,
  deleteContact
};
