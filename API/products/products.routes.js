const { Router } = require('express');
const productsController = require('./products.controller');
const router = Router();

router.get('/',productsController.getProducts);
router.get('/:id',productsController.getProducts);
router.post('/',productsController.postProduct);
router.patch('/:id',productsController.editProduct);
router.delete('/:id',productsController.deleteProduct);


module.exports = router;