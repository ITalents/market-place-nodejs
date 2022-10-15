const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");

const authMiddleware = require("../middleware/auth.middleware");
const { validaUsuario } = require("../middleware/validacao.middleware");

//rotas GET
router.get('/findById/:id', authMiddleware, usuarioController.findUserByIdController);
router.get('/findAll', authMiddleware, usuarioController.findAllUsersController);

//rotas POST
router.post('/create', validaUsuario, usuarioController.createUserController);
router.post('/addAddress/:id', authMiddleware, usuarioController.addUserAddressController);
router.post('/addFavProduct/:id', authMiddleware, usuarioController.addUserFavProductController);

//rotas PUT
router.put('/update/:id', authMiddleware, validaUsuario, usuarioController.updateUserController);

//rotas DELETE
router.delete('/remove/:id', authMiddleware, usuarioController.removeUserController);
router.delete('/removeAddress', authMiddleware, usuarioController.removeUserAddressController);
router.delete('/removeFavProduct/:id', authMiddleware, usuarioController.removeUserFavProductController);

module.exports = router;