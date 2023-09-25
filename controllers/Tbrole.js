const {connection} = require('../model/dbconfig')

/*const getRole = async (req, res) => {
    try {
      let sqlQuery = "SELECT * FROM role";
  
      await connection.query(sqlQuery, function (error, result, field) {
        if (error) {
          console.log(error.sqlMessage);
        } else {
          res.json(result);
        }
      });
    } catch (err) {
      console.log(err.message);
    }
  }
  
  


const getrole = async ( req,res)=>{
    try{
        let sqlquery = "SELECT * FROM role"
         await connection.query(sqlquery , function(error,result,field){
if(error){
    console.log(error.sqlMessage)
}
else{
    res.json(result)
}
         }) 
    }
    catch(err)
    {
        console.log(err.message)
    }
}*/

let getalluser = function (req, res) {
    let sqlquery = 'select * from role';
    connection.query(sqlquery, (err, result) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(result)
            console.log(result);
        }
    })
}

let adduser = function (req, res) {
    let sqlquery1 = "INSERT INTO role SET?";
    let userdata = req.body;
    console.log(userdata);
    connection.query(sqlquery1, userdata, function (error, result) {
        if (error)
            console.log(error.sqlMessage);
        else
            res.send(result);
    })
}
    

let addrole = function (req, res) {
    let sqlquery1 = "INSERT INTO role SET?";
    let userdata = req.body;
    console.log(userdata);
    connection.query(sqlquery1, userdata, function (error, result) {
        if (error)
            console.log(error.sqlMessage);
        else
            res.send(result);
    })
}

let updateUser = function (req, res) {
    let data=  [req.body,req.params.id];
    // let status = req.body.status;
    // let name = req.body.name;

    let sql = 'UPDATE role SET? WHERE role_id =?';
    
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
    let sqlquery = "DELETE FROM role WHERE role_id=?";
    connection.query(sqlquery,[id], function(error, result){
        if(error)
        console.log(error.sqlMessage);
        else
        res.send(result);
    }) 
}

module.exports = { getalluser , adduser, updateUser, deleteuser};