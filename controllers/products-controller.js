const axios = require("axios");

/**
 * Get a list of products with some params valids (skip, limit ,select) (https://github.com/andresaraque/api-nodejs).
 * @param {object} req - The request object with the queries but passed directly by url, the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on (https://expressjs.com/en/api.html#req).
 * @param {object} res - The response object, the HTTP response that an Express app sends when it gets an HTTP request (https://expressjs.com/en/api.html#res).
 * @returns {Promise<void>} - A promise that resolves to a JSON response with the products.
 * @throws {Error} - Throws an error if there is an issue with the request or with the server of the endpoint.
 */
const getProducts = async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://dummyjson.com/products${req.url.replace("/", "")}`
    );
    res.status(200).json(data);
  } catch (err) {
    res.status(err.response.status).json({
      ok: false,
      msg: err?.response?.data?.message,
      error: err,
    });
    throw new Error(err);
  }
};

/**
 * Get a specific product by ID and use of select param.
 * @param {object} req - The request object with the 'id' parameter. The HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on (https://expressjs.com/en/api.html#req).
 * @param {object} res - The response object. the HTTP response that an Express app sends when it gets an HTTP request (https://expressjs.com/en/api.html#res).
 * @returns {Promise<void>} - A promise that resolves to a JSON response with the product.
 * @throws {Error} - Throws an error if there is an issue with the request or with the server of the endpoint.
 */
const getOneProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(
      `https://dummyjson.com/products/${id}?${req.url.replace(
        /\/[^?]+\?/g,
        ""
      )}`
    );
    res.status(200).json(data);
  } catch (err) {
    res.status(err.response.status).json({
      ok: false,
      msg: err?.response?.data?.message,
      error: err,
    });
    throw new Error(err);
  }
};
module.exports = {
  getProducts,
  getOneProduct,
};
