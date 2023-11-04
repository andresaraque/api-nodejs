const { Router } = require("express");
const { getProducts, getOneProduct } = require("../controllers/products-controller");

const router = Router();

router.get("/", getProducts);

router.get("/:id", getOneProduct);

module.exports = router;
