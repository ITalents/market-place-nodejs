const router = require("express").Router();
const authMiddleware = require("../middleware/auth.middleware");

const carrinhoController = require("../controller/carrinho.controller");

router.get("/find/:id", authMiddleware, carrinhoController.findCarrinhoByIdController);
router.get("/findAll", authMiddleware, carrinhoController.findAllCarrinhosService);

router.post("/create", authMiddleware, carrinhoController.createCarrinhoService);

router.put("/update/:id", authMiddleware, carrinhoController.updateCarrinhoService);

router.delete("/delete/:id", authMiddleware, carrinhoController.deleteCarrinhoService);

module.exports = router;