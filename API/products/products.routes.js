const { Router } = require("express");
const { roleAuth } = require("../../middlewares/roleAuth");
const auth = require("../../middlewares/auth");
const { roles } = require("../../utils/enums");
const productsController = require("./products.controller");
const router = Router();

router.get("/", productsController.getProducts);
router.get("/:id", productsController.getProduct);
router.post("/", [auth, roleAuth(roles.ADMIN), productsController.postProduct]);
router.patch("/:id", [
  auth,
  roleAuth(roles.ADMIN),
  productsController.editProduct,
]);
router.delete("/:id", [
  auth,
  roleAuth(roles.ADMIN),
  productsController.deleteProduct,
]);

module.exports = router;
