const express = require('express')
const roleRouter = express.Router();

  const {getalluser, adduser, updateUser,deleteuser} = require('../controllers/Tbrole');

roleRouter.get('/viewalluser3',getalluser);
roleRouter.post('/adduser3',adduser);
roleRouter.put('/updateUser3/:role_id',updateUser);
roleRouter.delete('/deleteuser3/:role_id',deleteuser)




 module.exports = {roleRouter};

