const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");

router.get('/findById:id', usuarioController.findUserByIdController);
router.get('/findAll', usuarioController.findAllUsersController);

router.post('/create', usuarioController.createUserController);
router.post('/addAddress/:id', usuarioController.addUserAddressController);
router.post('/addFavProduct/:id', usuarioController.addUserFavProduct);

router.put('/update/:id', usuarioController.updateUserController);

router.detele('/remove/:id', usuarioController.removeUserController);
router.delete('/removeAddress', usuarioController.removeUserAddressController);
router.delete('/removeFavProduct', usuarioController.removeUserFavProduct);

module.exports = router;