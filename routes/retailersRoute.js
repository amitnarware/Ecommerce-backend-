const express = require('express');
const retailersRouter = express.Router();


const {getuser, adduser, updateUser,deleteuser} = require('../controllers/Tbretailers');

retailersRouter.get('/viewalluser10',getuser);
retailersRouter.post('/adduser10',adduser);
retailersRouter.put('/updateUser10/:retailers_id',updateUser);
retailersRouter.delete('/deleteuser10/:retailers_id',deleteuser)




module.exports = {retailersRouter};