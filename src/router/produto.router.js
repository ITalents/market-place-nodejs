const router = require("express").Router();

const produtoController = require("../controller/produto.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaProduto } = require("../middleware/validacao.middleware");

router.get("/find/:id", authMiddleware ,produtoController.findProductByIdController);
router.get("/findAll", authMiddleware ,produtoController.findAllProductscontroller);

router.post("/create", authMiddleware, validaProduto, produtoController.createProductController);
router.post("/addCategoria/:id", authMiddleware ,produtoController.addCategoriaProdutoController);

router.put("/update/:id", authMiddleware, validaProduto,produtoController.updateProductController);

router.delete("/delete/:id", authMiddleware ,produtoController.deleteProductController);
router.delete("/removeCategoria/:id", authMiddleware ,produtoController.removeCategoriaProdutoController);

module.exports = router;