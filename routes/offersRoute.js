const express = require('express');
const offersRouter = express.Router();


const {getalluser, adduser, updateUser,deleteuser} = require('../controllers/Tboffers');

offersRouter.get('/viewalluser5',getalluser);
offersRouter.post('/adduser5',adduser);
offersRouter.put('/updateUser5/:offerscode',updateUser);
offersRouter.delete('/deleteuser5/:offerscode',deleteuser)




module.exports = {offersRouter};