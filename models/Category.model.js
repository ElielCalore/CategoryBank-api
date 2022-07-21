const { Schema, model, Types } = require("mongoose");

const CategorySchema = new Schema({
  code: { type: String, required: true, trim: true, maxlength: 20 },
  description: { type: String, required: true, trim: true, maxlength: 150 },
  user: { type: Types.ObjectId, ref: "User" },
  transactions: [{ type: Types.ObjectId, ref: "Transaction" }],
});

const CategoryModel = model("Category", CategorySchema);

module.exports = CategoryModel;
