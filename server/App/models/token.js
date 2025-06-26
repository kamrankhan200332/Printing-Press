const mongoose = require("mongoose");

const refreshTokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "authTable",
    },
  },
  { timestamps: true }
);

const refreshTokenModel = mongoose.model("tokens", refreshTokenSchema);
module.exports = refreshTokenModel;
