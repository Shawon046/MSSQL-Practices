const express = require('express');
const path = require('path');

const app = express();
app.use('/static', express.static('signinup'))

const port = 3000;

app.get('/',function(req, res) {
    res.sendFile(path.join(__dirname,'signinup/signin-signup.html'))

    console.log("requiring mssql....")

    var sql = require("mssql");

    // config for your database
    var config = {
        server: 'localhost\\MSSQLSERVER', 
        database: 'workStation',
        user: 'sa',
        password: 'loosely_coupled',
        port : 1433,
        trustServerCertificate: true
    };

    function getUsers() {
        var conn = new sql.ConnectionPool(config);
        var req = new sql.Request(conn);

        conn.connect(function(err){
            if(err){
                console.log(err);
                return;
            }
            req.query("SELECT * FROM USERS",function(err,recordset){
                if(err){
                    console.log(err);
                }
                else{
                    console.log(recordset);
                }
                conn.close();
            });
        });
    }

    getUsers();

});

app.listen(port, () => {
    console.log('listening on port: ' + port);
});