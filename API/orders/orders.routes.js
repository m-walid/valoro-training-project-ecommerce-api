const { Router } = require('express');
const ordersController = require('./orders.controller');
const auth = require('../../middlewares/auth')
const router = Router();

router.get('/',[auth,ordersController.getOrders]);
router.post('/',[auth,ordersController.postOrder]);

module.exports = router;