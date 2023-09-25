const express = require('express');
const customerRouter = express.Router();


const {getalluser, adduser, updateUser,deleteuser} = require('../controllers/Tbcustomer');

customerRouter.get('/viewalluser7',getalluser);
customerRouter.post('/adduser7',adduser);
customerRouter.put('/updateUser7/:offer_code',updateUser);
customerRouter.delete('/deleteuser7/:offer_code',deleteuser)




module.exports = {customerRouter};