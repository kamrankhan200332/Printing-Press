const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    // image: {
    //   type: String,
    //   required: true,
    // },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: [
      {
        title: {
          type: String,
          required: true,
        },
        paragraph: {
          type: String,
          required: true,
        },
      },
    ],
    stickerSize: [
      {
        size: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    brand: {
      title: {
        type: String,
        required: true,
      },
      heading: {
        type: String,
        required: true,
      },
      paragraph: {
        type: String,
        required: true,
      },
      // image: {
      //   type: String,
      //   required: true,
      // },
    },
  },
  { timestamps: true }
);

const productModel = mongoose.model("product", productSchema);
module.exports = productModel;
