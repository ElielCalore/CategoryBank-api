const { Schema, model, default: mongoose, Types } = require("mongoose");

const CategorySchema = new Schema({
  Code: { type: String, required: true, trim: true, maxlength: 20 },
  Description: { type: String, required: true, trim: true, maxlength: 150 },
  User: { type: Types.ObjectId, ref: "User" },
  Transactions: [{ type: Types.ObjectId, ref: "Transaction" }],
});

const CategoryModel = model(CategorySchema, "Category");

module.exports = CategoryModel;
