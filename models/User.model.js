<<<<<<< HEAD
const { Schema, model } = require("mongoose");
=======
const { Schema, model, default: mongoose, Types } = require("mongoose");
>>>>>>> b3d2c012e284712c5d14a99b78933ff9a8ccb16b

const userSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    //match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  },
  passwordHash: { type: String, required: true },
  transactions: [{ type : Types.ObjectId, ref: "Transaction" }],
  categories: [{ type: Types.ObjectId, ref: "Category" }]
  
});

const UserModel = model("User", userSchema);

module.exports = UserModel;
