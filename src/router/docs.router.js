const router = require("express").Router();

const swaggetUi = require("swagger-ui-express");
const swaggerDocument = require("../../swagger.json");

router.use("/api-docs", swaggetUi.serve);
router.get("/api-docs", swaggetUi.setup(swaggerDocument));

module.exports = router;