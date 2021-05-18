const express = require('express');
const path = require('path');

const app = express();
app.use('/static', express.static('signinup'))

const port = process.env.PORT || 3000;

app.get('/',function(req, res) {
    res.sendFile(path.join(__dirname,'signinup/signin-signup.html'))

    getUsers();

});

app.listen(port, () => {
    console.log('listening on port: ' + port);
});