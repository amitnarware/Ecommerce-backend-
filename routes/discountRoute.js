const express = require('express');
const discountRouter = express.Router();


const {getalluser, adduser, updateUser,deleteuser} = require('../controllers/Tbdiscount');

discountRouter.get('/viewalluser6',getalluser);
discountRouter.post('/adduser6',adduser);
discountRouter.put('/updateUser6/:offer_code',updateUser);
discountRouter.delete('/deleteuser6/:offer_code',deleteuser)




module.exports = {discountRouter};