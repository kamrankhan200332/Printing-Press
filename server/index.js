const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dbConnection = require("./App/db");
const { PORT } = require("./config");
const authRouter = require("./App/routes/authRoute");
const errorHandler = require("./App/middlewares/errorHandler");

app.use(express.json());
app.use(cors());
app.use(cookieParser());
dbConnection();
app.use(authRouter);

app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Server is ready...");
});

app.listen(PORT || 8000, () => {
  console.log(`Server is running on PORT: ${PORT || 8000}`);
});
