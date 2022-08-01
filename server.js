require("dotenv").config();

const express = require("express");

const app = express();
const PORT = process.env.PORT || 2001;

app.get("/", (req, res) => {
  res.send("Hello from Ferry");
});

app.listen(PORT, () => console.log(`server listening on port: ${PORT}`));