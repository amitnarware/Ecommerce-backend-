const express = require('express');
const sub_categoryRouter = express.Router();


const {getalluser, adduser, updateUser,deleteuser} = require('../controllers/Tbsub_category');

sub_categoryRouter.get('/viewalluser2',getalluser);
sub_categoryRouter.post('/adduser2',adduser);
sub_categoryRouter.put('/updateUser2/:subcategory_id',updateUser);
sub_categoryRouter.delete('/deleteuser2/:subcategory_id',deleteuser)




module.exports = {sub_categoryRouter};