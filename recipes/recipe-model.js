const db = require("./db-config.js")

module.exports = ({
    getRecipes,
    getIngredients
})

function getRecipes() {
    return db.select("*").from("recipes");
}

function getIngredients() {
    return db.select("*").from("ingredients")
}