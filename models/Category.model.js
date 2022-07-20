const { Schema, model, default: mongoose, Types } = require("mongoose");

const CategorySchema = new Schema({
  code: { type: String, required: true, trim: true, maxlength: 20 },
  description: { type: String, required: true, trim: true, maxlength: 150 },
  user: { type: Types.ObjectId, ref: "User" },
  transactions: [{ type: Types.ObjectId, ref: "Transaction" }],
});

const CategoryModel = model(CategorySchema, "Category");

module.exports = CategoryModel;
