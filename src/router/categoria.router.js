const router = require("express").Router();
const authMiddleware = require("../middleware/auth.middleware");

const categoriaController = require("../controller/categoria.controller");

router.get("/find/:id", authMiddleware, categoriaController.findCategoriaByIdController);
router.get("/findAll", authMiddleware, categoriaController.findAllCategoriaController);

router.post("/create", authMiddleware, categoriaController.createCategoriaController);

router.put("/update/:id", authMiddleware, categoriaController.updateCategoriaController);

router.delete("/detele/:id", authMiddleware, categoriaController.deleteCategoriaController);
