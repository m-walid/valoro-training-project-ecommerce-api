const { Router } = require('express');
const ordersController = require('./orders.controller');
const router = Router();

router.get('/:id',ordersController.getOrders);
router.post('/',ordersController.postOrder);

module.exports = router;