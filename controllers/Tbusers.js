const bcrypt = require('bcrypt')
const {connection} = require('../model/dbconfig')
const jwt = require('jsonwebtoken');
const jwtSecret = 'jwtsecret';
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const express = require('express');
const app = express();




let getuser = function ( req, res) {
    let sqlquery = 'SELECT * FROM users';
    connection.query(sqlquery, (err, result) => {
        if (err) {
            res.send(err)  
        }
        else {
            res.send(result)
            // console.log(result);
        }
    })
} 

/*const transporter = nodemailer.createTransport({
  service: 'Gmail', // e.g., 'Gmail', 'Outlook'
  auth: {
    id: 'amitnarware40@gmail.com',
    pass: '123dejd',
  },
});
function sendEmail(to, subject, text) {
  const mailOptions = {
    from: 'amitkumarnarwara@gmail.com',
    to: "amitnarware40@gmail.com",
    subject: "hello amit",
    text: "hello",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error occurred while sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}
let getuser = function(req, res) {
  let sqlquery = 'SELECT * FROM users';
  connection.query(sqlquery, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);

      // Send email with the user data
      const emailData = JSON.stringify(result);
      const toEmail = 'amitnarware40@gamil.com';
      const emailSubject = 'User Data';
      const emailText = `User data: ${emailData}`;

      sendEmail(toEmail, emailSubject, emailText);
    }
  });
};






passport.use(new LocalStrategy(
  function(username, password, done) {
    if (username === 'amit' && password === '2345') {
      return done(null, { id: 12345, username: 'amit' });
    } else {
      return done(null, false);
    }
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  if (id === 12345) {
    return done(null, { id: 12345, username: 'amit' });
  } else {
    return done(new Error('User not found'));
  }
});



function authenticateToken(req, res, next) {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.sendStatus(401); // Unauthorized
    }
    req.user = user;
    next();
  })(req, res, next);
}

function generateToken(userdata) {
  const token = jwt.sign(userdata, jwtSecret, { expiresIn: '1d' });
  return token;
} */



let adduser = function (req, res) {
  const salt = bcrypt.genSaltSync(10);
  const value = bcrypt.hashSync(req.body.password, salt);

  let userdata = {
    id: req.body.id,
    name: req.body.name,
    password: value,
    status: req.body.status,
    createdob: req.body.createdob
  };

  let sqlquery = "INSERT INTO users SET ?";
  console.log(userdata);

  connection.query(sqlquery, userdata, function (error, result) {
    if (error) {
      console.log(error.sqlMessage);
      res.send(error.sqlMessage);
    } else {
      res.send(result);
    }
  });
}; 






 


let updateUser = function (req, res) {
    let data=  [req.body,req.params.id];
    // let status = req.body.status;
    // let name = req.body.name;

    let sql = 'UPDATE users SET? WHERE id =?';
    
    connection.query(sql,data, (err, result) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(result)
        }
    })
}

let deleteuser = function(req, res){
    let id =req.params.id;
    let sqlquery = "DELETE FROM users WHERE id=?";
    connection.query(sqlquery,[id], function(error, result){
        if(error)
        console.log(error.sqlMessage);
        else
        res.send(result);
    }) 
}

module.exports = {getuser, adduser, updateUser, deleteuser};
