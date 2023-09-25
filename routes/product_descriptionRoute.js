const express = require('express');
const product_descriptionRouter = express.Router();


const {getuser, adduser, updateUser,deleteuser} = require('../controllers/Tbproduct_description');

product_descriptionRouter.get('/viewuser9',getuser);
product_descriptionRouter.post('/adduser9',adduser);
product_descriptionRouter.put('/updateUser9/:product_id',updateUser);
product_descriptionRouter.delete('/deleteuser9/:product_id',deleteuser)




module.exports = {product_descriptionRouter};