var config = require("./dbconfig");
const sql = require ('mssql');

async function getUsers(){
    try{
        let conn = await sql.connect(config);
        let users = await conn.request().query("SELECT * FROM USERS");
        return users.recordset;
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {
    getUsers : getUsers
}