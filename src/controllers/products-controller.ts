import axios, { AxiosResponse } from "axios";
import { Request, Response } from "express";
import { Product, Products } from "../models/dummy-api"; // Import necessary types/interfaces

// Base URL for the product API
const BASE_URL: string = "https://dummyjson.com/products";

/*
  Regular expression to match and clean certain elements from the URL
  Explanation:
  /             : Start of the regular expression.
  [^?]+         : Match one or more characters that are NOT a question mark (?).
  \?            : Match the first question mark in the string.
  /g            : Global flag, indicates to match all instances, not just the first one.
*/
const REGEX_FULL_URL_QUERIES: RegExp = /\/[^?]+\?/g;


/**
 * Retrieves a list of products with optional query parameters.
 *
 * @async
 * @function
 * @param {Request} req - The request object. May include optional query parameters. (https://expressjs.com/en/api.html#req)
 * @param {Response} res - The response object. (https://expressjs.com/en/api.html#res)
 * @returns {Promise<void>} - A promise that resolves to a JSON response with the products.
 */
const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const { data }: AxiosResponse<Products> = await axios.get(
      `${BASE_URL}${req.url.replace("/", "")}`
    );
    res.status(200).json(data);
  } catch (err) {
    handleError(err, res);
  }
};


/**
 * Retrieves a specific product by ID.
 *
 * @async
 * @function
 * @param {Request} req - The request object with the 'id' parameter. May include an optional 'select' query parameter.
 * @param {Response} res - The response object. (https://expressjs.com/en/api.html#res)
 * @returns {Promise<void>} - A promise that resolves to a JSON response with the product.
 */
const getOneProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { data }: AxiosResponse<Product> = await axios.get(
      `${BASE_URL}/${id}?${req.url.replace(REGEX_FULL_URL_QUERIES, "")}`
    );
    res.status(200).json(data);
  } catch (err) {
    handleError(err, res);
  }
};


/**
 * Handles errors and sends an error response to the client.
 *
 * @function
 * @param {*} err - The error object. May contain response information.
 * @param {Response} res - The response object to send the error response.
 * @returns {Response} - An error response JSON object.
 */
function handleError(err: any, res: Response): Response {
  return res.status(err.response ? err.response.status : 500).json({
    ok: false,
    msg: err.response?.data.message || "Error",
    error: err,
  });
}

export { getProducts, getOneProduct };
