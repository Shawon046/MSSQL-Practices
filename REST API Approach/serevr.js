// console.log( 'hello world');
const express = require('express');
const path = require('path');

// const ejs = require('ejs');

// Init App
const app = express();

// Bring in Models
// let { Article } = require('./models/article');

// Load View Engine
// app.set('views',path.join(__dirname,'views'));
// app.set('view engine', 'ejs');

app.use('/static', express.static( 'views'));


// Body Parser Middleware
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());


// home route

// Passing Server-Side Data to the Frontend
// For a simple array, you can use this example instead, 
// which will create a p tag for every name in the listnames variable
// app.get('/', function (req, res) {
//     var name = "Louise";
//     var listnames = ["Louise", "Sadie", "Erik", "Raph", "Gina"];
//     // Render index page
//     res.render('index', {
//         // EJS variable and server-side variable
//         title: 'article', 
//         message: 'Hello there!' ,
//         name: name,
//         listnames: listnames
//     });
// });


app.get('/', function (req, res) {
    // Render index page
    fileName = 'login.html' ;
    res.sendFile(path.join(__dirname,'views/'+fileName), function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});


// start the server
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log('server started on '+port);
});