const { Router } = require("express");
const usersController = require("./users.controller");
const router = Router();

router.post("/login", usersController.login);
router.post("/register", usersController.register);
module.exports = router;
