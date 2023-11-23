import { query, CustomValidator } from "express-validator";

// List of valid options for the 'select' query parameter
const options = [
  "brand",
  "category",
  "description",
  "discountPercentage",
  "images",
  "price",
  "rating",
  "stock",
  "thumbnail",
  "title",
];

/**
 * Common function to validate 'select' parameter.
 * 
 * @param {string} value - The value of the 'select' parameter.
 * @returns {boolean} - Whether the 'select' parameter is valid.
 */
const validateSelect: CustomValidator = (value: string) => {
  const arrayOptions = value.split(",");
  return arrayOptions.every((d) => options.includes(d));
};

/**
 * Middleware schema for validating query parameters related to a list of products.
 * Checks 'limit', 'skip', and 'select' parameters.
 * 
 * @type {Array}
 */
export const productsSchema = [
  query("limit").isInt({ min: 1, max: 100 }).withMessage("Should be numeric between 1 and 100"),
  query("skip").isInt({ min: 1, max: 99 }).withMessage("Should be numeric between 1 and 99"),
  query("select").custom(validateSelect).withMessage("Invalid value for select query param"),
];

/**
 * Middleware schema for validating query parameters related to a single product.
 * Checks 'select' parameter.
 * 
 * @type {Array}
 */
export const productSchema = [
  query("select").custom(validateSelect).withMessage("Invalid value for select query param"),
];
