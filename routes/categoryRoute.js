const express = require('express');
const categoryRouter = express.Router();


const {getuser, adduser, updateUser, deleteuser} = require('../controllers/Tbcategory');

categoryRouter.get('/viewauser11',getuser);
categoryRouter.post('/adduser11',adduser);
categoryRouter.put('/updateUser11/:category_id',updateUser);
categoryRouter.delete('/deleteuser11/category_id',deleteuser)




module.exports = {categoryRouter};