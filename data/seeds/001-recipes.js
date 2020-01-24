
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          recipe_name: "Scrambled Eggs", 
          instructions: 'Lightly beat the eggs in a medium bowl. Melt 1 tablespoon of the butter in a skillet. Add the eggs, and cook slowly, scraping them up with a rubber spatula occasionally, until most of the liquid has thickened and the eggs are soft, about 10 minutes. Remove them from the heat, and gently fold in the remaining 1 tablespoon of butter. Serve hot.'
        },
        {
          recipe_name: "Cereal", 
          instructions: 'Pour cereal into a medium bowl. Add milk and enjoy.'
        },
        {
          recipe_name: "Peanut Butter and Jelly",
          instructions: "Toast the pieces of bread. Add peanut butter to one slice of bread. Add jelly to the other slice of bread. Join the two slices of bread together and enjoy."
          }
      ]);
    });
};
