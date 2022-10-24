const env = process.env


const development = {
    username : env.MYSQL_USER,
    password: env.MYSQL_PASSWORD,
    database: env.MYSQL_DATABASE,
    host : env.MYSQL_HOST,
    dialect: env.MYSQ_DIALECT
  }
const test = {  
    username: "root",
    passwrd :null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  }
const  production = {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
  console.log(development)



  module.exports = { development }