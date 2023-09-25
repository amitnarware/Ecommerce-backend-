const express = require('express');
const usersRouter = express.Router();


const {getuser, adduser, updateUser,deleteuser} = require('../controllers/Tbusers');

usersRouter.get('/viewuser',getuser,(req, res) => {});
usersRouter.post('/addusers',adduser);
usersRouter.put('/updateUsers/:id',updateUser);
usersRouter.delete('/deleteusers/:id',deleteuser) 


  



module.exports = {usersRouter};

