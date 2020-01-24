# Instructions

1. npm i
2. npm i (express, knex, sqlite3)
3. knex init 
    - creates knexfile.js
4. in knexfile.js, add:
    useNullAsDefault: true, // needed for sqlite
    connection: {
      filename: './data/recipes.db3',
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
5. add data folder
    - has migrations folder and seeds folder
6. in terminal, run:
    knex migrate:make recipes
7. add to function up
    - create tables
8. add to function down
    - drop tables
9. in terminal, run:
    knex seed:make 001-table
10. in 001-table.js, add table information
11. in terminal, run:
    knex seed:run
    knex migrate:latest
