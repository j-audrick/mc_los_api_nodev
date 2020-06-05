const { db } = require('./config');


module.exports = {
    development: {
      client: 'mssql',
      connection: {  
        user: 'sa',  
        password: 'chu2koi',  
        server: 'localhost',  
        database: 'demotape',
        "options": {
          "enableArithAbort": true
        },
       },
      pool: {
        min: 2,
        max: 10,
      },
      migrations: {
        tableName: 'knex_migrations',
      },
    },
    staging: {
      client: 'mssql',
      connection: {
        host: db.host,
        database: db.name,
        user: db.user,
        password: db.password,
      },
      pool: {
        min: 2,
        max: 10,
      },
      migrations: {
        tableName: 'knex_migrations',
      },
    },
    production: {
      client: 'mssql',
      connection: {
        host: db.host,
        database: db.name,
        user: db.user,
        password: db.password,
      },
      pool: {
        min: 2,
        max: 10,
      },
      migrations: {
        tableName: 'knex_migrations',
      },
    },
  };
  
