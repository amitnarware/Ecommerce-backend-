const express = require('express');
const role_assignRouter = express.Router();


const {getuser, adduser, updateUser,deleteuser} = require('../controllers/Tbrole_assign');

role_assignRouter.get('/viewalluser4',getuser);
role_assignRouter.post('/adduser4',adduser);
role_assignRouter.put('/updateUser4/:role_id',updateUser);
role_assignRouter.delete('/deleteuser4/:role_id',deleteuser)




module.exports = {role_assignRouter};