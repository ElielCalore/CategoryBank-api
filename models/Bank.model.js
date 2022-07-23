const { Schema, model, Types } = require("mongoose");

const BankSchema = new Schema({
  bankName: { type: String, required: true },
  delimiter: { type: String, required: true, trim: true },
  debit: { type: String, trim: true },
  credit: { type: String, trim: true },
  amount: { type: String, trim: true },
  user: { type: Types.ObjectId, ref: "User" },
});

const BankModel = model("Bank", BankSchema);

module.exports = BankModel;
