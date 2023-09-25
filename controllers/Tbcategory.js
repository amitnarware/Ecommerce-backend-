const {connection} = require('../model/dbconfig')


let getuser = function ( req, res) {
    let sqlquery = 'SELECT * FROM category';
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

let adduser = function (req, res) {
    let sqlquery1 = "INSERT INTO category SET?";
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

    let sql = 'UPDATE category SET? WHERE category_id =?';
    
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
    let sqlquery = "DELETE FROM category WHERE category_id=?";
    connection.query(sqlquery,[id], function(error, result){
        if(error)
        console.log(error.sqlMessage);
        else
        res.send(result);
    }) 
}

module.exports = {getuser, adduser, updateUser, deleteuser};