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
11. make other tables as needed
12. in terminal, run:
    knex migrate:latest
13. go to SQLite Studio and add new database and find the one created
14. fill in the table seeds
15. in terminal, run: 
    knex seed:run
16. once you have all the information in your tables and it's correct, set up index.js and server.js
17. set up db-config file
18. set up routers and models 
19. do CRUD operations
20. test in Postman


