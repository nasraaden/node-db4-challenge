const express = require('express');

const Ingredients = require('./recipe-model.js');

const router = express.Router();

router.get("/", (req, res) => {
    // const { id } = req.params;
    Ingredients.getIngredients()
    .then(ingredients => {
        res.json(ingredients);
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Failed to get ingredients' });
      });
})


module.exports = router;