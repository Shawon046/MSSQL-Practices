var Db = require('./signinup/dboperation');
var u = require('./signinup/user');
var dboperation = require('./signinup/dboperation');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();
const path = require('path');
const User = require('./signinup/user');

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(cors());
app.use('/', router);
app.use('/static', express.static('signinup'))

router.use((req,res,next)=>{
    console.log('middleware');
    next();
})

app.get('/',function(req, res) {
    res.sendFile(path.join(__dirname,'signinup/signin-signup.html'))
});

router.post('/login', async (req, res,next) => {

    console.log(req.body);

    const email = req.body.login_email;
    const password = req.body.login_password;

    console.log(email,password);
    if(1){
        res.sendFile(path.join(__dirname,'signinup/dashboard/.html'));
    }
});

router.post('/signup', async (req, res,next) => {

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

});

app.get('/dash',function(req, res) {
    res.sendFile(path.join(__dirname,'signinup/dashboard.html'))
});

app.get('/users',function(req, res) {
    try{
        dboperation.getUsers().then(res =>{
            res.json(res[0]);
        })
    }
    catch(error){
        console.log(error);
    }
});

router.route('/users').get((req,res) =>{
    try{
        dboperation.getUsers().then(result =>{
            res.json(result[0]);
        })
    }
    catch(error){
        console.log(error);
    }
})

router.route('/users/:user_email').get((request,response)=>{

    dboperations.getOrder(request.params.user_email).then(result => {
       response.json(result[0]);
    })

})

router.route('/newuser').post((request,response)=>{

    let nuser = {...request.body}

    dboperations.addOrder(nuser).then(result => {
       response.status(201).json(result);
    })

})

const port = process.env.PORT || 8090;
app.listen(port, () => {
    console.log('listening on port: ' + port);
});