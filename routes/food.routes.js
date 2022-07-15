const routeName = '/api/v1/food';

module.exports = (app) => {
    const foodController = require('../controllers/FoodController');

    app.post(routeName, foodController.create);

    app.get(routeName, foodController.readAll);

    app.get(`${routeName}/:id`, foodController.read);

    app.put(`${routeName}/:id`, foodController.update);


    app.delete(`${routeName}/:id`, foodController.delete);


}