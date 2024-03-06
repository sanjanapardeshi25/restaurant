
/*const express = require('express');
const router = express.Router();
const Dish = require('../models/dishes');


router.get('/vegetarian-menu', async (req, res) => {
  try {
    const vegetarianDishes = await Dish.find({ isVegetarian: true });
    res.render('vegetarian-menu', { dishes: vegetarianDishes });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});




module.exports = router;
*/