const router = require("express").Router();
const isAuth = require("../middlewares/isAuth");
const attachCurrentUser = require("../middlewares/attachCurrentUser");
const UserModel = require("../models/User.model");
const CategoryModel = require("../models/Category.model");
const TransactionModel = require("../models/Transaction.model");

//Create

router.post("/new-transaction"),
  isAuth,
  attachCurrentUser,
  async (req, res) => {
    const loggedInUser = req.currentUser;
    try {
      const newTransaction = await TransactionModel.create({
        ...req.body,
        user: loggedInUser._id,
      });
      await UserModel.findOneAndUpdate(
        { _id: loggedInUser },
        { $push: { transactions: newTransaction._id } },
        { new: true }
      );
      return res.status(201).json(newTransaction);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  };

// Read - All

router.get("/transactions", isAuth, attachCurrentUser, async (req, res) => {
  const loggedInUser = req.currentUser;
  try {
    const transactions = await TransactionModel.find({
      user: loggedInUser._id,
    });
    return res.status(200).json(transactions);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

//READ - DETAILS
router.get("/:transactionId", isAuth, attachCurrentUser, async (req, res) => {
  const loggedInUser = req.currentUser;
  const transactionId = req.params;
  try {
    const transaction = TransactionModel.findOne({ _id: transactionId });
    if (loggedInUser._id !== transaction.user) {
      return res
        .status(401)
        .json({ message: "You are not authorized to view this transaction." });
    }
    const transactionDetails = await TransactionModel.findOne({
      _id: transactionId,
    }).populate("categories");
    return res.status(200).json(transactionDetails);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

//UPDATE

router.patch(
  "/update/:transactionId",
  isAuth,
  attachCurrentUser,
  async (req, res) => {
    const loggedInUser = req.currentUser;
    const transactionId = req.params;

    delete req.body.categories;

    try {
      const transactions = TransactionModel.findOne({ _id: transactionId });

      if (loggedInUser._id != transactionId._id) {
        return res.status(401).json({
          message: "You are not authorized to view this transaction.",
        });
      }

      const editedTransaction = await TransactionModel.findOneAndUpdate(
        { _id: transactionId },
        { ...req.body },
        { new: true }
      );
      return res.status(200).json(editedTransaction);
    } catch (error) {
      console.error(error);
      return res.status(500), json(error);
    }
  }
);

module.exports = router;
