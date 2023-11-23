import { Router, Request, Response } from "express";
import { getProducts, getOneProduct } from "../controllers/products-controller";
import { requestValidator } from "../middlewares/req-validator";
import { productSchema, productsSchema } from "../validators/product-params";


/**
 * Express Router instance to define API routes related to products.
 * @type {Router}
 */
const router: Router = Router();

/**
 * Route to get a list of products.
 *
 * @name GET /api/products
 * @function
 * @middleware {Function} productsSchema - Middleware to validate request query parameters against the products schema.
 * @middleware {Function} requestValidator - Middleware to validate the request.
 * @param {Request} req - The Express Request object.
 * @param {Response} res - The Express Response object.
 * @returns {void}
 */
router.get("/", productsSchema, requestValidator, (req: Request, res: Response) => getProducts(req, res));

/**
 * Route to get a specific product by ID.
 *
 * @name GET /api/products/:id
 * @function
 * @middleware {Function} productSchema - Middleware to validate request parameters against the product schema.
 * @middleware {Function} requestValidator - Middleware to validate the request.
 * @param {Request} req - The Express Request object with the 'id' parameter.
 * @param {Response} res - The Express Response object.
 * @returns {void}
 */
router.get("/:id", productSchema, requestValidator, (req: Request, res: Response) => getOneProduct(req, res));



export default router;
