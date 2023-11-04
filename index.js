require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;



//Default path
app.get("/", (req, res) => {
  res.send("All good");
});

app.listen(port, () => {
  console.log(`Server running in port: ${port}`);
});
