const router = require("express").Router();
const authMiddleware = require("../middleware/auth.middleware");

const carrinhoController = require("../controller/carrinho.controller");
const { validaCarrinho,  validaId } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

router.get("/find/:id", authMiddleware, validaId, carrinhoController.findCarrinhoByIdController);
router.get("/findAll", authMiddleware, paginacao, carrinhoController.findAllCarrinhosService);

router.post("/create", authMiddleware, validaCarrinho, carrinhoController.createCarrinhoService);

router.put("/update/:id", authMiddleware, validaId, validaCarrinho, carrinhoController.updateCarrinhoService);

router.delete("/delete/:id", authMiddleware, validaId, carrinhoController.deleteCarrinhoService);

module.exports = router;