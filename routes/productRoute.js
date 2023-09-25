const express = require('express');
const productRouter = express.Router();


const {getuser, adduser, updateUser,deleteuser} = require('../controllers/Tbproduct');

productRouter.get('/viewuser8',getuser);
productRouter.post('/adduser8',adduser);
productRouter.put('/updateUser8/:product_id',updateUser);
productRouter.delete('/deleteuser8/:product_id',deleteuser)




module.exports = {productRouter};