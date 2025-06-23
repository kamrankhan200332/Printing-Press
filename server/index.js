const express = require("express");
const app = express();
const cors = require("cors");
const dbConnection = require("./App/db");
const { PORT } = require("./config");

app.use(express.json());
app.use(cors());
dbConnection();

app.get("/", (req, res) => {
  res.send("Server is ready...");
});

app.listen(PORT || 8000, () => {
  console.log(`Server is running on PORT: ${PORT || 8000}`);
});
