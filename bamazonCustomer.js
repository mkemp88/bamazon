var inquirer = require('inquirer');
var connection = require("./connection.js");


var getAllProducts = function () {
        console.log("lol");
        connection.query("SELECT * FROM products", function (err, res) {
            if(err){
                throw err;
            }else{
                console.log(res);
                promptUserToBuy();
            }
        });
}

var continueShopping = function () {
    inquirer.prompt([{
        type:"confirm",
        question:"Would you like to continue shopping?",
        name:"continueShopping",
    }]).then(function (confirm){
        var truth = confirm.continueShopping;
           if(truth === true){
            getAllProducts();
            console.log("this is running")
           }else {
            console.log("Come back again!");
        }
        
    })
}


var promptUserToBuy = function (){
    inquirer.prompt([{
        type:"input",
        message:"What is the ID of the product you wish to purchase?",
        name:"product" 
    },
    {
        type:"input",
        message:"How many would you like?",
        name:"quantity"
    }]).then (function(input){
        var item = input.product;
        var quantity = input.quantity;
        console.log(item);
        connection.query("SELECT * FROM products WHERE ?", {id: item}, function (err, res){
            var res = res[0];
            console.log(res);
            if(err) throw err;
            if(quantity <= res.stock_quantity){
                console.log("Your item is in stock!");
                connection.query("UPDATE products SET stock_quantity= " + (res.stock_quantity - quantity) + " WHERE id = " + item, function(err,response){
                    if(err) throw err;
                    console.log("Your total is $" + res.price * quantity);
                    console.log("Thanks for shopping!")
                    continueShopping();
                })
            }else {
                console.log("Sorry! We dont have that quantity right now!");
                console.log(res.stock_quantity);
            }
        })
    });
};
getAllProducts();
