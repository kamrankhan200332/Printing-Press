const express = require("express");
const productController = require("../controllers/productController");
const upload = require("../middlewares/multer");
const productRouter = express.Router();

productRouter.post(
  "/productInsert",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "brandImage", maxCount: 1 },
  ]),
  productController.productInsert
);

module.exports = productRouter;
