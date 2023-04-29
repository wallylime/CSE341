const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

//This will get all of the records in the contacts database
const getAll = async (req, res, next) => {
  const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .find();//no arguments given, so it will return all
  result.toArray().then((contactList) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contactList);
  });
};

//This will get a specified record from the contacts database
const getSingle = async (req, res, next) => {
  const contactId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .find({ _id: contactId });
  result.toArray().then((contactList) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contactList[0]);//This will display the first record returned that matched the argument in the find function
  });
};

module.exports = { getAll, getSingle };
