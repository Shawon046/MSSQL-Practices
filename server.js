const express = require('express');
const path = require('path');


const app = express();
app.use('/static', express.static('signinup'))

app.get('/',function(req, res) {
    res.sendFile(path.join(__dirname,'signinup/signin-signup.html'))
});

app.listen(3000);