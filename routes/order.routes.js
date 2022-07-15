const routeName = '/api/v1/order';

module.exports = (app) => {
    const OrderController = require('../controllers/OrderController');

    app.post(routeName, OrderController.create);

    app.get(routeName, OrderController.readAll);

    app.get(`${routeName}/:id`, OrderController.read);

    app.put(`${routeName}/:id`, OrderController.update);


    app.delete(`${routeName}/:id`, OrderController.delete);


}