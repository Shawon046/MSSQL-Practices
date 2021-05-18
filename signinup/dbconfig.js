var sql = require("mssql");

const config = {
        server: 'localhost\\MSSQLSERVER', 
        database: 'workStation',
        user: 'sa',
        password: 'loosely_coupled',
        port : 1433,
        trustServerCertificate: true
}

module.exports = config;