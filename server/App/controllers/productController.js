const Joi = require("joi");

const productController = {
  async productInsert(req, res, next) {
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
        image: Joi.string()
          .required()
          .messages({ "any.required": "image is required!" }),
      }),
    });

    const { error } = productSchema.validate(req.body);
    if (error) {
      return next(error);
    }

    const { name, price, description, stickerSize, brand } = req.body;
    const image = req.files["image"][0];
    const brandImage = req.files["brandImage"][0];
    res.status(201).json({
      fullBody: { ...req.body, brand: brandImage.path },
      image: req.files,
    });
  },
};

module.exports = productController;
