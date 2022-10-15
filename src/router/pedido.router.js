const router = require("express").Router();

const pedidoController = require("../controller/pedido.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.get("/find/:id", authMiddleware ,pedidoController.findPedidoByIdController);
router.get("/findAll", authMiddleware ,pedidoController.findAllPedidosController);

router.post("/create", authMiddleware ,pedidoController.createPedidoController);

router.delete("/delete/:id", authMiddleware ,pedidoController.deletePedidoController);

router.patch("/updateStatus/:id", authMiddleware, pedidoController.updateStatusPedidoController);

module.exports = router;