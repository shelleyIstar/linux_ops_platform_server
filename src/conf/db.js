const env = process.env.NODE_ENV

let MYSQL_CONF

if (env == 'dev') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'xxmkDg04',
        port: '3306',
        database: 'linux'
    }
}

module.exports = {
    MYSQL_CONF
}