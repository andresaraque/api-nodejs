const axios = require("axios");
const { AxiosError } = require("axios");

const BASE_URL = "https://dummyjson.com/products";
const REGEX_FULL_URL_QUERIES = /\/[^?]+\?/g;

/**
 * Get a list of products with optional query parameters (skip, limit, select).
 * @param {object} req - The request object. May include optional query parameters. (https://expressjs.com/en/api.html#req)
 * @param {object} res - The response object. (https://expressjs.com/en/api.html#res)
 * @returns {Promise<void>} - A promise that resolves to a JSON response with the products.
 * @throws {Error} - Throws an error if there is an issue with the request or the server of the endpoint.
 */
const getProducts = async (req, res) => {
  try {
    const { data } = await axios.get(`${BASE_URL}${req.url.replace("/", "")}`);
    res.status(200).json(data);
  } catch (err) {
    handleError(err, res);
  }
};


/**
 * Get a specific product by ID with an optional 'select' query parameter.
 * @param {object} req - The request object with the 'id' parameter. May include an optional 'select' query parameter. (https://expressjs.com/en/api.html#req)
 * @param {object} res - The response object. (https://expressjs.com/en/api.html#res)
 * @returns {Promise<void>} - A promise that resolves to a JSON response with the product.
 * @throws {Error} - Throws an error if there is an issue with the request or the server of the endpoint.
 */

const getOneProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(
      `${BASE_URL}/${id}?${req.url.replace(REGEX_FULL_URL_QUERIES, "")}`
    );
    res.status(200).json(data);
  } catch (err) {
    handleError(err, res);
  }
};
module.exports = {
  getProducts,
  getOneProduct,
};



/**
 * Handles errors and sends an error response to the client.
 * This function is used to handle errors and send error responses to the client when an issue occurs.
 * 
 * @param {AxiosError} err - The error object. May contain response information.
 * @param {object} res - The response object to send the error response. (https://expressjs.com/en/api.html#req)
 * @returns {object} - An error response JSON object.
 *
 * @throws {Error} - Throws an error if there is an issue with the provided error object.
 *
 * @example
 * const error = new AxiosError('Something went wrong');
 * handleError(error, res);
 */

function handleError(err, res) {
  return res.status(err.response ? err.response.status : 500).json({
    ok: false,
    msg: err?.response?.data?.message || "Error",
    error: err,
  });
}
