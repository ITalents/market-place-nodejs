const router = require("express").Router();
const authMiddleware = require("../middleware/auth.middleware");

const carrinhoController = require("../controller/carrinho.controller");
const { validaCarrinho } = require("../middleware/validacao.middleware");

router.get("/find/:id", authMiddleware, carrinhoController.findCarrinhoByIdController);
router.get("/findAll", authMiddleware, carrinhoController.findAllCarrinhosService);

router.post("/create", authMiddleware, validaCarrinho, carrinhoController.createCarrinhoService);

router.put("/update/:id", authMiddleware, validaCarrinho, carrinhoController.updateCarrinhoService);

router.delete("/delete/:id", authMiddleware, carrinhoController.deleteCarrinhoService);

module.exports = router;