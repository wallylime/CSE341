const routes = require('express').Router();
routes.get('/', (req, res)=>{
  res.send("Emily Wall")
})
module.exports = routes;