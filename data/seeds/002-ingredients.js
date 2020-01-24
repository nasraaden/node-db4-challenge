
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {
          ingredient_name: "eggs",
          measurement_type: "none"
        },
        {
          ingredient_name: "butter",
          measurement_type: "tbsp"
        },
        {
          ingredient_name: "cereal", 
          measurement_type: "cup"
        },
        {
          ingredient_name: "milk", 
          measurement_type: "cup"
        },
        {
          ingredient_name: "bread",
          measurement_type: "slices"
        },
        {
          ingredient_name: "peanut butter", 
          measurement_type: "tbsp"
        },
        {
          ingredient_name: "jelly", 
          measurement_type: "tbsp"
        },
      ]);
    });
};
