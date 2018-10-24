var mysql = require('mysql');

var config = {
  host:'localhost',
  port:3306,
  user:'root',
  password:'rootroot',
  database:'bamazon'
};
 
var connection = mysql.createConnection(config)
 
connection.connect(function(err){
  if(err){
    console.log("Error: " + err)
  }
  console.log("Connected");
})

module.exports = connection;