const express = require('express');
const path = require('path');


const app = express();
app.use('/static', express.static('angulartest'))

app.get('/',function(req, res) {
    res.sendFile(path.join(__dirname,'angulartest/ang.html'))
});

app.listen(8080);