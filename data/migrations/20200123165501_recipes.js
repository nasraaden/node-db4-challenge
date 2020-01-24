
exports.up = function(knex) {
    return knex.schema
        .createTable("recipes", tbl => {
            tbl.increments();
            tbl.string("recipe_name").notNullable();
        })
        .createTable("ingredients" , tbl => {
            tbl.increments();

        })
        .createTable("recipe_ingredients" , tbl => {
            tbl.increments();

        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipes')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipe_ingredients')
};