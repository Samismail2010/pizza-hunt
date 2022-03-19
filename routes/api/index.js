const router = require('express').Router();

const pizzaRoutes = require('./pizza-routes');

//add prefic of `/pizzas` to routes creates in `pizza-routes.js`
router.use('/pizzas', pizzaRoutes);

module.exports = router;