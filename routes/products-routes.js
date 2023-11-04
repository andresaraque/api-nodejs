const { Router } = require("express");
const { getProducts, getOneProduct } = require("../controllers/products-controller");

/**
 * Express Router for managing product-related routes.
 * @type {object}
 */
const router = Router();

/**
 * Route for getting a list of products.
 * @name GET api/products
 * @function
 */
router.get("/", getProducts);


/**
 * Route for getting a specific product by ID.
 * @name GET api/products/:id
 * @function
 * @param {string} id - The ID of the product 0 to 100.
 */
router.get("/:id", getOneProduct);

module.exports = router;
