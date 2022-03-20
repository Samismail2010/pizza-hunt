const router = require('express').Router();

const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');

//add prefic of `/pizzas` to routes creates in `pizza-routes.js`
router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);


module.exports = router;