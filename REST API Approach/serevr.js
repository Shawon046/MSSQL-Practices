// console.log( 'hello world');
const express = require('express');
const path = require('path');

// const ejs = require('ejs');

// init app
const app = express();

// setting view
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

// home route

// Passing Server-Side Data to the Frontend
// app.get('/', function (req, res) {
//     var name = "Louise";
//     // Render index page
//     res.render('index', {
//         // EJS variable and server-side variable
//         title: 'article', 
//         message: 'Hello there!' ,
//         name: name
//     });
// });

// For a simple array, you can use this example instead, 
// which will create a p tag for every name in the listnames variable
app.get('/', function (req, res) {
    var name = "Louise";
    var listnames = ["Louise", "Sadie", "Erik", "Raph", "Gina"];
    // Render index page
    res.render('index', {
        // EJS variable and server-side variable
        title: 'article', 
        message: 'Hello there!' ,
        name: name,
        listnames: listnames
    });
});


// start the server
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log('server started on '+port);
});