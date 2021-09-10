const { Router } = require("express");
const usersController = require("./users.controller");
const router = Router();

router.post("/login", usersController.login);
module.exports = router;
