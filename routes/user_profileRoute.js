const express = require('express');
const user_profileRouter = express.Router();

const {getalluser, adduser, updateUser,deleteuser} = require('../controllers/Tbuser_profile');

user_profileRouter.get('/viewalluser',getalluser);
user_profileRouter.post('/adduser',adduser);
user_profileRouter.put('/updateUser/:id',updateUser);
user_profileRouter.delete('/deleteuser/:id',deleteuser);

module.exports = {user_profileRouter};