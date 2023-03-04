// some variables

var mysql = require('mysql');
var express = require('express'); 
var app = express();

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "ecommerce_website"
// });
// con.connect(function (error) {
//     if (error) throw error;
//     console.log("connected")
//     // con.query("select * from orders", function (err, result) {
//     //     if (error) throw error;
//     //     console.warn("all results are here", result)
//     })

// To get to localhost:8080

app.get("/", function (request, response) {
    fetchData(response);
    console.log("Done. Displayed data!!");
});

// To connect with the database

var db = mysql.createConnection({
    host: 'localhost' ,
    user: 'root' ,
    password: '' ,
    database: 'ecommerce_website' 
});

// Connection with the database

db.connect(function(error){
    if (error){throw error};
    console.log("connected to the database")
})

// Functions

function executeQuery(sql,cb){
    db.query(sql,function(error,result,fields){
        if (error){throw error};
        cb(result);

    })
}

function fetchData(response){
    executeQuery("select * from customer",function(result){
        console.log(result);
        response.write('<table><tr>');
        for (var column in result[0]){
            response.write('<td><label>' + column + '</label></td>');
            response.write('</tr>');
        }
        for (var row in result){
            response.write('<tr>');
            for (var column in result[row]){
                response.write('<td><label>' + result[row][column] + '</label></td>');
            }
            response.write('</tr>');
        }
        response.end('</table>');
    });
}

// app.post("/", function (req, res) {
//     var adminID = req.body.adminID;
//     con.query("select * from admin where adminID = ?",[adminID],function(error,results,fields){
//         if (results.length > 0) {
//             res.redirect("/welcome");
//         }else{
//             res.redirect("/");
//         }
//         res.end();
//     })

// })
// app.get("/", function (req, res) {
//     res.sendFile(__dirname + "/welcome.html");
// })

// to listen at port

app.listen(8080,function(){
    console.log("Listening to Port 8080");
})
