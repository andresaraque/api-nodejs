require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;



// Principal Route
app.use("/api/products", require("./routes/products-routes"));

//Default path
app.get("*", (req, res) => {
  res.status(404);
  res.send("HTTP​ 404 Not Found");
});

app.listen(port, () => {
  console.log(`Server running in port: ${port}`);
});
