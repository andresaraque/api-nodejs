require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT;

/**
 * Config Cross-Origin Resource Sharing (CORS) for all origins.
 */
app.use(cors());

/**
 * Express Application for managing API routes.
 * @type {object}
 */
app.use("/api/products", require("./routes/products-routes"));

/**
 * Default route for handling requests to undefined routes.
 * @name GET /*
 * @function
 */
app.get("*", (req, res) => {
  res.status(404);
  res.send("HTTP​ 404 Not Found");
});


/**
 * Starts the Express server on the specified port.
 * @param {number} port - The port number to listen on.
 */
app.listen(port, () => {
  console.log(`Server running in port: ${port}`);
});
