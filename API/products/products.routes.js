const { Router } = require('express');
const { roleAuth } = require('../../middlewares/roleAuth');
const { roles } = require('../../utils/enums');
const productsController = require('./products.controller');
const router = Router();

router.get('/',productsController.getProducts);
router.get('/:id',productsController.getProduct);
router.post('/',productsController.postProduct);
router.patch('/:id',productsController.editProduct);
router.delete('/:id',productsController.deleteProduct);


module.exports = router;