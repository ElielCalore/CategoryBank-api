const { Schema, model, Types } = require("mongoose");

const TransactionSchema = new Schema({
  date: { type: Date, required: true },
  description: { type: String, required: true, trim: true },
  credit: { type: Number, trim: true, default: 0 },
  debt: { type: Number, trim: true, default: 0 },
  categories: { type: Types.ObjectId, ref: "Category" },
  user: { type: Types.ObjectId, ref: "User" },
});

const CategoryModel = model(TransactionSchema, "Transactions");

module.exports = CategoryModel;