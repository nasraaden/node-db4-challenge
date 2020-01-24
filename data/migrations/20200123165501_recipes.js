
exports.up = function(knex) {
    return knex.schema
        .createTable("recipes", tbl => {
            tbl.increments(); // id
            tbl.string("recipe_name").notNullable();
            tbl.text("instructions").notNullable();
        })
        .createTable("ingredients" , tbl => {
            tbl.increments(); // id
            tbl.string("ingredient_name").notNullable();
            tbl.string("measurement_type")
        })
        .createTable("recipe_ingredients" , tbl => {
            tbl.increments(); // id
            tbl.integer("recipe_id").notNullable();
            tbl.integer("ingredient_id").notNullable();
            tbl.float("quantity").notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipes')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipe_ingredients')
};