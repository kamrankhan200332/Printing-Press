const Joi = require("joi");
const productModel = require("../models/product.model");

const productController = {
  async productInsert(req, res, next) {
    console.log("req.body", req.body);
    console.log("req.files", req.files);
    const productSchema = Joi.object({
      name: Joi.string()
        .max(30)
        .required()
        .messages({ "any.required": "name is required!" }),
      price: Joi.number()
        .required()
        .messages({ "any.required": "price is required!" }),
      description: Joi.array().items(
        Joi.object({
          title: Joi.string()
            .required()
            .messages({ "any.required": "title is required!" }),
          paragraph: Joi.string()
            .required()
            .messages({ "any.required": "paragraph is required!" }),
        })
      ),
      stickerSize: Joi.array().items(
        Joi.object({
          size: Joi.string()
            .required()
            .messages({ "any.required": "size is required!" }),
          price: Joi.number()
            .required()
            .messages({ "any.required": "price is required!" }),
        })
      ),
      brand: Joi.object({
        title: Joi.string()
          .required()
          .messages({ "any.required": "title is required!" }),
        heading: Joi.string()
          .required()
          .messages({ "any.required": "heading is required!" }),
        paragraph: Joi.string()
          .required()
          .messages({ "any.required": "paragraph is required!" }),
        // image: Joi.string()
        //   .required()
        //   .messages({ "any.required": "image is required!" }),
      }),
    });

    const payload = {
      ...req.body,
      description:
        typeof req.body.description === "string"
          ? JSON.parse(req.body.description)
          : req.body.description,
      stickerSize:
        typeof req.body.stickerSize === "string"
          ? JSON.parse(req.body.stickerSize)
          : req.body.stickerSize,
    };

    const { error } = productSchema.validate(payload);
    if (error) {
      return next(error);
    }

    const { name, price, description, stickerSize, brand } = payload;
    const image = req.files["image"][0];
    const brandImage = req.files["brandImage"][0];

    const insertObj = new productModel({
      name,
      price,
      description,
      stickerSize,
      brand,
      // image: image.path,
      // brandImage: brandImage.path,
    });
    const insertResponse = await insertObj.save();
    res.status(201).json({
      message: "Data inserted successfully",
      response: insertResponse,
      // fullBody: { ...req.body, brand: brandImage.path },
      // image: req.files,
    });
  },
};

module.exports = productController;
