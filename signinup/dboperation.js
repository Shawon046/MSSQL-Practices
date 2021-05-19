var config = require("./dbconfig");
const sql = require ('mssql');

async function getUsers(){
    try{
        let conn = await sql.connect(config);
        let users = await conn.request().query("SELECT * FROM USERS");
        console.log(json(users.recordset[0]))
        return users.recordset;
    }
    catch(error){
        console.log(error);
    }
}

async function getUser(user_email) {
    try {
        let pool = await sql.connect(config);
        let user = await pool.request()
            .input('input_parameter', sql.NVarChar, user_email)
            .query("SELECT * from uaers where user_email = @input_parameter");
        return user.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}


async function addUser(user) {

    try {
        let pool = await sql.connect(config);
        let insertUser = await pool.request()
            .input('Id', sql.NVarChar, user.user_name)
            .input('Title', sql.NVarChar, user.user_email)
            .input('Quantity', sql.NChar, user.user_country)
            .input('Message', sql.NChar, user.user_phone)
            .input('City', sql.NChar, user.user_password)
            .execute('InsertUser');
        return insertUser.recordsets;
    }
    catch (err) {
        console.log(err);
    }

}

module.exports = {
    getUsers : getUsers,
    getUser : getUser,
    addUser : addUser
}