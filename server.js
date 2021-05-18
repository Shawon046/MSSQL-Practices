const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');


const app = express();
// app.use(bodyParser.json({limit: '50mb'}));


app.use('/static', express.static( 'signinup'));

app.get('/',function(req, res) {
    res.sendFile(path.join(__dirname,'signinup/signin-signup.html'));
    console.log(__dirname);
    // res.sendFile(path.join(__dirname,'signinup/check.html'))
    // res.sendFile('/static/index.html');
});


// 19 votes
app.post('/api/new_user', function(req, res, next){
    var data = req.body.params;
    console.log(data);

    // app.post('/api/book', function(req, res, next){
    //     var cope = req.body.params;
    //     var query = connection.query('insert into cope set ?', cope, function(err, result) {
    //       if (err) {
    //         console.error(err);
    //         return res.send(err);
    //       } else {
    //         return res.send('Ok');
    //       }
    //  });

    return res.send('Ok');
        
 });


 // 4 votes
// app.post('/blah', function(req, res, next) {
//     var cope = req.body;
//     console.log('request received:', req.body);
//    var query = connection.query('insert into cope set ?', cope, function (err,     result) {
//     if (err) {
//         console.error(err);
//         return res.send(err);
//     } else {
//         return res.send('Ok');
//     }
// });

app.listen(3000);