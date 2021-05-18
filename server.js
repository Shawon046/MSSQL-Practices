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

router.route('/users').get((req,res) =>{

    dboperation.getUsers.then(res =>{
        res.json(res[0]);
    })
})


app.get('/',function(req, res) {

    res.sendFile(path.join(__dirname,'signinup/signin-signup.html'))
    dboperation.getUsers.then(response =>{
        console.log(response);
        res.json(response[0]);
    })

});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('listening on port: ' + port);
});