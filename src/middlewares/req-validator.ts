import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";


/**
 * Middleware to validate the request using the express-validator library.
 *
 * @function
 * @param {Request} req - The Express Request object.
 * @param {Response} res - The Express Response object.
 * @param {NextFunction} next - The Express NextFunction to pass control to the next route handler.
 * @returns {void}
 */
export const requestValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Check for validation errors in the request
  const error = validationResult(req);

  // If there are validation errors, respond with a 400 status and the error details
  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  }

  // If there are no validation errors, pass control to the next route handler
  next();
};
