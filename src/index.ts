import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import productsRoutes from './routes/products-routes';

dotenv.config();
const app: Express = express();
const port: number | string = process.env.PORT || 3500; // Default value in case PORT from environment is not defined

// Config Cross-Origin Resource Sharing (CORS) for all origins.
app.use(cors());

/**
 * Express Application for managing API routes.
 * @type {Express}
 */
app.use("/api/products", productsRoutes);

/**
 * Default route for handling requests to undefined routes.
 * @name GET /*
 * @function
 */
app.get("*", (req: Request, res: Response) => {
  res.status(404);
  res.send("HTTP​ 404 Not Found");
});

/**
 * Starts the Express server on the specified port.
 * @param {number | string} port - The port number to listen on.
 */
app.listen(port, () => {
  console.log(`(TS) Server running in port: ${port}`);
});
