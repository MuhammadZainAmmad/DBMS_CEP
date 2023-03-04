var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost" ,
    user: "root",
    password: "password" ,
    database: "projectDBMS"
});

con.connect(function(error){
    if (error) throw error;
    console.log("you are connected");
    const sql = "SELECT * FROM product"
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log("the required result is here", result[0].prodID);
    })
});