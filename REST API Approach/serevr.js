// console.log( 'hello world');
var Db = require('./signinup/dboperation');
var u = require('./signinup/user');
var dboperation = require('./signinup/dboperation');

const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

// Init App
var app = express();

var router = express.Router(); 
const path = require('path');
const User = require('./signinup/user');



// Bring in Models
// let { Article } = require('./models/article');


// Load View Engine
// app.set('views',path.join(__dirname,'views'));
// app.set('view engine', 'ejs');


// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());

app.use(cors());
app.use('/', router);
app.use('/static', express.static('signinup'))





router.use((req,res,next)=>{
    // console.log('middleware');
    next();
})


// home route

// app.get('/', function (req, res) {
//     // Render index page
//     fileName = 'login.html' ;
//     res.sendFile(path.join(__dirname,'views/'+fileName), function (err) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('Sent:', fileName);
//         }
//     });
// }); 


app.get('/',function(req, res) {
    res.sendFile(path.join(__dirname,'signinup/signin-signup.html'))
});

router.post('/login', async (req, res) => {
    try{
        // console.log(req.body);
        // console.log('hi now');
        const email = req.body.login_email;
        const password = req.body.login_password;

        var u_details,u_pass;

        dboperation.getUser(email).then(result => {
            u_details = result[0];
            u_pass = result[0][0].user_password;
            console.log(u_pass);
            // console.log(Object.keys(u_details).length)

            //  && password===u_pass
            if(Object.keys(u_details).length>0 && password.trim() === u_pass.trim()){
                res.sendFile(path.join(__dirname,'signinup/dashboard.html'));
            }
            else{
                res.sendFile(path.join(__dirname,'signinup/signin-signup.html'));
            }
        })

        //  u_details = dboperation.getUser(email);


        // console.log(u_pass)
        // console.log(Object.keys(u_details).length)
        

        
    } catch (error){
        console.log(error);
    }
});


router.post('/signup', async (req, res) => {
    try{
        console.log(req.body);

        const name = req.body.n_name;
        const email = req.body.n_email;
        const country = req.body.n_country;
        const phone = req.body.n_phone;
        const password = req.body.n_pass;

        console.log(email,name,country,phone,password);

        let newuser = new User(name,email,country,phone,password);

        dboperation.addUser(newuser).then(result => {
            res.status(201).json(result);
        })

        res.sendFile(path.join(__dirname,'signinup/signin-signup.html'))
    } catch(error){
        console.log(error);
    }
});

app.get('/dash',function(req, res) {
    res.sendFile(path.join(__dirname,'signinup/dashboard.html'))
});


router.route('/users').get((req,res) =>{
    try{
        dboperation.getUsers().then(result =>{
            // console.log(result.length);
            // let i ;
            // for (i = 0; i < result.length; i++) {
            //     console.log(i);
            //     res.json(result[i]);
            //     console.log(result[i]);
            // }
            res.json(result[0]);
            console.log(result[0]);
        })
    }
    catch(error){
        console.log(error);
    }
})

router.route('/users/:user_email').get((request,response)=>{

    dboperation.getUser(request.params.user_email).then(result => {
       response.json(result[0]);
    })

})

router.route('/newuser').post((request,response)=>{

    let nuser = {...request.body}

    dboperation.addUser(nuser).then(result => {
       response.status(201).json(result);
    })

})

// start the server
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log('server started on '+port);
});