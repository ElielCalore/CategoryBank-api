const { Schema, model, Types } = require("mongoose");

const BankSchema = new Schema({
	date: { type: Date, required: true },
	description: { type: String, required: true, trim: true },
	amount: { type: Number, required: true, trim: true },
	user: { type: Types.ObjectId, ref: "User" },
});

const BankModel = model("Bank", BankSchema);

module.exports = BankModel;
