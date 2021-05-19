var Db = require('./signinup/dboperation');
var u = require('./signinup/user');
var dboperation = require('./signinup/dboperation');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);
app.use('/static', express.static('signinup'))

router.use((req,res,next)=>{
    console.log('middleware');
    next();
})

app.get('/',function(req, res) {
    res.sendFile(path.join(__dirname,'signinup/signin-signup.html'))
});

app.get('/dash',function(req, res) {
    res.sendFile(path.join(__dirname,'signinup/dashboard.html'))
});

app.get('/users',function(req, res) {
    try{
        dboperation.getUsers.then(res =>{
            res.json(res[0]);
        })
    }
    catch(error){
        console.log(error);
    }
});

router.route('/users').get((req,res) =>{
    try{
        dboperation.getUsers.then(res =>{
            res.json(res[0]);
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